import { fr } from "@codegouvfr/react-dsfr";
import { Navigate, createFileRoute, useSearch } from "@tanstack/react-router";
import { AuthenticatedSupport } from "components/surveyHomepage/AuthenticatedSupport";
import { useIsAuthenticated } from "hooks/useAuth";

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
  const search = useSearch({ from: "/$survey/contacter-assistance/auth" });
  const { survey } = Route.useParams();
  const { isAuthenticated } = useIsAuthenticated();

  if (!search.questioningId || !isAuthenticated) {
    return <Navigate to={"/$survey/contacter-assistance"} params={{ survey: survey }} />;
  }

  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-6", "fr-pr-md-4w")}>
      <AuthenticatedSupport surveyId={survey} questioningId={search.questioningId} />
    </section>
  );
}
