import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { Markdown } from "components/Markdown";
import { useTranslation } from "i18n";

export const Route = createFileRoute("/mes-enquetes/$survey/cadre-juridique")({
  component: LegalFrameworkIndex,
});

function LegalFrameworkIndex() {
  const { surveyData } = useLoaderData({ from: "/mes-enquetes/$survey" });
  const { t } = useTranslation("SurveyHomepage");

  const legalFrameworkData = surveyData.content["donnees-personnelles"].cartouche;

  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-8", "fr-pl-md-3w")}>
      <h3>{t("legal framework")}</h3>
      <Markdown content={legalFrameworkData} />
    </section>
  );
}
