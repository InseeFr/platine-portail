import { Outlet, createFileRoute, notFound, useRouter } from "@tanstack/react-router";
import { SurveyHomepage } from "components/surveyHomepage/SurveyHomepage";
import { useTranslation } from "i18n";
import { Helmet } from "react-helmet-async";
import { getPageTitle } from "functions/getPageTitle";
import { Chatbot } from "components/Chatbot";
import { Loading } from "components/surveyHomepage/Loading";
import { SurveyTable } from "components/surveyHomepage/SurveyTable";
import { fr } from "@codegouvfr/react-dsfr";
import { QuestioningCard } from "components/surveyHomepage/QuestioningCard";
import { DSFRHide } from "components/commons/DSFRHide";
import type { Status } from "components/surveyHomepage/QuestioningStatus";

// TODO: remove when get endpoint

const statusOrder: Record<Status, number> = {
  OPEN: 1,
  INCOMING: 2,
  RECEIVED: 3,
  NOT_RECEIVED: 4,
};
const data: {
  sourceId: string;
  surveyUnitIdentificationCode: string;
  surveyUnitIdentificationName: string;
  partitioningLabel: string;
  questioningStatus: Status;
  questioningAccessUrl?: string;
  deliveryUrl?: string;
  questioningId: string;
}[] = [
  {
    sourceId: "TIC",
    surveyUnitIdentificationCode: "SIREN 1",
    surveyUnitIdentificationName: "Barilla",
    partitioningLabel: "Questionnaire 1",
    questioningStatus: "RECEIVED",
    questioningAccessUrl: "url",
    deliveryUrl: "deliveryUrl",
    questioningId: "id1",
  },
  {
    sourceId: "EEC",
    surveyUnitIdentificationCode: "SIREN 2",
    surveyUnitIdentificationName: "Panzani",
    partitioningLabel: "Questionnaire 2",
    questioningStatus: "NOT_RECEIVED",
    questioningAccessUrl: "url",
    deliveryUrl: "deliveryUrl",
    questioningId: "id2",
  },
  {
    sourceId: "AUTO",
    surveyUnitIdentificationCode: "SIREN 3",
    surveyUnitIdentificationName: "Peugeot",
    partitioningLabel: "Questionnaire 4",
    questioningStatus: "OPEN",
    questioningAccessUrl: "https://www.example.com",
    questioningId: "id4",
  },
  {
    sourceId: "EEC",
    surveyUnitIdentificationCode: "SIREN 2",
    surveyUnitIdentificationName: "Panzani",
    partitioningLabel: "Questionnaire 3",
    questioningStatus: "INCOMING",
    questioningAccessUrl: "url",
    questioningId: "id3",
  },
  {
    sourceId: "EEC",
    surveyUnitIdentificationCode: "SIREN 6",
    surveyUnitIdentificationName: "Barrila",
    partitioningLabel: "Questionnaire 4",
    questioningStatus: "INCOMING",
    questioningAccessUrl: "url",
    questioningId: "id5",
  },
];

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

  const hasSingleSurveyUnit = data.every(
    (current: any) => current.surveyUnitIdentificationCode === data[0].surveyUnitIdentificationCode,
  );

  const questioningsSectionTitle = hasSingleSurveyUnit
    ? `${surveyData.title} (${data[0].surveyUnitIdentificationCode})`
    : surveyData.title;

  const questionings = [...data].sort((a, b) => {
    if (statusOrder[a.questioningStatus] !== statusOrder[b.questioningStatus]) {
      return statusOrder[a.questioningStatus] - statusOrder[b.questioningStatus];
    }
    if (a.surveyUnitIdentificationCode !== b.surveyUnitIdentificationCode) {
      return a.surveyUnitIdentificationCode.localeCompare(b.surveyUnitIdentificationCode);
    }
    return a.partitioningLabel.localeCompare(b.partitioningLabel);
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
          <div className={fr.cx("fr-container")} id="cards">
            <h3>{`${t("respond to survey")} ${questioningsSectionTitle}`}</h3>
            {questionings.map(questioning => (
              <QuestioningCard
                questioning={questioning}
                key={`${questioning.surveyUnitIdentificationCode}-${questioning.partitioningLabel}`}
                hasSingleSurveyUnit={hasSingleSurveyUnit}
              />
            ))}
          </div>
        </DSFRHide>
      </div>
      {surveyData.isSurveyOnline && <Chatbot />}
    </div>
  );
}
