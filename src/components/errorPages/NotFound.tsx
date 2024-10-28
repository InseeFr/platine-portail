import { fr } from "@codegouvfr/react-dsfr";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { ReactNode } from "@tanstack/react-router";
import { NotFoundIcon } from "assets/NotFound";
import { declareComponentKeys, useTranslation } from "i18n";
import { Helmet } from "react-helmet-async";

export const NotFound = () => {
  const { t } = useTranslation("NotFound");
  const { t: headerTranslation } = useTranslation("Header");

  return (
    <ErrorPageDescription
      titlepage={`${t("title")} - ${headerTranslation("service tagline")}`}
      title={t("title")}
      errorText={t("error")}
      text={t("notFoundText")}
    >
      <p className="fr-text--sm">{t("verifyUrl")}</p>
      <p className="fr-text--sm">{t("goHomeInformation")}</p>
      <Button linkProps={{ to: "/" }}>{t("buttonLabel")}</Button>
    </ErrorPageDescription>
  );
};

type Props = {
  children: ReactNode;
  titlepage: string;
  title: string;
  errorText: string;
  text: string;
};

export const ErrorPageDescription = ({ children, titlepage, title, errorText, text }: Props) => {
  return (
    <>
      <Helmet>
        <title>{titlepage}</title>
      </Helmet>
      <section className="fr-container">
        <div
          className={"fr-grid-row fr-grid-row--center fr-grid-row--middle fr-col-12 fr-px-2w fr-py-6w"}
        >
          <div className={"fr-col-md-6 fr-col-12"}>
            <h1>{title}</h1>
            <p className="fr-text--sm" style={{ color: fr.colors.decisions.text.mention.grey.default }}>
              {errorText}
            </p>
            <p className={"fr-text--lead"}>{text}</p>
            {children}
          </div>
          <div className={"fr-col-3 fr-hidden fr-unhidden-md fr-col-offset-1"}>
            <NotFoundIcon />
          </div>
        </div>
      </section>
    </>
  );
};

const { i18n } = declareComponentKeys<
  "title" | "error" | "notFoundText" | "verifyUrl" | "goHomeInformation" | "buttonLabel"
>()("NotFound");

export type I18n = typeof i18n;
