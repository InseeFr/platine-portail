import { declareComponentKeys, useTranslation } from "i18n";
import { BannerImage } from "../commons/BannerImage";
import { H2TitleWithText } from "../commons/TitleWithText/H2TitleWithText";
import { fr } from "@codegouvfr/react-dsfr";
import Button from "@codegouvfr/react-dsfr/Button";
import { ActivityCard } from "./ActivityCard";
import { PadlockPictogramNoBackground } from "assets/Pictograms/Padlock";
import { DSFRGrid } from "components/commons/DSFRGrid";
import { CommunityPictogramNoBackground } from "assets/Pictograms/Community";
import { DataVidualizationPictogram } from "assets/Pictograms/DataVisualization";
import { DocumentPictogram } from "assets/Pictograms/Document";
import { MailSendPictogram } from "assets/Pictograms/MailSend";
import { DSFRHide } from "components/commons/DSFRHide";

export const HomePage = () => {
  const { t } = useTranslation("HomePage");
  const sectionClasses = ["fr-container", "fr-py-3w", "fr-px-10v"] as const;

  return (
    <>
      <BannerImage />
      <div className={fr.cx(sectionClasses)}>
        <h1>{t("portal title")}</h1>
        <p>{t("portal description")}</p>
      </div>
      <div style={{ background: fr.colors.options.blueFrance._975_75.default }}>
        <div className={fr.cx(sectionClasses, "fr-p-16v")}>
          <DSFRGrid gutters center middle>
            <div className={fr.cx("fr-col-sm-12", "fr-mr-10v", "fr-col-lg-8")}>
              <H2TitleWithText
                title={t("authentication title")}
                text={t("authentication description")}
              />
              <Button
                linkProps={{
                  to: "/mes-enquetes",
                }}
              >
                {t("authentication button")}
              </Button>
            </div>
            <DSFRHide hidden unhidden unhiddenScreenSize="lg">
              <MailSendPictogram />
            </DSFRHide>
          </DSFRGrid>
        </div>
      </div>
      <div className={fr.cx(sectionClasses)}>
        <H2TitleWithText title={t("activities title")} text={t("activities description")} />
        <DSFRGrid gutters center>
          {[
            {
              title: t("activities collect"),
              image: <DocumentPictogram />,
              description: t("learn more"),
              link: "#",
            },
            {
              title: t("activities analyze"),
              image: <DataVidualizationPictogram />,
              description: t("learn more"),
              link: "#",
            },
            {
              title: t("activities diffuse"),
              image: <CommunityPictogramNoBackground />,
              description: t("learn more"),
              link: "#",
            },
          ].map(props => (
            <div className={fr.cx("fr-col-md-4", "fr-col-12")}>
              <ActivityCard {...props} />
            </div>
          ))}
        </DSFRGrid>
      </div>
      <hr
        className={fr.cx("fr-my-2w")}
        style={{ borderBottomColor: fr.colors.options.grey._0_1000.default }}
      />
      <div className={fr.cx(sectionClasses)}>
        <DSFRGrid gutters>
          <div className={fr.cx("fr-col-lg-9", "fr-col-sm-12")}>
            <H2TitleWithText
              title={t("confidentiality title")}
              text={t("confidentiality description")}
            />
            <a
              href="https://www.insee.fr/fr/information/4174982#:~:text=L'Insee%20applique%20ainsi%20des,directe%20ni%20indirecte%2C%20des%20r%C3%A9pondants."
              target="_blank"
              className={fr.cx("fr-link")}
            >
              {t("learn more")}
            </a>
          </div>
          <DSFRHide hidden unhidden unhiddenScreenSize="lg">
            <div className={fr.cx("fr-ml-10v")}>
              <PadlockPictogramNoBackground />
            </div>
          </DSFRHide>
        </DSFRGrid>
      </div>
    </>
  );
};

const { i18n } = declareComponentKeys<
  | "portal title"
  | "portal description"
  | "authentication title"
  | "authentication description"
  | "authentication button"
  | "activities title"
  | "activities description"
  | "activities collect"
  | "activities analyze"
  | "activities diffuse"
  | "confidentiality title"
  | "confidentiality description"
  | "learn more"
  | "page title"
>()("HomePage");

export type I18n = typeof i18n;
