import { fr, type FrCxArg } from "@codegouvfr/react-dsfr";
import type { PropsWithChildren } from "react";

type Props = {
  id?: string;
  fluid?: boolean;
  className?: FrCxArg;
};

export const DSFRContainer = ({ children, fluid, id, className }: PropsWithChildren<Props>) => {
  const classExtensions = [className, fluid ? "fr-container--fluid" : "fr-container"] as const;

  return (
    <div className={fr.cx(classExtensions)} id={id}>
      {children}
    </div>
  );
};
