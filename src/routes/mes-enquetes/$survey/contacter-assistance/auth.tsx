import { fr } from "@codegouvfr/react-dsfr";
import { Navigate, createFileRoute, useSearch } from "@tanstack/react-router";
import { AuthenticatedSupport } from "components/surveyHomepage/AuthenticatedSupport";
import { protectedLoader } from "hooks/useAuth";
import { z } from "zod";

export const Route = createFileRoute("/mes-enquetes/$survey/contacter-assistance/auth")({
  validateSearch: z.object({
    questioningId: z.number().optional(),
  }),
  component: SupportPage,
  beforeLoad: ({ params, context }) => {
    const titleShort = context.getTitleShort({ surveyId: params.survey });
    protectedLoader({ titleShort });
  },
});

function SupportPage() {
  const search = useSearch({ from: "/mes-enquetes/$survey/contacter-assistance/auth" });
  const { survey } = Route.useParams();

  if (!search.questioningId) {
    return <Navigate to={"/mes-enquetes/$survey/contacter-assistance"} params={{ survey }} />;
  }

  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-6", "fr-pr-md-4w")}>
      <AuthenticatedSupport surveyId={survey} questioningId={search.questioningId.toString()} />
    </section>
  );
}
