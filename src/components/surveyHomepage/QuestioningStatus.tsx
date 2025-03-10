import { Badge } from "@codegouvfr/react-dsfr/Badge";
import type { ComponentKey } from "i18n/types";
import type { TranslationFunction } from "i18nifty/typeUtils/TranslationFunction";

const status = ["RECEIVED", "NOT_RECEIVED", "INCOMING", "OPEN"] as const;
export type Status = (typeof status)[number];

export const QuestioningStatus = ({
  status,
  translation,
}: {
  status?: Status;
  translation: TranslationFunction<"SurveyTable", ComponentKey>;
}) => {
  switch (status) {
    case "RECEIVED":
      return <Badge severity="success">{translation(status)}</Badge>;
    case "NOT_RECEIVED":
      return <Badge severity="error">{translation(status)}</Badge>;
    case "INCOMING":
      return <Badge severity="new">{translation(status)}</Badge>;
    case "OPEN":
      return <Badge severity="info">{translation(status)}</Badge>;
    default:
      return;
  }
};
