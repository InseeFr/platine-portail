import { Outlet, createFileRoute, notFound, useRouter } from "@tanstack/react-router";
import { SurveyHomepage } from "components/surveyHomepage/SurveyHomepage";
import { useTranslation } from "i18n";
import { Helmet } from "react-helmet-async";
import content from "resources/content.json";
import { getPageTitle } from "functions/getPageTitle";
import { Chatbot } from "components/Chatbot";
import { Loading } from "components/surveyHomepage/Loading";

export const Route = createFileRoute("/$survey")({
  component: Index,
  caseSensitive: false,
  loader: ({ params }) => {
    const surveyData = content.specifique.find(s => s.id.toLowerCase() === params.survey.toLowerCase());
    if (!surveyData) {
      throw notFound();
    }
    return { surveyData, genericData: content.generique };
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
  return (
    <div>
      <Helmet>
        <title>{`${t(sectionTitle)} - ${surveyData.titleShort} - ${headerTranslation("service tagline")}`}</title>
      </Helmet>
      <SurveyHomepage survey={surveyData} />
      {surveyData.isSurveyOnline && <Chatbot />}
    </div>
  );
}
