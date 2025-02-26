import { fr } from "@codegouvfr/react-dsfr";
import Card from "@codegouvfr/react-dsfr/Card";
import type { ReactNode } from "react";
import { tss } from "tss";

type Props = {
  image: ReactNode;
  title: string;
  description: string;
  link: string;
};

export const ActivityCard = ({ image, title, description, link }: Props) => {
  // TODO: add title to <a>
  const { classes, cx } = useStyles();
  return (
    <Card
      imageComponent={image}
      desc={
        <a
          className={fr.cx("fr-link", "fr-link--icon-right", "fr-icon-arrow-right-line")}
          title="todo: add title"
          href={link}
        >
          {description}
        </a>
      }
      title={title}
      border
      background
      className={cx(classes.card)}
    />
  );
};

const useStyles = tss.withName({ ActivityCard }).create({
  card: {
    ".fr-card__end": {
      marginTop: 0,
      paddingTop: 0,
    },
  },
});
