import { fr } from "@codegouvfr/react-dsfr";
import Card from "@codegouvfr/react-dsfr/Card";
import Tile from "@codegouvfr/react-dsfr/Tile";
import { useTranslation } from "i18n";
import { tss } from "tss-react/dsfr";
import { QuestioningStatus } from "./QuestioningStatus";
import { Button } from "@codegouvfr/react-dsfr/Button";

type Props = {
  questioning: any;
};

export const QuestioningCard = ({ questioning }: Props) => {
  const { t } = useTranslation("SurveyTable");
  const { classes, cx } = useStyles();

  const getAction = (questioning: any) => {
    if (questioning.deliveryUrl) {
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
          {t("goToSurvey")}
        </Button>
      );
    }
  };

  return (
    <Card
      className={cx(classes.card, fr.cx("fr-mb-2w"))}
      start={<QuestioningStatus translation={t} status={questioning.questioningStatus} />}
      title={questioning.partitioningLabel}
      desc={
        <div>
          <p
            className={fr.cx("fr-mb-3v")}
          >{`${t("survey unit")} : ${questioning.surveyUnitIdentificationCode}`}</p>
          <p
            className={fr.cx("fr-mb-1v")}
          >{`${t("identification name")} : ${questioning.surveyUnitIdentificationName}`}</p>
        </div>
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
    ".fr-card__footer": {
      padding: 0,
    },
  },
});
