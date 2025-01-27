import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { Markdown } from "components/Markdown";
import { useTranslation } from "i18n";

export const Route = createFileRoute("/$survey/introduction")({
  component: Index,
});

function Index() {
  const { surveyData } = useLoaderData({ from: "/$survey" });
  const { t } = useTranslation("SurveyHomepage");

  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-6", "fr-pr-md-4w")}>
      <h3>{t("survey introduction")}</h3>
      <Markdown content={surveyData.content.description.body} />
    </section>
  );
}
