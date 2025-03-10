import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { Markdown } from "components/Markdown";
import { DSFRCol } from "components/commons/DSFRCol";
import { useTranslation } from "i18n";

export const Route = createFileRoute("/mes-enquetes/$survey/cadre-juridique")({
  component: LegalFrameworkIndex,
});

function LegalFrameworkIndex() {
  const { surveyData } = useLoaderData({ from: "/mes-enquetes/$survey" });
  const { t } = useTranslation("SurveyHomepage");

  const legalFrameworkData = surveyData.content["donnees-personnelles"].cartouche;

  return (
    <DSFRCol col="12" colMd="8" className="fr-pl-md-3w">
      <h3>{t("legal framework")}</h3>
      <Markdown content={legalFrameworkData} />
    </DSFRCol>
  );
}
