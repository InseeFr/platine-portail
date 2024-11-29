import { useTranslation } from "i18n";
import Banner from "../../assets/banner.svg";
import { fr } from "@codegouvfr/react-dsfr";
import content from "resources/content.json";
import { Card } from "@codegouvfr/react-dsfr/Card";
import { List } from "@mui/material";
import { ContentSurvey } from "types/ContentSurvey";

export const SurveysList = () => {
  const { t } = useTranslation("SurveyHomepage");

  const surveys: ContentSurvey[] = content.specifique.filter(
    survey => survey.disabledOnWelcomePage !== true,
  );

  return (
    <div>
      <div className="fr-container--fluid">
        <img
          src={Banner}
          alt=""
          role="presentation"
          width={"100%"}
          className={"fr-unhidden-md fr-hidden"}
        />
      </div>
      <div className={fr.cx("fr-container", "fr-py-5w")}>
        <h2>{t("title")}</h2>
        <List className="fr-grid-row">
          {surveys.map(survey => (
            <li className="fr-col-md-4 fr-col-12 fr-mb-3w" key={survey.id}>
              <Card
                className="fr-mr-3w"
                background
                border
                enlargeLink
                horizontal
                linkProps={{
                  to: "/$survey/introduction",
                  params: {
                    survey: survey.id,
                  },
                  id: "content",
                }}
                endDetail={`${import.meta.env.VITE_APP_URL}/${survey.id}`}
                title={survey.titleShort}
                titleAs="h5"
              />
            </li>
          ))}
        </List>
      </div>
    </div>
  );
};
