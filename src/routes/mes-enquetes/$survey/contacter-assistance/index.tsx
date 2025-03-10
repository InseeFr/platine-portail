import { createFileRoute } from "@tanstack/react-router";
import { DSFRCol } from "components/commons/DSFRCol";
import { OfflineSupport } from "components/surveyHomepage/OfflineSupport";

export const Route = createFileRoute("/mes-enquetes/$survey/contacter-assistance/")({
  component: SupportIndex,
});

function SupportIndex() {
  const { survey } = Route.useParams();

  return (
    <DSFRCol col="12" colMd="8" className="fr-pl-md-3w">
      <OfflineSupport surveyId={survey} />
    </DSFRCol>
  );
}
