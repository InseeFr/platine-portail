import { Button } from "@codegouvfr/react-dsfr/Button";
import { declareComponentKeys, useTranslation } from "i18n";
import { ErrorPageDescription } from "./NotFound";

export const TechnicalError = ({ surveyId }: { surveyId: string }) => {
  const { t } = useTranslation("TechnicalError");
  const { t: headerTranslation } = useTranslation("Header");

  return (
    <ErrorPageDescription
      titlepage={`${t("title")} - ${headerTranslation("service tagline")}`}
      title={t("title")}
      errorText={t("error")}
      text={t("technicalErrorText")}
    >
      <p className="fr-text--sm fr-mb-0">{t("reloadPageTips")}</p>
      <p className="fr-text--sm">{t("supportInformation")}</p>
      <Button
        priority="secondary"
        linkProps={{ to: "/mes-enquetes/$survey/contacter-assistance", params: { survey: surveyId } }}
      >
        {t("buttonLabel")}
      </Button>
    </ErrorPageDescription>
  );
};

const { i18n } = declareComponentKeys<
  "title" | "error" | "technicalErrorText" | "reloadPageTips" | "supportInformation" | "buttonLabel"
>()("TechnicalError");

export type I18n = typeof i18n;
