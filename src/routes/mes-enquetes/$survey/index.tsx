import { Navigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mes-enquetes/$survey/")({
  component: Index,
});

function Index() {
  const { survey } = Route.useParams();
  return <Navigate to={"/mes-enquetes/$survey/introduction"} params={{ survey }} />;
}
