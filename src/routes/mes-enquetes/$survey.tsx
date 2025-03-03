import { Outlet, createFileRoute, notFound, useRouter } from "@tanstack/react-router";
import { SurveyHomepage } from "components/surveyHomepage/SurveyHomepage";
import { useTranslation } from "i18n";
import { Helmet } from "react-helmet-async";
import { getPageTitle } from "functions/getPageTitle";
import { Chatbot } from "components/Chatbot";
import { Loading } from "components/surveyHomepage/Loading";
import { SurveyTable } from "components/surveyHomepage/SurveyTable";
import { fr } from "@codegouvfr/react-dsfr";
import { DSFRHide } from "components/commons/DSFRHide";
import type { Status } from "components/surveyHomepage/QuestioningStatus";
import { QuestioningCardList } from "components/surveyHomepage/QuestioningCardList";
import { useFetchQueryPortail } from "hooks/useFetchQuery";

const statusOrder: Record<Status, number> = {
  OPEN: 1,
  INCOMING: 2,
  RECEIVED: 3,
  NOT_RECEIVED: 4,
};

export const Route = createFileRoute("/mes-enquetes/$survey")({
  component: Index,
  caseSensitive: false,
  loader: ({ params, context }) => {
    const surveyData = context.getSurveyData({ surveyId: params.survey });
    if (!surveyData) {
      throw notFound();
    }
    return { surveyData, genericData: context.getGenericData() };
  },
  pendingComponent: Loading,
});

function Index() {
  const { t: headerTranslation } = useTranslation("Header");
  const { t } = useTranslation("SurveyHomepage");
  const { surveyData } = Route.useLoaderData();
  const router = useRouter();

  const { data, isLoading } = useFetchQueryPortail("/questionnaires");

  if (isLoading || !data) {
    return <Loading />;
  }

  const currentPath = router.history.location.pathname;

  const hasNotSideMenu =
    currentPath.includes("/repondant/mail") ||
    currentPath.includes("/assistance") ||
    currentPath.includes("/login") ||
    currentPath.includes("/erreur");

  if (hasNotSideMenu) {
    return <Outlet />;
  }

  const sectionTitle = getPageTitle(currentPath);

  const hasSingleSurveyUnit = data.every(current => current.surveyUnitId === data[0].surveyUnitId);

  const questioningWithIdentificationCode = data.find(
    questioning =>
      questioning.surveyUnitIdentificationCode !== "" &&
      questioning.surveyUnitIdentificationCode != null,
  );

  const questioningsSectionTitle =
    hasSingleSurveyUnit && questioningWithIdentificationCode
      ? `${surveyData.title} ${t("for")} ${questioningWithIdentificationCode.surveyUnitIdentificationCode}`
      : surveyData.title;

  const questionings = [...data].sort((questioningA, questioningB) => {
    const statusA = questioningA.questioningStatus
      ? statusOrder[questioningA.questioningStatus as Status]
      : Infinity;
    const statusB = questioningB.questioningStatus
      ? statusOrder[questioningB.questioningStatus as Status]
      : Infinity;

    if (statusA !== statusB) {
      return statusA - statusB;
    }

    const identificationCodeA = questioningA.surveyUnitIdentificationCode?.toLowerCase() ?? "";
    const identificationCodeB = questioningB.surveyUnitIdentificationCode?.toLowerCase() ?? "";

    if (identificationCodeA === "" && identificationCodeB === "") return 0;
    if (identificationCodeA === "") return 1;
    if (identificationCodeB === "") return -1;

    if (identificationCodeA !== identificationCodeB) {
      return identificationCodeA.localeCompare(identificationCodeB);
    }

    const partitioningLabelA = questioningA.partitioningLabel?.toLowerCase() ?? "";
    const partitioningLabelB = questioningB.partitioningLabel?.toLowerCase() ?? "";

    if (partitioningLabelA === "" && partitioningLabelB === "") return 0;
    if (partitioningLabelA === "") return 1;
    if (partitioningLabelB === "") return -1;

    return partitioningLabelA.localeCompare(partitioningLabelB);
  });

  return (
    <div>
      <Helmet>
        <title>{`${t(sectionTitle)} - ${surveyData.titleShort} - ${headerTranslation("service tagline")}`}</title>
      </Helmet>
      <SurveyHomepage survey={surveyData} />
      <div
        className={fr.cx("fr-container--fluid", "fr-pt-3w")}
        style={{
          backgroundColor: fr.colors.decisions.background.alt.grey.default,
        }}
      >
        <DSFRHide hidden unhidden unhiddenScreenSize="md">
          <SurveyTable
            title={questioningsSectionTitle}
            questionings={questionings}
            hasSingleSurveyUnit={hasSingleSurveyUnit}
          />
        </DSFRHide>
        <DSFRHide hidden hiddenScreenSize="md">
          <QuestioningCardList
            questionings={questionings}
            questioningsSectionTitle={questioningsSectionTitle}
            hasSingleSurveyUnit={hasSingleSurveyUnit}
          />
        </DSFRHide>
      </div>
      {surveyData.isSurveyOnline && <Chatbot />}
    </div>
  );
}
