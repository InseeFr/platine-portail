import { declareComponentKeys } from "i18nifty/declareComponentKeys";
import { useTranslation } from "i18n";
import { FooterPageLayout } from "./commons/FooterPageLayout";

export function Security() {
  const { t } = useTranslation("Security");

  return (
    <FooterPageLayout t={t}>
      <p>{t("securityText", {})}</p>
    </FooterPageLayout>
  );
}

const { i18n } = declareComponentKeys<
  | "pageTitle"
  | {
      K: "securityText";
      P: Record<string, never>;
      R: JSX.Element;
    }
>()("Security");

export type I18n = typeof i18n;
