import { QuestioningStatus, type Status } from "./QuestioningStatus";
import { useTranslation } from "i18n";
import Download from "@codegouvfr/react-dsfr/Download";
import { fr } from "@codegouvfr/react-dsfr";
import Button from "@codegouvfr/react-dsfr/Button";
import { useEffect, useState } from "react";
import { fetchFileInfo, getDetails, type FileType } from "functions/fileHandling";

type Questioning = {
  surveyUnitIdentificationCode?: string;
  surveyUnitIdentificationName?: string;
  surveyUnitId?: string;
  questioningStatus?: string;
  questioningAccessUrl?: string;
  depositProofUrl?: string;
  partitioningLabel?: string;
};
type Props = {
  questioning: Questioning;
  hasSingleSurveyUnit: boolean;
};

export const SurveyTableRow = ({ questioning, hasSingleSurveyUnit }: Props) => {
  const { t } = useTranslation("SurveyTable");

  const [file, setFile] = useState<FileType>();

  useEffect(() => {
    const getFileInfo = async () => {
      const file = await fetchFileInfo(questioning.depositProofUrl);

      setFile(file);
    };

    getFileInfo();

    return () => {
      if (file?.url) {
        URL.revokeObjectURL(file.url);
      }
    };
  }, [questioning.depositProofUrl]);

  const getAction = (questioning: Questioning) => {
    if (file) {
      const details = getDetails(file);

      return (
        <Download
          className={fr.cx("fr-m-0")}
          details={details}
          label={t("download deposit proof")}
          linkProps={{
            href: file.url ?? "#",
          }}
        />
      );
    }

    if (
      questioning.questioningAccessUrl &&
      (questioning.questioningStatus === "RECEIVED" || questioning.questioningStatus === "OPEN")
    ) {
      return (
        <Button
          size="small"
          linkProps={{
            href: questioning.questioningAccessUrl,
          }}
        >
          {questioning.questioningStatus === "RECEIVED"
            ? t("download deposit proof")
            : t("go to survey")}
        </Button>
      );
    }
  };

  const identificationCode = questioning.surveyUnitIdentificationCode
    ? questioning.surveyUnitIdentificationCode
    : "N/A";

  const identificationName = questioning.surveyUnitIdentificationName
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
