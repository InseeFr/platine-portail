import { declareComponentKeys } from "i18nifty/declareComponentKeys";
import { useTranslation } from "i18n";
import { FooterPageLayout } from "./commons/FooterPageLayout";

export function PersonalData() {
  const { t } = useTranslation("PersonalData");

  return (
    <FooterPageLayout t={t}>
      <div>{t("personalDataText", {})}</div>
    </FooterPageLayout>
  );
}

const { i18n } = declareComponentKeys<
  | "pageTitle"
  | {
      K: "personalDataText";
      P: Record<string, never>;
      R: JSX.Element;
    }
>()("PersonalData");

export type I18n = typeof i18n;
