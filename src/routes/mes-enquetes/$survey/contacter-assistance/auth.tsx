import { Navigate, createFileRoute, useSearch } from "@tanstack/react-router";
import { DSFRCol } from "components/commons/DSFRCol";
import { AuthenticatedSupport } from "components/surveyHomepage/AuthenticatedSupport";
import { enforceLogin } from "oidc";
import { z } from "zod";

export const Route = createFileRoute("/mes-enquetes/$survey/contacter-assistance/auth")({
  validateSearch: z.object({
    questioningId: z.number().optional(),
  }),
  component: SupportPage,
  beforeLoad: ({ params, context }) => {
    const titleShort = context.getTitleShort({ surveyId: params.survey });
    enforceLogin({ titleShort });
  },
});

function SupportPage() {
  const search = useSearch({ from: "/mes-enquetes/$survey/contacter-assistance/auth" });
  const { survey } = Route.useParams();

  if (!search.questioningId) {
    return <Navigate to={"/mes-enquetes/$survey/contacter-assistance"} params={{ survey }} />;
  }

  return (
    <DSFRCol col="12" colMd="8" className="fr-pl-md-3w">
      <AuthenticatedSupport surveyId={survey} questioningId={search.questioningId.toString()} />
    </DSFRCol>
  );
}
