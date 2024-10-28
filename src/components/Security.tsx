import { declareComponentKeys } from "i18nifty/declareComponentKeys";
import { useTranslation } from "i18n";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";

export function Security() {
  const { t } = useTranslation("Security");

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
    </section>
  );
}

const { i18n } = declareComponentKeys<
  | "pageTitle"
  | {
      K: "securityText";
      P: {};
      R: JSX.Element;
    }
>()("Security");

export type I18n = typeof i18n;
