import { declareComponentKeys } from "i18nifty/declareComponentKeys";
import { useTranslation } from "i18n";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";

export function PersonalData() {
  const { t } = useTranslation("PersonalData");

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
      <p>{t("personalDataText", {})}</p>
    </section>
  );
}

const { i18n } = declareComponentKeys<
  | "pageTitle"
  | {
      K: "personalDataText";
      P: {};
      R: JSX.Element;
    }
>()("PersonalData");

export type I18n = typeof i18n;
