import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute, useSearch } from "@tanstack/react-router";
import { OfflineSupport } from "components/surveyHomepage/OfflineSupport";

export type SupportSearch = {
  "mot-de-passe-oublie"?: boolean;
};

export const Route = createFileRoute("/$survey/contacter-assistance/")({
  validateSearch: (search: Record<string, unknown>): SupportSearch => {
    return {
      "mot-de-passe-oublie": (search["mot-de-passe-oublie"] as boolean) || undefined,
    };
  },
  component: SupportIndex,
});

function SupportIndex() {
  const search = useSearch({ from: "/$survey/contacter-assistance/" });
  const { survey } = Route.useParams();

  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-6", "fr-pr-md-4w")}>
      <OfflineSupport surveyId={survey} searchParams={search} />
    </section>
  );
}
