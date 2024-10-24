import { createFileRoute } from "@tanstack/react-router";
import { Login } from "components/Login";
import { Loading } from "components/surveyHomepage/Loading";
import { protectedLoader } from "hooks/useAuth";
import content from "resources/content.json";

export const Route = createFileRoute("/$survey/login")({
  component: LoginPage,
  beforeLoad: protectedLoader,
});

function LoginPage() {
  const { survey } = Route.useParams();
  const surveyData = content.specifique.find(s => s.id === survey);

  if (!surveyData) {
    return <Loading />;
  }

  return <Login surveyData={surveyData} />;
}
