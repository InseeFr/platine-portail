import { declareComponentKeys, useTranslation } from "i18n";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";

export const Accessibility = () => {
  const { t } = useTranslation("Accessibility");

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
      <TitleWithText text={t("accessibilityText")} title={""} />
      <div className="fr-col fr-mb-2w">
        <ul>
          <li>{t("multiYearPlan")}</li>
          <li>{t("actionPlans")}</li>
        </ul>
      </div>
      <TitleWithText text={t("accessibilityDocumentsNote")} />
      <TitleWithText text={t("accessibilityStatementLink")} />

      <TitleWithText title={t("complianceStatusTitle")} text={t("complianceStatusText")} />
      <TitleWithText title={t("testResultsTitle")} text={t("testResultsText")} />
      <TitleWithText title={t("nonAccessibleContentTitle")} text={t("nonAccessibleContentText")} />
      <TitleWithText title={t("exemptionsTitle")} text={t("exemptionsText")} />
      <TitleWithText title={t("nonApplicableContentTitle")} text={t("nonApplicableContentText")} />
      <TitleWithText title={t("statementEstablishmentTitle")} text={t("statementEstablishmentText")} />
      <TitleWithText title={t("technologiesUsedTitle")} />
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
    </section>
  );
};

type Props = {
  title?: string;
  text?: string;
};

const TitleWithText = ({ title = "", text = "" }: Props) => {
  return (
    <div aria-label={title}>
      <h3 className="fr-mb-2w">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

const { i18n } = declareComponentKeys<
  | "pageTitle"
  | "accessibilityText"
  | "multiYearPlan"
  | "actionPlans"
  | "accessibilityDocumentsNote"
  | "accessibilityStatementLink"
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
