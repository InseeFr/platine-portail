import { fr } from "@codegouvfr/react-dsfr";
import { Navigate, createFileRoute, useSearch } from "@tanstack/react-router";
import { AuthenticatedSupport } from "components/surveyHomepage/AuthenticatedSupport";
import { useTranslation } from "i18n";

type SupportSearch = {
  questioningId?: string;
};

export const Route = createFileRoute("/$survey/contacter-assistance/auth")({
  validateSearch: (search: Record<string, unknown>): SupportSearch => {
    return {
      questioningId: (search.questioningId as string) || undefined,
    };
  },
  component: SupportPage,
});

function SupportPage() {
  const { t } = useTranslation("Support");
  const search = useSearch({ from: "/$survey/contacter-assistance/auth" });
  const { survey } = Route.useParams();

  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-6", "fr-pr-md-4w")}>
      <h3>{t("contact support")}</h3>
      {search.questioningId ? (
        <AuthenticatedSupport surveyId={survey} questioningId={search.questioningId} />
      ) : (
        <Navigate to={"/$survey/contacter-assistance"} params={{ survey: survey }} />
      )}
    </section>
  );
}
