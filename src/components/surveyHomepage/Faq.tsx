import { declareComponentKeys, useTranslation } from "i18n";
import type { SurveyData } from "types/ContentSurvey";
import { Accordion } from "@codegouvfr/react-dsfr/Accordion";
import { fr } from "@codegouvfr/react-dsfr";
import { Markdown } from "components/Markdown";

type Props = {
  faqData: SurveyData["content"]["faq-data"];
  generalFaqData: { title: string; body: string }[];
};

export const Faq = ({ faqData, generalFaqData }: Props) => {
  const { t } = useTranslation("Support");

  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-6", "fr-pr-md-4w")}>
      <h3>{t("FAQ")}</h3>
      <h4>{t("generalQuestions")}</h4>
      <div className={fr.cx("fr-accordions-group", "fr-pb-4w")}>
        {generalFaqData.map(data => (
          <Accordion key={data.title} label={data.title}>
            <Markdown content={data.body} />
          </Accordion>
        ))}
      </div>

      <h4>{t("surveyQuestions")}</h4>
      <div className={fr.cx("fr-accordions-group", "fr-mb-4w", "fr-mb-md-0")}>
        {faqData.map(data => (
          <Accordion key={data.title} label={data.title}>
            <Markdown content={data.body} />
          </Accordion>
        ))}
      </div>
    </section>
  );
};

const { i18n } = declareComponentKeys<
  | "contact support"
  | "support title"
  | "generalQuestions"
  | "surveyQuestions"
  | "FAQ"
  | "FAQ form section"
  | "FAQ form title"
  | "contact us"
  | "survey"
>()("Support");

export type I18n = typeof i18n;
