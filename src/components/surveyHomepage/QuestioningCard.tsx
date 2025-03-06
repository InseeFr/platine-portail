import { fr } from "@codegouvfr/react-dsfr";
import Card from "@codegouvfr/react-dsfr/Card";
import Tile from "@codegouvfr/react-dsfr/Tile";
import { useTranslation } from "i18n";
import { tss } from "tss-react/dsfr";
import { QuestioningStatus, type Status } from "./QuestioningStatus";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { useEffect, useState } from "react";
import { fetchFileInfo, getDetails } from "./SurveyTableRow";

export type Questioning = {
  surveyUnitIdentificationCode?: string;
  surveyUnitIdentificationName?: string;
  questioningStatus?: string;
  questioningAccessUrl?: string;
  depositProofUrl?: string;
  partitioningLabel?: string;
};

type Props = {
  questioning: Questioning;
  hasSingleSurveyUnit: boolean;
};

export const QuestioningCard = ({ questioning, hasSingleSurveyUnit }: Props) => {
  const { t } = useTranslation("SurveyTable");
  const { classes, cx } = useStyles();

  const [file, setFile] = useState<{
    extension: string | undefined;
    size: number | null;
  }>({
    extension: undefined,
    size: null,
  });

  const cardClass = questioning.depositProofUrl ? classes.cardWithDelivery : classes.card;

  useEffect(() => {
    const getFileInfo = async () => {
      const { extension, size } = await fetchFileInfo(questioning.depositProofUrl);

      setFile({ extension, size });
    };

    getFileInfo();
  }, [questioning.depositProofUrl]);

  const handleDownload = () => {
    if (questioning.depositProofUrl) {
      const link = document.createElement("a");
      link.setAttribute("data-fr-assess-file", "bytes");
      link.href = questioning.depositProofUrl;

      link.download = `${t("dowloadLabel")}.${file.extension}}`;
      link.click();
    }
  };

  const getAction = ({
    depositProofUrl,
    questioningStatus,
    questioningAccessUrl,
  }: {
    depositProofUrl?: string;
    questioningStatus?: string;
    questioningAccessUrl?: string;
  }) => {
    if (depositProofUrl && questioningStatus === "RECEIVED") {
      return (
        <div>
          <hr style={{ padding: 1 }} />
          <Tile
            className={fr.cx("fr-px-4w")}
            noBorder
            downloadButton
            small
            enlargeLinkOrButton
            buttonProps={{ onClick: handleDownload }}
            orientation="horizontal"
            title={t("download deposit proof")}
            detail={
              <p
                style={{ "color": fr.colors.decisions.text.mention.grey.default }}
                className="fr-text--xs"
              >
                {getDetails(file)}
              </p>
            }
            titleAs="h3"
          />
        </div>
      );
    }

    if (questioningAccessUrl && questioningStatus === "RECEIVED") {
      return (
        <Button
          size="small"
          linkProps={{
            href: questioningAccessUrl,
          }}
        >
          {t("download deposit proof")}
        </Button>
      );
    }

    if (questioningAccessUrl && questioningStatus === "OPEN") {
      return (
        <Button
          size="small"
          linkProps={{
            href: questioningAccessUrl,
          }}
        >
          {t("go to survey")}
        </Button>
      );
    }
  };

  return (
    <Card
      className={cx(cardClass, fr.cx("fr-mb-2w"))}
      start={
        questioning.questioningStatus && (
          <QuestioningStatus translation={t} status={questioning.questioningStatus as Status} />
        )
      }
      title={questioning.partitioningLabel ?? ""}
      desc={
        !hasSingleSurveyUnit && (
          <div>
            {questioning.surveyUnitIdentificationCode &&
              questioning.surveyUnitIdentificationCode !== "" && (
                <p
                  className={fr.cx("fr-mb-3v")}
                >{`${t("survey unit")} : ${questioning.surveyUnitIdentificationCode}`}</p>
              )}
            {questioning.surveyUnitIdentificationName &&
              questioning.surveyUnitIdentificationName !== "" && (
                <p
                  className={fr.cx("fr-mb-1v")}
                >{`${t("identification name")} : ${questioning.surveyUnitIdentificationName}`}</p>
              )}
          </div>
        )
      }
      footer={getAction({
        depositProofUrl: questioning.depositProofUrl,
        questioningStatus: questioning.questioningStatus,
        questioningAccessUrl: questioning.questioningAccessUrl,
      })}
    />
  );
};

const useStyles = tss.withName({ QuestioningCard }).create({
  card: {
    ".fr-card__content": {
      paddingBottom: 0,
    },
  },
  cardWithDelivery: {
    ".fr-card__content": {
      paddingBottom: 0,
    },
    ".fr-card__footer": {
      padding: 0,
    },
  },
});
