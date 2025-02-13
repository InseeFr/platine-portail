import { Chatbot } from "components/Chatbot";
import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { ForgotPassword } from "components/forgotPassword/ForgotPassword";
import { useTranslation } from "i18n";
import { Helmet } from "react-helmet-async";

export const Route = createFileRoute("/$survey/assistance")({
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  const { surveyData } = useLoaderData({ from: "/$survey" });

  const { t: headerTranslation } = useTranslation("Header");
  const { t } = useTranslation("ForgotPassword");

  return (
    <div>
      <Helmet>
        <title>{`${t("pageTitleForgotPassword")} - ${headerTranslation("service tagline")}`}</title>
      </Helmet>
      <ForgotPassword surveyId={surveyData.id} titleShort={surveyData.titleShort} />
      <Chatbot />
    </div>
  );
}
