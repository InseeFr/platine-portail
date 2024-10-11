import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";
import { Markdown } from "components/Markdown";
import { Loading } from "components/surveyHomepage/Loading";
import { useTranslation } from "i18n";
import content from "resources/content.json";

export const Route = createFileRoute("/$survey/introduction")({
  component: Index,
});

function Index() {
  const { survey } = Route.useParams();
  const { t } = useTranslation("SurveyHomepage");

  const data = content.specifique.find(s => s.id === survey);

  if (!data) {
    return <Loading />;
  }

  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-6", "fr-pr-md-4w")}>
      <h3>{t("survey introduction")}</h3>
      <Markdown content={data.content.description.body} />
    </section>
  );
}
