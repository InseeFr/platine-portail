import { fr } from "@codegouvfr/react-dsfr";
import Document from "@codegouvfr/react-dsfr/dsfr/artwork/pictograms/document/document.svg";

export const DocumentPictogram = () => {
  return (
    <svg
      className={fr.cx(
        "fr-artwork",
        "fr-responsive-img",
        "fr-artwork--green-bourgeon",
        "fr-hidden",
        "fr-unhidden-lg",
      )}
      aria-hidden="true"
      width="160"
      height="200"
      viewBox="0 0 160 200"
    >
      <g transform="translate(0 20) scale(2)">
        <use
          className={fr.cx("fr-artwork-decorative")}
          xlinkHref={`${Document}#artwork-decorative`}
        ></use>
        <use className={fr.cx("fr-artwork-minor")} xlinkHref={`${Document}#artwork-minor`}></use>
        <use className={fr.cx("fr-artwork-major")} xlinkHref={`${Document}#artwork-major`}></use>
      </g>
    </svg>
  );
};
