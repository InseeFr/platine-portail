import ArtWorkBackground from "@codegouvfr/react-dsfr/dsfr/artwork/background/ovoid.svg";
import { fr } from "@codegouvfr/react-dsfr";
import ArtWork from "@codegouvfr/react-dsfr/dsfr/artwork/system.svg";
import Icon from "@codegouvfr/react-dsfr/dsfr/artwork/pictograms/system/technical-error.svg";

export const NotFoundPictogram = () => {
  return (
    <svg
      className={fr.cx("fr-artwork", "fr-responsive-img")}
      aria-hidden="true"
      width="160"
      height="200"
      viewBox="0 0 160 200"
    >
      <use className={fr.cx("fr-artwork-motif")} href={`${ArtWorkBackground}#artwork-motif`}></use>
      <use href={`${ArtWork}#artwork-motif`}></use>

      <use
        className={fr.cx("fr-artwork-background")}
        href={`${ArtWorkBackground}#artwork-background`}
      ></use>
      <g transform="translate(40, 60)">
        <use className={fr.cx("fr-artwork-decorative")} xlinkHref={`${Icon}#artwork-decorative`}></use>
        <use className={fr.cx("fr-artwork-minor")} xlinkHref={`${Icon}#artwork-minor`}></use>
        <use className={fr.cx("fr-artwork-major")} xlinkHref={`${Icon}#artwork-major`}></use>
      </g>
    </svg>
  );
};
