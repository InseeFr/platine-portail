import { fr, type FrCxArg } from "@codegouvfr/react-dsfr";
import type { PropsWithChildren } from "react";

type Props = {
  hidden?: boolean;
  hiddenScreenSize?: "md" | "sm" | "lg";
  unhidden?: boolean;
  unhiddenScreenSize?: "md" | "sm" | "lg";
};

export const DSFRHide = ({
  children,
  hidden,
  hiddenScreenSize,
  unhidden,
  unhiddenScreenSize,
}: PropsWithChildren<Props>) => {
  const concatHiddenWithScreensize: FrCxArg =
    hidden && hiddenScreenSize && `fr-hidden-${hiddenScreenSize}`;

  const concatUnhiddenScreensize: FrCxArg =
    unhidden && unhiddenScreenSize && `fr-unhidden-${unhiddenScreenSize}`;

  const classExtensions = [
    hidden && hiddenScreenSize && concatHiddenWithScreensize,
    hidden && !hiddenScreenSize && "fr-hidden",
    unhidden && unhiddenScreenSize && concatUnhiddenScreensize,
    unhidden && !unhiddenScreenSize && "fr-unhidden",
  ] as const;

  return <div className={fr.cx(classExtensions)}>{children}</div>;
};
