import ArtWorkBackground from "@codegouvfr/react-dsfr/dsfr/artwork/background/ovoid.svg";
import ArtWork from "@codegouvfr/react-dsfr/dsfr/artwork/system.svg";
import Community from "@codegouvfr/react-dsfr/dsfr/artwork/pictograms/leisure/community.svg";
import { fr } from "@codegouvfr/react-dsfr";

export const CommunityIcon = () => {
  return (
    <svg
      className={fr.cx(
        "fr-artwork",
        "fr-responsive-img",
        "fr-hidden",
        "fr-unhidden-lg",
        "fr-mr-3w",
        "fr-artwork--green-bourgeon",
      )}
      aria-hidden="true"
      style={{ width: "280px", height: "320px" }}
      viewBox="0 0 160 200"
    >
      <use className={fr.cx("fr-artwork-motif")} href={`${ArtWorkBackground}#artwork-motif`}></use>
      <use href={`${ArtWork}#artwork-motif`}></use>

      <use
        className={fr.cx("fr-artwork-background")}
        href={`${ArtWorkBackground}#artwork-background`}
      ></use>
      <g transform="translate(40, 60)">
        <use
          className={fr.cx("fr-artwork-decorative")}
          xlinkHref={`${Community}#artwork-decorative`}
        ></use>
        <use className={fr.cx("fr-artwork-minor")} xlinkHref={`${Community}#artwork-minor`}></use>
        <use className={fr.cx("fr-artwork-major")} xlinkHref={`${Community}#artwork-major`}></use>
      </g>
    </svg>
  );
};
