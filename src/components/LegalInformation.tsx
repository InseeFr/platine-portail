import { declareComponentKeys } from "i18nifty/declareComponentKeys";
import { useTranslation } from "i18n";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { TitleWithText } from "./commons/TitleWithText";

export function LegalInformation() {
  const { t } = useTranslation("LegalInformation");

  return (
    <section id="content" className="fr-container">
      <Breadcrumb
        currentPageLabel={t("pageTitle")}
        className="fr-mb-1w"
        homeLinkProps={{
          to: "/",
        }}
        segments={[]}
      />
      <h2>{t("pageTitle")}</h2>
      <TitleWithText title={t("servicePresentationTitle")} text={t("servicePresentationText")} />
      <TitleWithText title={t("legalFrameworkTitle")} text={t("legalFrameworkText")} />
      <TitleWithText title={t("cookiesTitle")} text={t("cookiesText")} />
      <TitleWithText title={t("copyrightTitle")} text={t("copyrightText")} />

      <div className="fr-pb-3w">
        <h3 className="fr-mb-2w">{t("publisherInformationTitle")}</h3>
        <p className="fr-mb-1w">{t("address")}</p>
        <p className="fr-mb-1w">{t("streetInformation")}</p>
        <p className="fr-mb-1w">{t("cityInformation")}</p>
        <p className="fr-mb-1w">{`${t("phone")} 01 87 69 50 00`}</p>
      </div>
    </section>
  );
}

const { i18n } = declareComponentKeys<
  | "pageTitle"
  | "servicePresentationTitle"
  | "servicePresentationText"
  | "legalFrameworkTitle"
  | "legalFrameworkText"
  | "cookiesTitle"
  | "cookiesText"
  | "copyrightTitle"
  | "copyrightText"
  | "publisherInformationTitle"
  | "address"
  | "streetInformation"
  | "cityInformation"
  | "phone"
>()("LegalInformation");

export type I18n = typeof i18n;
