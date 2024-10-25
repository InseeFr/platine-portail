import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute, useSearch } from "@tanstack/react-router";
import { AuthenticatedSupport } from "components/surveyHomepage/AuthenticatedSupport";
import { OfflineSupport } from "components/surveyHomepage/OfflineSupport";
import { useTranslation } from "i18n";

type SupportSearch = {
  questioningId?: string;
};

export const Route = createFileRoute("/$survey/contacter-assistance")({
  validateSearch: (search: Record<string, unknown>): SupportSearch => {
    return {
      questioningId: (search.questioningId as string) || undefined,
    };
  },
  component: SupportIndex,
});

function SupportIndex() {
  const { t } = useTranslation("Support");
  const search = useSearch({ from: "/$survey/contacter-assistance" });
  const { survey } = Route.useParams();

  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-6", "fr-pr-md-4w")}>
      <h3>{t("contact support")}</h3>
      {search.questioningId ? (
        <AuthenticatedSupport surveyId={survey} questioningId={search.questioningId} />
      ) : (
        <OfflineSupport surveyId={survey} />
      )}
    </section>
  );
}
