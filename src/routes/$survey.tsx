import { NotFound } from "components/errorPages/NotFound";
import { Outlet, createFileRoute, useRouter } from "@tanstack/react-router";
import { SurveyHomepage } from "components/surveyHomepage/SurveyHomepage";
import { useTranslation } from "i18n";
import { Helmet } from "react-helmet-async";
import content from "resources/content.json";
import { getPageTitle } from "functions/getPageTitle";

export const Route = createFileRoute("/$survey")({
  component: Index,
});

function Index() {
  const { t: headerTranslation } = useTranslation("Header");
  const { t } = useTranslation("SurveyHomepage");
  const { survey } = Route.useParams();
  const surveyData = content.specifique.find(s => s.id === survey);
  const router = useRouter();

  const currentPath = router.history.location.pathname;

  const hasNotSideMenu =
    currentPath.includes("/repondant/mail") ||
    currentPath.includes("/assistance") ||
    currentPath.includes("/login") ||
    currentPath.includes("/erreur");

  if (!surveyData) {
    return <NotFound />;
  }

  if (hasNotSideMenu) {
    return <Outlet />;
  }

  const sectionTitle = getPageTitle(currentPath);
  return (
    <div>
      <Helmet>
        <title>{`${t(sectionTitle)} - ${surveyData?.titleShort} - ${headerTranslation("service tagline")}`}</title>
      </Helmet>
      <SurveyHomepage survey={surveyData} />
    </div>
  );
}
