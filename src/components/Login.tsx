import { useFetchQueryPortail } from "hooks/useFetchQuery";
import { ContentSurvey } from "types/ContentSurvey";
import { Navigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Loading } from "./surveyHomepage/Loading";

export const Login = ({ surveyData }: { surveyData: ContentSurvey }) => {
  const { data: questioningUrlData, isLoading } = useFetchQueryPortail("/questionnaires-url");

  useEffect(() => {
    if (questioningUrlData && questioningUrlData[0].url && surveyData.verifmail === false) {
      window.location.href = questioningUrlData[0].url;
    }
  }, [questioningUrlData, surveyData]);

  if (isLoading) {
    return <Loading />;
  }

  if (surveyData.verifmail || surveyData.verifmail === undefined) {
    return <Navigate to={"/$survey/repondant/mail"} params={{ survey: surveyData.id }} />;
  }

  return <Loading />;
};
