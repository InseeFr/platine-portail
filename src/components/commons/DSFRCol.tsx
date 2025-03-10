import { fr, type FrCxArg } from "@codegouvfr/react-dsfr";
import type { PropsWithChildren } from "react";

type Col = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";

type Props = {
  col?: Col;
  colMd?: Col;
  className?: FrCxArg;
};

export const DSFRCol = ({ children, col, colMd, className }: PropsWithChildren<Props>) => {
  const concatCol: FrCxArg = col && `fr-col-${col}`;
  const concatColMd: FrCxArg = colMd && `fr-col-md-${colMd}`;

  const classExtensions = [className, col && concatCol, colMd && concatColMd] as const;

  return <div className={fr.cx(classExtensions)}>{children}</div>;
};
