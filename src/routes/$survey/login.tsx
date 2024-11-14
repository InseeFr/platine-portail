import { createFileRoute } from "@tanstack/react-router";
import { Login } from "components/Login";
import { Loading } from "components/surveyHomepage/Loading";
import { protectedLoader } from "hooks/useAuth";
import content from "resources/content.json";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "i18n/i18n";

export const Route = createFileRoute("/$survey/login")({
  component: LoginPage,
  beforeLoad: async ({ params }) => {
    const titleShort = content.specifique.find(survey => survey.id === params.survey)?.titleShort;
    await protectedLoader(titleShort);
  },
});

function LoginPage() {
  const { t: headerTranslation } = useTranslation("Header");
  const { t: errorPagesTranslation } = useTranslation("ErrorPages");

  const { survey } = Route.useParams();
  const surveyData = content.specifique.find(s => s.id === survey);

  if (!surveyData) {
    return <Loading />;
  }

  return (
    <div>
      <Helmet>
        <title>{`${errorPagesTranslation("connexion")} - ${headerTranslation("service tagline")}`}</title>
      </Helmet>
      <Login surveyData={surveyData} />
    </div>
  );
}
