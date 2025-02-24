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

// TODO: remove when get endpoint
const data = [
  {
    identificationCode: "SIREN 1",
    identificationName: "Barilla",
    questioning: "Questionnaire 1",
    status: "CLOSED",
  },
  {
    identificationCode: "SIREN 2",
    identificationName: "Panzani",
    questioning: "Questionnaire 2",
    status: "OPEN",
  },
  {
    identificationCode: "SIREN 2",
    identificationName: "Panzani",
    questioning: "Questionnaire 3",
    status: "OPEN",
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
    (current: any) => current.identificationCode === data[0].identificationCode,
  );

  const questioningsSectionTitle = hasSingleSurveyUnit
    ? `${surveyData.title} (${data[0].identificationCode})`
    : surveyData.title;

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
            questionings={data}
            hasSingleSurveyUnit={hasSingleSurveyUnit}
          />
        </DSFRHide>
        <DSFRHide hidden hiddenScreenSize="md">
          <div className={fr.cx("fr-container")}>
            <h3>{`${t("respond to survey")} ${questioningsSectionTitle}`}</h3>
            {data.map(questioning => (
              <QuestioningCard
                questioning={questioning}
                key={`${questioning.identificationCode}-${questioning.questioning}`}
              />
            ))}
          </div>
        </DSFRHide>
      </div>
      {surveyData.isSurveyOnline && <Chatbot />}
    </div>
  );
}
