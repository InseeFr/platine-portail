import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { Login } from "components/Login";
import { protectedLoader } from "hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "i18n/i18n";

export const Route = createFileRoute("/$survey/login")({
  component: LoginPage,
  beforeLoad: ({ params, context }) => {
    const titleShort = context.getTitleShort({ surveyId: params.survey });
    protectedLoader({ titleShort });
  },
});

function LoginPage() {
  const { t: headerTranslation } = useTranslation("Header");
  const { t: errorPagesTranslation } = useTranslation("ErrorPages");
  const { surveyData, genericData } = useLoaderData({ from: "/$survey" });

  return (
    <div>
      <Helmet>
        <title>{`${errorPagesTranslation("connexion")} - ${headerTranslation("service tagline")}`}</title>
      </Helmet>
      <Login surveyData={surveyData} genericData={genericData} />
    </div>
  );
}
