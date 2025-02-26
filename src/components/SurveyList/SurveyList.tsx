import { useTranslation } from "i18n";
import { fr } from "@codegouvfr/react-dsfr";
import { Card } from "@codegouvfr/react-dsfr/Card";
import type { SurveyData } from "types/ContentSurvey";
import { BannerImage } from "components/commons/BannerImage";
import { H2TitleWithText } from "components/commons/TitleWithText/H2TitleWithText";
import { DSFRGrid } from "components/commons/DSFRGrid";
import { SearchPictogram } from "assets/Pictograms/Search";
import { DSFRHide } from "components/commons/DSFRHide";

export const SurveysList = ({ surveys }: { surveys: SurveyData[] }) => {
  const { t } = useTranslation("SurveyHomepage");

  return (
    <div>
      <div className="fr-container--fluid">
        <BannerImage />
      </div>
      <div className={fr.cx("fr-container", "fr-py-3w")}>
        <DSFRGrid center middle gutters>
          <DSFRHide hidden unhidden unhiddenScreenSize="lg">
            <div className={fr.cx("fr-col-2")}>
              <SearchPictogram />
            </div>
          </DSFRHide>
          <div className={fr.cx("fr-col-md-12", "fr-col-md-10", "fr-col-lg-10")}>
            <H2TitleWithText title={t("title")} text={t("about surveys")} />
          </div>
        </DSFRGrid>
        <DSFRGrid gutters>
          {surveys.map(survey => (
            <div className={fr.cx("fr-col-lg-3", "fr-col-md-6", "fr-col-sm-12")}>
              <Card
                endDetail={t("questionnaire count done")}
                enlargeLink
                linkProps={{
                  to: "/mes-enquetes/$survey/introduction",
                  params: {
                    survey: survey.id,
                  },
                  id: "content",
                }}
                size="medium"
                title={survey.title}
                titleAs="h3"
              />
            </div>
          ))}
        </DSFRGrid>
      </div>
    </div>
  );
};
