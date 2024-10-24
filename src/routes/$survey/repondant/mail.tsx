import { createFileRoute } from "@tanstack/react-router";
import { EmailForm } from "components/EmailForm";
import { protectedLoader } from "hooks/useAuth";
import { useTranslation } from "i18n/i18n";
import { Helmet } from "react-helmet-async";

export const Route = createFileRoute("/$survey/repondant/mail")({
  component: MailPage,
  beforeLoad: protectedLoader,
});

function MailPage() {
  const { survey } = Route.useParams();
  const { t: headerTranslation } = useTranslation("Header");
  const { t } = useTranslation("EmailForm");

  return (
    <div>
      <Helmet>
        <title>{`${t("pageTitle")} - ${headerTranslation("service tagline")}`}</title>
      </Helmet>
      <EmailForm surveyId={survey} />
    </div>
  );
}
