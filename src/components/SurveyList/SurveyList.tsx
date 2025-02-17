import { useTranslation } from "i18n";
import Banner from "../../assets/banner.svg";
import { fr } from "@codegouvfr/react-dsfr";
import { Card } from "@codegouvfr/react-dsfr/Card";
import { List } from "@mui/material";
import type { SurveyData } from "types/ContentSurvey";
import { VITE_APP_URL } from "resources/configuration";

export const SurveysList = ({ surveys }: { surveys: SurveyData[] }) => {
  const { t } = useTranslation("SurveyHomepage");

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
                  to: "/mes-enquetes/$survey/introduction",
                  params: {
                    survey: survey.id,
                  },
                  id: "content",
                }}
                endDetail={`${VITE_APP_URL}/mes-enquetes/${survey.id}`}
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
