import { createFileRoute } from "@tanstack/react-router";
import { TechnicalError } from "components/errorPages/TechnicalError";

export const Route = createFileRoute("/erreur")({
  component: ErrorPage,
});

function ErrorPage() {
  return <TechnicalError />;
}
