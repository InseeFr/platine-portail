import type { APISchemas } from "types/apiPortail";
import { QuestioningStatus, type Status } from "./QuestioningStatus";
import { useTranslation } from "i18n";
import Download from "@codegouvfr/react-dsfr/Download";
import { fr } from "@codegouvfr/react-dsfr";
import Button from "@codegouvfr/react-dsfr/Button";

type Props = {
  questioning: APISchemas["QuestionnaireDto"];
  hasSingleSurveyUnit: boolean;
};

export const SurveyTableRow = ({ questioning, hasSingleSurveyUnit }: Props) => {
  const { t } = useTranslation("SurveyTable");

  const getAction = (questioning: APISchemas["QuestionnaireDto"]) => {
    if (questioning.depositProofUrl && questioning.questioningStatus === "RECEIVED") {
      return (
        <Download
          className={fr.cx("fr-m-0")}
          details="TODO taille"
          label={t("download deposit proof")}
          linkProps={{
            href: questioning.depositProofUrl,
          }}
        />
      );
    }
    if (questioning.questioningAccessUrl && questioning.questioningStatus === "RECEIVED") {
      return (
        <Button
          size="small"
          linkProps={{
            href: questioning.questioningAccessUrl,
          }}
        >
          {t("download deposit proof")}
        </Button>
      );
    }
    if (questioning.questioningAccessUrl && questioning.questioningStatus === "OPEN") {
      return (
        <Button
          size="small"
          linkProps={{
            href: questioning.questioningAccessUrl,
          }}
        >
          {t("go to survey")}
        </Button>
      );
    }
  };

  const identificationCode =
    questioning.surveyUnitIdentificationCode && questioning.surveyUnitIdentificationCode !== ""
      ? questioning.surveyUnitIdentificationCode
      : "N/A";

  const identificationName =
    questioning.surveyUnitIdentificationName && questioning.surveyUnitIdentificationName !== ""
      ? questioning.surveyUnitIdentificationName
      : "N/A";
  return (
    <tr style={{ height: "70px" }}>
      {!hasSingleSurveyUnit && (
        <>
          <td>{identificationCode}</td>
          <td>{identificationName}</td>
        </>
      )}
      <td>{questioning.partitioningLabel ?? "N/A"}</td>
      <td>
        <QuestioningStatus translation={t} status={questioning.questioningStatus as Status} />
      </td>
      <td>{getAction(questioning)}</td>
    </tr>
  );
};
