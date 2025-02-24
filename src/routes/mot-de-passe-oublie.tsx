import { Chatbot } from "components/Chatbot";
import { createFileRoute } from "@tanstack/react-router";
import { ForgotPassword } from "components/forgotPassword/ForgotPassword";
import { useTranslation } from "i18n";
import { Helmet } from "react-helmet-async";

export const Route = createFileRoute("/mot-de-passe-oublie")({
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  const { t: headerTranslation } = useTranslation("Header");
  const { t } = useTranslation("ForgotPassword");

  return (
    <div>
      <Helmet>
        <title>{`${t("pageTitleForgotPassword")} - ${headerTranslation("service tagline")}`}</title>
      </Helmet>
      <ForgotPassword />
      <Chatbot />
    </div>
  );
}
