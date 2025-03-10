import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { Markdown } from "components/Markdown";
import { DSFRCol } from "components/commons/DSFRCol";
import { useTranslation } from "i18n";

export const Route = createFileRoute("/mes-enquetes/$survey/introduction")({
  component: Index,
});

function Index() {
  const { surveyData } = useLoaderData({ from: "/mes-enquetes/$survey" });
  const { t } = useTranslation("SurveyHomepage");

  return (
    <DSFRCol col="12" colMd="8" className="fr-pl-md-3w">
      <h3>{t("survey introduction")}</h3>
      <Markdown content={surveyData.content.description.body} />
    </DSFRCol>
  );
}
