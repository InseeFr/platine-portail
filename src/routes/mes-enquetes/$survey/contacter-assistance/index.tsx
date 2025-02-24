import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";
import { OfflineSupport } from "components/surveyHomepage/OfflineSupport";

export const Route = createFileRoute("/mes-enquetes/$survey/contacter-assistance/")({
  component: SupportIndex,
});

function SupportIndex() {
  const { survey } = Route.useParams();

  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-8", "fr-pl-md-3w")}>
      <OfflineSupport surveyId={survey} />
    </section>
  );
}
