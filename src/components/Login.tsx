import { useFetchQueryPortail } from "hooks/useFetchQuery";
import type { GenericData, SurveyData } from "types/ContentSurvey";
import { Navigate } from "@tanstack/react-router";
import { Loading } from "./surveyHomepage/Loading";
import { TechnicalError } from "./errorPages/TechnicalError";
import { ErrorPage } from "./errorPages/ErrorPages";

export const Login = ({
  surveyData,
  genericData,
}: {
  surveyData: SurveyData;
  genericData: GenericData;
}) => {
  const {
    data: questioningUrlData,
    isLoading,
    error,
  } = useFetchQueryPortail("/questionnaires-url", {}, { refetchOnWindowFocus: false });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    if (error.status === 401 || error.status === 403 || error.status === 404) {
      return <ErrorPage data={surveyData} message={genericData.content.unauthorized.body} />;
    } else {
      return <TechnicalError surveyId={surveyData.id} />;
    }
  }

  if (!questioningUrlData || questioningUrlData.length === 0 || !questioningUrlData[0].url) {
    return <ErrorPage data={surveyData} message={genericData.content.ineligible.body} />;
  }

  if (surveyData.verifmail || surveyData.verifmail === undefined) {
    return <Navigate to={"/mes-enquetes/$survey/repondant/mail"} params={{ survey: surveyData.id }} />;
  }

  if (surveyData.verifmail === false) {
    window.location.href = questioningUrlData[0].url;
  }
};
