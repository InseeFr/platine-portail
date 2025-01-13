import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { Login } from "components/Login";
import { protectedLoader } from "hooks/useAuth";
import content from "resources/content.json";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "i18n/i18n";

export const Route = createFileRoute("/$survey/login")({
  component: LoginPage,
  beforeLoad: ({ params }) => {
    const titleShort = content.specifique.find(survey => survey.id === params.survey)?.titleShort;
    const theme = document.querySelector("html")?.getAttribute("data-fr-scheme") ?? "system";
    protectedLoader(theme, titleShort);
  },
});

function LoginPage() {
  const { t: headerTranslation } = useTranslation("Header");
  const { t: errorPagesTranslation } = useTranslation("ErrorPages");
  const { surveyData } = useLoaderData({ from: "/$survey" });

  return (
    <div>
      <Helmet>
        <title>{`${errorPagesTranslation("connexion")} - ${headerTranslation("service tagline")}`}</title>
      </Helmet>
      <Login surveyData={surveyData} />
    </div>
  );
}
