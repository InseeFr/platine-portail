import { declareComponentKeys, useTranslation } from "i18n";
import Banner from "../../assets/banner.svg";
import { SideMenu, SideMenuProps } from "@codegouvfr/react-dsfr/SideMenu";
import { Outlet } from "@tanstack/react-router";
import { tss } from "tss-react/dsfr";
import Divider from "@mui/material/Divider";
import Button from "@codegouvfr/react-dsfr/Button";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { ContentSurvey } from "types/ContentSurvey";

type Props = {
  survey: ContentSurvey;
};

export const SurveyHomepage = ({ survey }: Props) => {
  const { t } = useTranslation("SurveyHomepage");

  return (
    <>
      <div className="fr-container fr-mt-3w">
        <Breadcrumb
          currentPageLabel={survey?.titleShort}
          homeLinkProps={{
            to: "/",
          }}
          className="fr-mb-1w"
          segments={[]}
        />
        <h2 className="fr-mb-2w">{survey?.title}</h2>
        <a
          className="fr-link"
          title={`${t("surveyLink")} - ${t("openNewWindow")}`}
          href={survey.content["enquete-en-detail"]["menu-link"]}
          target="_blank"
        >
          {t("surveyLink")}
        </a>

        <img
          src={Banner}
          alt=""
          role="presentation"
          width={"100%"}
          className={"fr-unhidden-md fr-hidden"}
        />
      </div>
      <div className="fr-container--fluid">
        <img
          src={Banner}
          alt=""
          role="presentation"
          style={{ width: "100vw" }}
          className={"fr-hidden-md"}
        />
      </div>
      <div className="fr-container">
        <LoginSection className={"fr-hidden-md fr-my-2w"} data={survey} surveyId={survey.id} />
      </div>
      <SideMenuCustom
        surveyId={survey.id}
        isSurveyOnline={survey.isSurveyOnline}
        className={"fr-hidden-md fr-mt-3w fr-mx-2w  fr-col-md-3 "}
        labelId="mobileSideMenu"
      />
      <div className="fr-container">
        <div id="content" className={"fr-grid-row fr-py-md-7w fr-py-2w "}>
          <SideMenuCustom
            surveyId={survey.id}
            isSurveyOnline={survey.isSurveyOnline}
            className={"fr-hidden fr-unhidden-md  fr-col-12 fr-col-md-3 fr-grid-row"}
            labelId="desktopSideMenu"
          />
          <Outlet />
          <LoginSection data={survey} surveyId={survey.id} />
        </div>
      </div>
    </>
  );
};

const LoginSection = ({
  className,
  data,
  surveyId,
}: {
  className?: string;
  data: ContentSurvey;
  surveyId: string;
}) => {
  const { t } = useTranslation("SurveyHomepage");
  const { t: headerTranslation } = useTranslation("Header");
  const { cx } = useStyles();

  return (
    <div className={cx(className, "fr-col-12", "fr-col-md-3 , fr-grid-row")}>
      <div className="fr-hidden fr-unhidden-md fr-col-md-1">
        <Divider orientation="vertical" />
      </div>
      <div className={"fr-col-md-11 fr-col-12"}>
        <h4>{t("respond to survey")}</h4>
        {data.isSurveyOnline ? (
          <>
            <p className={"fr-hidden fr-unhidden-md"}>{t("respond to survey detail")}</p>
            <p className={"fr-hidden-md fr-text--sm"}>{t("respond to survey detail")}</p>
            <div className="fr-grid-row ">
              <Button
                linkProps={{
                  to: "/$survey/login",
                  params: {
                    survey: surveyId,
                  },
                }}
                className={"fr-col-12 fr-grid-row fr-grid-row--center "}
              >
                {headerTranslation("login")}
              </Button>
            </div>
          </>
        ) : (
          <>
            <p className={"fr-hidden fr-unhidden-md"}>
              {data.messageSurveyOffline} <br /> {data.messageInfoSurveyOffline}
            </p>
            <p className={"fr-hidden-md fr-text--sm"}>
              {data.messageSurveyOffline} <br /> {data.messageInfoSurveyOffline}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

const SideMenuCustom = ({
  className,
  isSurveyOnline,
  surveyId,
  labelId,
}: {
  className?: string;
  isSurveyOnline: boolean;
  surveyId: string;
  labelId: string;
}) => {
  const { t } = useTranslation("SurveyHomepage");
  const { t: supportTranslation } = useTranslation("Support");
  const sideMenuItems: SideMenuProps.Item[] = [
    {
      linkProps: {
        to: "/$survey/introduction",
        params: { survey: surveyId },
      },
      text: t("survey introduction"),
    },
    {
      linkProps: {
        to: "/$survey/cadre-juridique",
        params: {
          survey: surveyId,
        },
      },
      text: t("legal framework"),
    },
    {
      linkProps: {
        to: "/$survey/utilisation-reponse",
        params: {
          survey: surveyId,
        },
      },
      text: t("what are your answers for?"),
    },
    {
      linkProps: {
        to: "/$survey/documents",
        params: {
          survey: surveyId,
        },
      },
      text: t("documents to the surveyed"),
    },
    {
      linkProps: {
        to: "/$survey/resultats",
        params: {
          survey: surveyId,
        },
      },
      text: t("some results"),
    },
    {
      linkProps: {
        to: "/$survey/faq",
        params: {
          survey: surveyId,
        },
      },
      text: supportTranslation("FAQ"),
    },
  ];

  const sideMenuItemsWithoutScroll = sideMenuItems.map(item => {
    return { ...item, linkProps: { ...item.linkProps, resetScroll: false } };
  });

  return (
    <>
      <label className="fr-sr-only" id={`${labelId}-title`}>
        {t("sideMenuTitle")}
      </label>
      <SideMenu
        className={className}
        align="left"
        id={labelId}
        burgerMenuButtonText={t("in this section")}
        items={
          isSurveyOnline
            ? [
                ...sideMenuItemsWithoutScroll,
                {
                  linkProps: {
                    to: "/$survey/contacter-assistance",
                    params: {
                      survey: surveyId,
                    },
                    resetScroll: false,
                  },
                  text: supportTranslation("contact support"),
                },
              ]
            : sideMenuItemsWithoutScroll
        }
      />
    </>
  );
};

const useStyles = tss.withName({ SurveyHomepage }).create({});

const { i18n } = declareComponentKeys<
  | "survey introduction"
  | "surveyLink"
  | "openNewWindow"
  | "homepage"
  | "sideMenuTitle"
  | "in this section"
  | "contact support"
  | "FAQ"
  | "legal framework"
  | "what are your answers for?"
  | "documents to the surveyed"
  | "some results"
  | "respond to survey"
  | "respond to survey detail"
  | "title"
>()("SurveyHomepage");

export type I18n = typeof i18n;
