import { fr } from "@codegouvfr/react-dsfr";
import Badge from "@codegouvfr/react-dsfr/Badge";
import Card from "@codegouvfr/react-dsfr/Card";
import Tile from "@codegouvfr/react-dsfr/Tile";
import { useTranslation } from "i18n";
import { tss } from "tss-react/dsfr";

type Props = {
  questioning: any;
};

export const QuestioningCard = ({ questioning }: Props) => {
  const { t } = useTranslation("SurveyTable");
  const { classes, cx } = useStyles();

  return (
    <Card
      className={cx(classes.card, fr.cx("fr-mb-2w"))}
      start={<Badge severity="success">{questioning.status}</Badge>}
      title={questioning.questioning}
      desc={
        <div>
          <p
            className={fr.cx("fr-mb-3v")}
          >{`${t("survey unit")} : ${questioning.identificationCode}`}</p>
          <p
            className={fr.cx("fr-mb-1v")}
          >{`${t("identification name")} : ${questioning.identificationName}`}</p>
        </div>
      }
      footer={
        // TODO: use Button or Tile
        // <Button size="small">{t("goToSurvey")}</Button>
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
      }
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
