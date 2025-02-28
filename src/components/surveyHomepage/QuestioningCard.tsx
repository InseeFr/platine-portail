import { fr } from "@codegouvfr/react-dsfr";
import Card from "@codegouvfr/react-dsfr/Card";
import Tile from "@codegouvfr/react-dsfr/Tile";
import { useTranslation } from "i18n";
import { tss } from "tss-react/dsfr";
import { QuestioningStatus, type Status } from "./QuestioningStatus";
import { Button } from "@codegouvfr/react-dsfr/Button";
import type { APISchemas } from "types/apiPortail";

type Props = {
  questioning: APISchemas["QuestionnaireDto"];
  hasSingleSurveyUnit: boolean;
};

export const QuestioningCard = ({ questioning, hasSingleSurveyUnit }: Props) => {
  const { t } = useTranslation("SurveyTable");
  const { classes, cx } = useStyles();

  const cardClass = questioning.deliveryUrl ? classes.cardWithDelivery : classes.card;

  const getAction = (questioning: APISchemas["QuestionnaireDto"]) => {
    if (questioning.deliveryUrl && questioning.questioningStatus === "RECEIVED") {
      return (
        <div>
          <hr style={{ padding: 1 }} />
          <Tile
            className={fr.cx("fr-px-4w")}
            noBorder
            downloadButton
            small
            enlargeLinkOrButton
            linkProps={{
              href: "#",
            }}
            orientation="horizontal"
            title={t("download deposit proof")}
            detail="TODO DETAIL"
            titleAs="h3"
          />
        </div>
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
      footer={getAction(questioning)}
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
