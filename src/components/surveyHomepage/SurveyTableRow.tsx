import type { APISchemas } from "types/apiPortail";
import { QuestioningStatus, type Status } from "./QuestioningStatus";
import { useTranslation } from "i18n";
import Download from "@codegouvfr/react-dsfr/Download";
import { fr } from "@codegouvfr/react-dsfr";
import Button from "@codegouvfr/react-dsfr/Button";
import { useEffect, useState } from "react";

type Props = {
  questioning: APISchemas["QuestionnaireDto"];
  hasSingleSurveyUnit: boolean;
};

export const fetchFileInfo = async (depositProofUrl: string | undefined) => {
  if (depositProofUrl) {
    try {
      const response = await fetch(depositProofUrl, {
        method: "HEAD",
      });

      if (response.ok) {
        const size = response.headers.get("Content-Length");
        const extension = depositProofUrl.split(".").pop();

        return { extension: extension, size: size ? parseInt(size) : null };
      } else {
        console.error("Error retrieving file information");
        return { extension: undefined, size: null };
      }
    } catch (error) {
      console.error("Error : ", error);
      return { extension: undefined, size: null };
    }
  }
  return { extension: undefined, size: null };
};

export const getDetails = (file: { extension: string | undefined; size: number | null }) => {
  if (file.extension && file.size) {
    return `${file.extension.toLocaleUpperCase()} -  ${(file.size / 1024).toFixed(0)} Ko`;
  }
  if (file.extension) {
    return file.extension;
  }
  return file.size ? `${(file.size / 1024).toFixed(0)} Ko` : "";
};

export const SurveyTableRow = ({ questioning, hasSingleSurveyUnit }: Props) => {
  const { t } = useTranslation("SurveyTable");

  const [file, setFile] = useState<{
    extension: string | undefined;
    size: number | null;
  }>({
    extension: undefined,
    size: null,
  });

  useEffect(() => {
    const getFileInfo = async () => {
      const { extension, size } = await fetchFileInfo(questioning.depositProofUrl);

      setFile({ extension, size });
    };

    getFileInfo();
  }, [questioning.depositProofUrl]);

  const getAction = (questioning: APISchemas["QuestionnaireDto"]) => {
    if (questioning.depositProofUrl && questioning.questioningStatus === "RECEIVED") {
      const details = getDetails(file);

      return (
        <Download
          className={fr.cx("fr-m-0")}
          details={details}
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
