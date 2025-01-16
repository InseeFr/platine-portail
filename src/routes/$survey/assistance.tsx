import { createFileRoute } from "@tanstack/react-router";
import { Chatbot } from "components/Chatbot";
import { ForgotPassword } from "components/forgotPassword/ForgotPassword";
import { useTranslation } from "i18n";
import { Helmet } from "react-helmet-async";

export const Route = createFileRoute("/$survey/assistance")({
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  const { survey } = Route.useParams();
  const { t: headerTranslation } = useTranslation("Header");
  const { t } = useTranslation("ForgotPassword");

  return (
    <div>
      <Helmet>
        <title>{`${t("pageTitleForgotPassword")} - ${headerTranslation("service tagline")}`}</title>
      </Helmet>
      <ForgotPassword surveyId={survey} />
      <Chatbot />
    </div>
  );
}
