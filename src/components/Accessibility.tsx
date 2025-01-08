import { declareComponentKeys, useTranslation } from "i18n";
import { TitleWithText } from "./commons/TitleWithText";
import { FooterPageLayout } from "./commons/FooterPageLayout";

export const Accessibility = () => {
  const { t } = useTranslation("Accessibility");

  return (
    <FooterPageLayout t={t}>
      <p>{t("accessibilityText")}</p>
      <p>{t("accessibilityPlan", {})}</p>
      <p>{t("accessibilityStatementLink", {})}</p>

      <TitleWithText title={t("complianceStatusTitle")} text={t("complianceStatusText")} />
      <TitleWithText title={t("testResultsTitle")} text={t("testResultsText")} />
      <TitleWithText title={t("nonAccessibleContentTitle")} text={t("nonAccessibleContentText")} />
      <TitleWithText title={t("exemptionsTitle")} text={t("exemptionsText")} />
      <TitleWithText title={t("nonApplicableContentTitle")} text={t("nonApplicableContentText")} />
      <TitleWithText title={t("statementEstablishmentTitle")} text={t("statementEstablishmentText")} />

      <h3 className="fr-mb-2w">{t("technologiesUsedTitle")}</h3>
      <div className="fr-col fr-mb-2w">
        <ul>
          <li>{t("technology1")}</li>
          <li>{t("technology2")}</li>
          <li>{t("technology3")}</li>
          <li>{t("technology4")}</li>
        </ul>
      </div>

      <TitleWithText title={t("testEnvironmentTitle")} text={t("testEnvironmentText")} />
      <TitleWithText
        title={t("accessibilityEvaluationToolsTitle")}
        text={t("accessibilityEvaluationToolsText")}
      />
      <TitleWithText title={t("verifiedPagesTitle")} text={t("verifiedPagesText")} />
      <TitleWithText title={t("feedbackAndContactTitle")} text={t("feedbackAndContactText")} />
      <TitleWithText title={t("appealOptionsTitle")} text={t("appealOptionsText")} />
      <div className="fr-col fr-mb-2w">
        <ul>
          <li>{t("appealOptionsStep1")}</li>
          <li>{t("appealOptionsStep2")}</li>
          <li>{t("appealOptionsStep3")}</li>
          <li>{t("appealOptionsStep4")}</li>
        </ul>
      </div>
    </FooterPageLayout>
  );
};

const { i18n } = declareComponentKeys<
  | "pageTitle"
  | "accessibilityText"
  | {
      K: "accessibilityPlan";
      P: Record<string, never>;
      R: JSX.Element;
    }
  | {
      K: "accessibilityStatementLink";
      P: Record<string, never>;
      R: JSX.Element;
    }
  | "complianceStatusTitle"
  | "complianceStatusText"
  | "testResultsTitle"
  | "testResultsText"
  | "nonAccessibleContentTitle"
  | "nonAccessibleContentText"
  | "exemptionsTitle"
  | "exemptionsText"
  | "nonApplicableContentTitle"
  | "nonApplicableContentText"
  | "statementEstablishmentTitle"
  | "statementEstablishmentText"
  | "technologiesUsedTitle"
  | "technology1"
  | "technology2"
  | "technology3"
  | "technology4"
  | "testEnvironmentTitle"
  | "testEnvironmentText"
  | "accessibilityEvaluationToolsTitle"
  | "accessibilityEvaluationToolsText"
  | "verifiedPagesTitle"
  | "verifiedPagesText"
  | "feedbackAndContactTitle"
  | "feedbackAndContactText"
  | "appealOptionsTitle"
  | "appealOptionsText"
  | "appealOptionsStep1"
  | "appealOptionsStep2"
  | "appealOptionsStep3"
  | "appealOptionsStep4"
>()("Accessibility");

export type I18n = typeof i18n;
