import { declareComponentKeys, useTranslation } from "i18n";
import Banner from "../../assets/banner.svg";
import { SideMenu, SideMenuProps } from "@codegouvfr/react-dsfr/SideMenu";
import { Outlet } from "@tanstack/react-router";
import { tss } from "tss-react/dsfr";
import Divider from "@mui/material/Divider";
import Button from "@codegouvfr/react-dsfr/Button";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { ContentSurvey } from "types/ContentSurvey";
import { useFetchQueryPortail } from "hooks/useFetchQuery";
import { Loading } from "./Loading";
import { APISchemas } from "types/apiPortail";
import { useOidc } from "hooks/useAuth";

type Props = {
  survey: ContentSurvey;
};

export const SurveyHomepage = ({ survey }: Props) => {
  const { t } = useTranslation("SurveyHomepage");

  const { data, isLoading } = useFetchQueryPortail("/is-survey-online/{id}", {
    urlParams: {
      id: survey.id,
    },
  });

  if (!data || isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="fr-container fr-mt-3w">
        <Breadcrumb
          currentPageLabel={survey?.titleShort}
          homeLinkProps={{
            to: "/",
          }}
          className="fr-mb-1w "
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
        <LoginSection className={"fr-hidden-md fr-my-2w"} data={data} />
      </div>
      <SideMenuCustom
        surveyId={survey.id}
        data={data}
        className={"fr-hidden-md fr-mt-3w fr-mx-2w  fr-col-md-3 "}
      />
      <div className="fr-container">
        <div id="content" className={"fr-grid-row fr-py-md-7w fr-py-2w "}>
          <SideMenuCustom
            surveyId={survey.id}
            data={data}
            className={"fr-hidden fr-unhidden-md  fr-col-12 fr-col-md-3 fr-grid-row"}
          />
          <Outlet />
          <LoginSection data={data} />
        </div>
      </div>
    </>
  );
};

const LoginSection = ({ className, data }: { className?: string; data: APISchemas["SurveyStatus"] }) => {
  const { t } = useTranslation("SurveyHomepage");
  const { t: headerTranslation } = useTranslation("Header");
  const { cx } = useStyles();
  const { login } = useOidc();

  return (
    <div className={cx(className, "fr-col-12", "fr-col-md-3 , fr-grid-row")}>
      <div className="fr-hidden fr-unhidden-md fr-col-md-1">
        <Divider orientation="vertical" />
      </div>
      <div className={"fr-col-md-11 fr-col-12"}>
        <h4>{t("respond to survey")}</h4>
        {!data.opened ? (
          <>
            <p className={"fr-hidden fr-unhidden-md"}>{t("respond to survey detail")}</p>
            <p className={"fr-hidden-md fr-text--sm"}>{t("respond to survey detail")}</p>
            <div className="fr-grid-row ">
              <Button
                onClick={() => login && login({ doesCurrentHrefRequiresAuth: false })}
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
  data,
  surveyId,
}: {
  className?: string;
  data: APISchemas["SurveyStatus"];
  surveyId: string;
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

  return (
    <>
      <label className="fr-sr-only" id={"sideMenu-title"}>
        {t("sideMenuTitle")}
      </label>
      <SideMenu
        className={className}
        align="left"
        id="sideMenu"
        burgerMenuButtonText={t("in this section")}
        items={
          data.opened
            ? [
                ...sideMenuItems,
                {
                  linkProps: {
                    to: "/$survey/contacter-assistance",
                    params: {
                      survey: surveyId,
                    },
                  },
                  text: supportTranslation("contact support"),
                },
              ]
            : sideMenuItems
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
  | "legal framework"
  | "what are your answers for?"
  | "documents to the surveyed"
  | "some results"
  | "respond to survey"
  | "respond to survey detail"
  | "title"
>()("SurveyHomepage");

export type I18n = typeof i18n;
