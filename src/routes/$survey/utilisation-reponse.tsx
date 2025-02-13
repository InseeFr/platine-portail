import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { Markdown } from "components/Markdown";
import { useTranslation } from "i18n";

export const Route = createFileRoute("/$survey/utilisation-reponse")({
  component: AnswersUtilizationIndex,
});

function AnswersUtilizationIndex() {
  const { surveyData } = useLoaderData({ from: "/$survey" });

  const { t } = useTranslation("SurveyHomepage");

  const responses = surveyData.content["a-quoi-servent-vos-reponses"];

  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-6", "fr-pr-md-4w")}>
      <h3>{t("what are your answers for?")}</h3>
      <Markdown content={responses.body} />
    </section>
  );
}
