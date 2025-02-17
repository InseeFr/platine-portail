import { createFileRoute } from "@tanstack/react-router";
import { TechnicalError } from "components/errorPages/TechnicalError";

export const Route = createFileRoute("/mes-enquetes/$survey/contacter-assistance/erreur")({
  component: ErrorPage,
});

function ErrorPage() {
  const { survey } = Route.useParams();

  return <TechnicalError surveyId={survey} />;
}
