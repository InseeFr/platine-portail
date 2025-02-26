import { declareComponentKeys, useTranslation } from "i18n";
import { H3TitleWithText } from "./commons/TitleWithText/H3TitleWithText";
import { FooterPageLayout } from "./commons/FooterPageLayout";

export const Accessibility = () => {
  const { t } = useTranslation("Accessibility");

  return (
    <FooterPageLayout t={t}>
      <p>{t("accessibilityText")}</p>
      <p>{t("accessibilityPlan", {})}</p>
      <p>{t("accessibilityStatementLink", {})}</p>

      <H3TitleWithText title={t("complianceStatusTitle")} text={t("complianceStatusText")} />
      <H3TitleWithText title={t("testResultsTitle")} text={t("testResultsText")} />
      <H3TitleWithText title={t("nonAccessibleContentTitle")} text={t("nonAccessibleContentText")} />
      <H3TitleWithText title={t("exemptionsTitle")} text={t("exemptionsText")} />
      <H3TitleWithText title={t("nonApplicableContentTitle")} text={t("nonApplicableContentText")} />
      <H3TitleWithText title={t("statementEstablishmentTitle")} text={t("statementEstablishmentText")} />

      <h3 className="fr-mb-2w">{t("technologiesUsedTitle")}</h3>
      <div className="fr-col fr-mb-2w">
        <ul>
          <li>{t("technology1")}</li>
          <li>{t("technology2")}</li>
          <li>{t("technology3")}</li>
          <li>{t("technology4")}</li>
        </ul>
      </div>

      <H3TitleWithText title={t("testEnvironmentTitle")} text={t("testEnvironmentText")} />
      <H3TitleWithText
        title={t("accessibilityEvaluationToolsTitle")}
        text={t("accessibilityEvaluationToolsText")}
      />
      <H3TitleWithText title={t("verifiedPagesTitle")} text={t("verifiedPagesText")} />
      <H3TitleWithText title={t("feedbackAndContactTitle")} text={t("feedbackAndContactText")} />
      <H3TitleWithText title={t("appealOptionsTitle")} text={t("appealOptionsText")} />
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
