import { useFetchQueryPortail } from "hooks/useFetchQuery";
import { ContentSurvey } from "types/ContentSurvey";
import { Navigate } from "@tanstack/react-router";
import { Loading } from "./surveyHomepage/Loading";
import { TechnicalError } from "./errorPages/TechnicalError";
import { Ineligible, Unauthorized } from "./errorPages/ErrorPages";

export const Login = ({ surveyData }: { surveyData: ContentSurvey }) => {
  const { data: questioningUrlData, isLoading, error } = useFetchQueryPortail("/questionnaires-url");

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    if (error.status === 401 || error.status === 403 || error.status === 404) {
      return <Unauthorized surveyId={surveyData.id} />;
    } else {
      return <TechnicalError surveyId={surveyData.id} />;
    }
  }

  if (!questioningUrlData || questioningUrlData.length === 0 || !questioningUrlData[0].url) {
    return <Ineligible surveyId={surveyData.id} />;
  }

  if (surveyData.verifmail || surveyData.verifmail === undefined) {
    return <Navigate to={"/$survey/repondant/mail"} params={{ survey: surveyData.id }} />;
  }

  if (surveyData.verifmail === false) {
    window.location.href = questioningUrlData[0].url;
  }
};
