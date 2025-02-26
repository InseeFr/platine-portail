import ArtWorkBackground from "@codegouvfr/react-dsfr/dsfr/artwork/background/ovoid.svg";
import ArtWork from "@codegouvfr/react-dsfr/dsfr/artwork/system.svg";
import SearchSvg from "@codegouvfr/react-dsfr/dsfr/artwork/pictograms/digital/search.svg";
import { fr } from "@codegouvfr/react-dsfr";

export const SearchPictogram = () => {
  return (
    <svg
      className={fr.cx("fr-artwork", "fr-responsive-img", "fr-mr-3w", "fr-artwork--green-bourgeon")}
      aria-hidden="true"
      style={{ width: "120px", height: "160px" }}
      viewBox="0 0 160 200"
    >
      <use className={fr.cx("fr-artwork-motif")} href={`${ArtWorkBackground}#artwork-motif`}></use>
      <use href={`${ArtWork}#artwork-motif`}></use>

      <use
        className={fr.cx("fr-artwork-background")}
        href={`${ArtWorkBackground}#artwork-background`}
      ></use>
      <g transform="translate(10, 20) scale(1.8)">
        <use
          className={fr.cx("fr-artwork-decorative")}
          xlinkHref={`${SearchSvg}#artwork-decorative`}
        ></use>
        <use className={fr.cx("fr-artwork-minor")} xlinkHref={`${SearchSvg}#artwork-minor`}></use>
        <use className={fr.cx("fr-artwork-major")} xlinkHref={`${SearchSvg}#artwork-major`}></use>
      </g>
    </svg>
  );
};
