import { createFileRoute } from "@tanstack/react-router";
import { SurveysList } from "components/SurveyList/SurveyList";
import { useTranslation } from "i18n";
import { Helmet } from "react-helmet-async";
import content from "resources/content.json";
import { ContentSurvey } from "types/ContentSurvey";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { t } = useTranslation("SurveyHomepage");
  const { t: headerTranslation } = useTranslation("Header");

  const surveys: ContentSurvey[] = content.specifique.filter(
    survey => survey.disabledOnWelcomePage !== true,
  );

  return (
    <div>
      <Helmet>
        <title>{`${t("homepage")} - ${headerTranslation("service tagline")}`}</title>
      </Helmet>
      <SurveysList surveys={surveys} />
    </div>
  );
}
