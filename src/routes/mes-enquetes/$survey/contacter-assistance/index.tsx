import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";
import { OfflineSupport } from "components/surveyHomepage/OfflineSupport";

export const Route = createFileRoute("/mes-enquetes/$survey/contacter-assistance/")({
  component: SupportIndex,
});

function SupportIndex() {
  const { survey } = Route.useParams();

  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-6", "fr-pr-md-4w")}>
      <OfflineSupport surveyId={survey} />
    </section>
  );
}
