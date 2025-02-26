import { fr } from "@codegouvfr/react-dsfr";
import type { PropsWithChildren } from "react";

type Props = {
  gutters?: boolean;
  middle?: boolean;
  center?: boolean;
};

export const DSFRGrid = ({ children, gutters, middle, center }: PropsWithChildren<Props>) => {
  const classExtensions = [
    "fr-grid-row",
    gutters && "fr-grid-row--gutters",
    middle && "fr-grid-row--middle",
    center && "fr-grid-row--center",
  ] as const;

  return <div className={fr.cx(classExtensions)}>{children}</div>;
};
