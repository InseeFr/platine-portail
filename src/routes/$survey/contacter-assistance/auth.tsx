import { fr } from "@codegouvfr/react-dsfr";
import { Navigate, createFileRoute, useSearch } from "@tanstack/react-router";
import { AuthenticatedSupport } from "components/surveyHomepage/AuthenticatedSupport";
import { protectedLoader } from "hooks/useAuth";
import { z } from "zod";
import content from "resources/content.json";

export const Route = createFileRoute("/$survey/contacter-assistance/auth")({
  validateSearch: z.object({
    questioningId: z.number().optional(),
  }),
  component: SupportPage,
  beforeLoad: ({ params }) => {
    const titleShort = content.specifique.find(survey => survey.id === params.survey)?.titleShort;
    const theme = document.querySelector("html")?.getAttribute("data-fr-scheme") ?? "system";
    protectedLoader(theme, titleShort);
  },
});

function SupportPage() {
  const search = useSearch({ from: "/$survey/contacter-assistance/auth" });
  const { survey } = Route.useParams();

  if (!search.questioningId) {
    return <Navigate to={"/$survey/contacter-assistance"} params={{ survey }} />;
  }

  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-6", "fr-pr-md-4w")}>
      <AuthenticatedSupport surveyId={survey} questioningId={search.questioningId.toString()} />
    </section>
  );
}
