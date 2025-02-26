import { fr } from "@codegouvfr/react-dsfr";
import MailSend from "@codegouvfr/react-dsfr/dsfr/artwork/pictograms/digital/mail-send.svg";

export const MailSendPictogram = () => {
  return (
    <svg
      className={fr.cx("fr-artwork", "fr-responsive-img", "fr-artwork--green-bourgeon")}
      aria-hidden="true"
      width="160"
      height="200"
      viewBox="0 0 160 200"
    >
      <g transform="translate(0 20) scale(2)">
        <use
          className={fr.cx("fr-artwork-decorative")}
          xlinkHref={`${MailSend}#artwork-decorative`}
        ></use>
        <use className={fr.cx("fr-artwork-minor")} xlinkHref={`${MailSend}#artwork-minor`}></use>
        <use className={fr.cx("fr-artwork-major")} xlinkHref={`${MailSend}#artwork-major`}></use>
      </g>
    </svg>
  );
};
