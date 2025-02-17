import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { EmailForm } from "components/EmailForm";
import { protectedLoader } from "hooks/useAuth";
import { useTranslation } from "i18n/i18n";
import { Helmet } from "react-helmet-async";

export const Route = createFileRoute("/mes-enquetes/$survey/repondant/mail")({
  component: MailPage,
  beforeLoad: ({ params, context }) => {
    const titleShort = context.getTitleShort({ surveyId: params.survey });
    protectedLoader({ titleShort });
  },
});

function MailPage() {
  const { surveyData } = useLoaderData({ from: "/mes-enquetes/$survey" });

  const { t: headerTranslation } = useTranslation("Header");
  const { t } = useTranslation("EmailForm");

  return (
    <div>
      <Helmet>
        <title>{`${t("pageTitle")} - ${headerTranslation("service tagline")}`}</title>
      </Helmet>
      <EmailForm surveyId={surveyData.id} titleShort={surveyData.titleShort} />
    </div>
  );
}
