import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";
import { Markdown } from "components/Markdown";
import { useTranslation } from "i18n";
import content from "resources/content.json";

export const Route = createFileRoute("/$survey/resultats")({
  component: Results,
});

function Results() {
  const { survey } = Route.useParams();
  const { t } = useTranslation("SurveyHomepage");

  const results = content.specifique.find(s => s.id === survey)?.content.resultats;

  if (!results) {
    return <></>;
  }

  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-6", "fr-pr-md-4w")}>
      <h3>{t("some results")}</h3>
      <h4>{results.title}</h4>
      {results["picture-url"] && (
        <img src={`/${results["picture-url"]}`} alt={results.legende} width={"100%"} />
      )}
      <Markdown className="fr-text--sm" content={results.legende} />
    </section>
  );
}
