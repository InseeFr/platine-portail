import { declareComponentKeys, useTranslation } from "i18n";
import Banner from "../../assets/banner.svg";
import { SideMenu, type SideMenuProps } from "@codegouvfr/react-dsfr/SideMenu";
import { Outlet, useRouter } from "@tanstack/react-router";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import type { SurveyData } from "types/ContentSurvey";
import { Tag } from "@codegouvfr/react-dsfr/Tag";
import { fr } from "@codegouvfr/react-dsfr";
import { DSFRHide } from "components/commons/DSFRHide";
import { DSFRContainer } from "components/commons/DSFRContainer";

type Props = {
  survey: SurveyData;
};

export const SurveyHomepage = ({ survey }: Props) => {
  const { t } = useTranslation("SurveyHomepage");

  return (
    <>
      <DSFRContainer className="fr-mt-3w">
        <Breadcrumb
          currentPageLabel={survey.titleShort}
          homeLinkProps={{
            to: "/",
          }}
          className={fr.cx("fr-mb-1w")}
          segments={[]}
        />
        <h2 className={fr.cx("fr-mb-2w")}>{survey.title}</h2>
        <a
          className={fr.cx("fr-link")}
          title={`${t("survey link")} - ${t("open new window")}`}
          href={survey.content["enquete-en-detail"]["menu-link"]}
          target="_blank"
        >
          {t("survey link")}
        </a>

        <DSFRHide unhidden unhiddenScreenSize="md" hidden>
          <div className={fr.cx("fr-grid-row", "fr-grid-row--center", "fr-mt-3w", "fr-mb-2w")}>
            <Tag
              className={fr.cx("fr-mr-3v")}
              linkProps={{
                href: "#content",
              }}
            >
              {t("information link")}
            </Tag>
            <Tag
              linkProps={{
                href: "#table",
              }}
            >
              {t("respond to survey")}
            </Tag>
          </div>
          <img src={Banner} alt="" role="presentation" width={"100%"} />
        </DSFRHide>
      </DSFRContainer>
      <DSFRHide hiddenScreenSize="md" hidden>
        <div className={fr.cx("fr-grid-row", "fr-grid-row--center", "fr-mt-3w", "fr-mb-2w")}>
          <Tag
            linkProps={{
              href: "#cards",
            }}
          >
            {t("respond to survey")}
          </Tag>
        </div>
        <DSFRContainer fluid>
          <img src={Banner} alt="" role="presentation" style={{ width: "100vw" }} />
        </DSFRContainer>
      </DSFRHide>
      <DSFRHide hiddenScreenSize="md" hidden>
        <SideMenuCustom
          surveyId={survey.id}
          isSurveyOnline={survey.isSurveyOnline}
          className={fr.cx("fr-mt-3w", "fr-mx-2w")}
          labelId="mobileSideMenu"
        />
      </DSFRHide>
      <DSFRContainer>
        <div
          id="content"
          className={fr.cx("fr-grid-row", "fr-col-offset-md-1", "fr-py-md-7w", "fr-py-2w")}
        >
          <SideMenuCustom
            surveyId={survey.id}
            isSurveyOnline={survey.isSurveyOnline}
            className={fr.cx("fr-hidden", "fr-unhidden-md", "fr-col-md-3", "fr-pr-1v")}
            labelId="desktopSideMenu"
          />
          <Outlet />
        </div>
      </DSFRContainer>
    </>
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
  const router = useRouter();
  const currentPath = router.history.location.pathname;

  const sideMenuItems: SideMenuProps.Item[] = [
    {
      linkProps: {
        to: "/mes-enquetes/$survey/introduction",
        params: { survey: surveyId },
      },
      isActive: currentPath.includes("/introduction"),
      text: t("survey introduction"),
    },
    {
      linkProps: {
        to: "/mes-enquetes/$survey/cadre-juridique",
        params: {
          survey: surveyId,
        },
      },
      isActive: currentPath.includes("/cadre-juridique"),
      text: t("legal framework"),
    },
    {
      linkProps: {
        to: "/mes-enquetes/$survey/utilisation-reponse",
        params: {
          survey: surveyId,
        },
      },
      isActive: currentPath.includes("/utilisation-reponse"),
      text: t("what are your answers for?"),
    },
    {
      linkProps: {
        to: "/mes-enquetes/$survey/documents",
        params: {
          survey: surveyId,
        },
      },
      isActive: currentPath.includes("/documents"),
      text: t("documents to the surveyed"),
    },
    {
      linkProps: {
        to: "/mes-enquetes/$survey/resultats",
        params: {
          survey: surveyId,
        },
      },
      isActive: currentPath.includes("/resultats"),
      text: t("some results"),
    },
    {
      linkProps: {
        to: "/mes-enquetes/$survey/faq",
        params: {
          survey: surveyId,
        },
      },
      isActive: currentPath.includes("/faq"),
      text: supportTranslation("FAQ"),
    },
  ];

  const sideMenuItemsWithoutScroll = sideMenuItems.map(item => {
    return { ...item, linkProps: { ...item.linkProps, resetScroll: false } };
  });

  return (
    <>
      <label className={fr.cx("fr-sr-only")} id={`${labelId}-title`}>
        {t("side menu title")}
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
                    to: "/mes-enquetes/$survey/contacter-assistance",
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

const { i18n } = declareComponentKeys<
  | "survey introduction"
  | "survey link"
  | "open new window"
  | "homepage"
  | "side menu title"
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
  | "about surveys"
  | "questionnaire count done"
  | "questionnaire count doing"
  | "information link"
  | "for"
>()("SurveyHomepage");

export type I18n = typeof i18n;
