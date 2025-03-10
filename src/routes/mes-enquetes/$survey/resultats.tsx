import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { Markdown } from "components/Markdown";
import { DSFRCol } from "components/commons/DSFRCol";
import { useTranslation } from "i18n";

export const Route = createFileRoute("/mes-enquetes/$survey/resultats")({
  component: Results,
});

function Results() {
  const { t } = useTranslation("SurveyHomepage");
  const { surveyData } = useLoaderData({ from: "/mes-enquetes/$survey" });

  const results = surveyData.content.resultats;

  return (
    <DSFRCol col="12" colMd="8" className="fr-pl-md-3w">
      <h3>{t("some results")}</h3>
      <h4>{results.title}</h4>
      {results["picture-url"] && (
        <img src={`/${results["picture-url"]}`} alt={results.legende} width={"100%"} />
      )}
      <Markdown className="fr-text--sm" content={results.legende} />
    </DSFRCol>
  );
}
