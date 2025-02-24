import { fr } from "@codegouvfr/react-dsfr";
import Alert from "@codegouvfr/react-dsfr/Alert";
import Button from "@codegouvfr/react-dsfr/Button";
import Divider from "@mui/material/Divider";
import { useTranslation } from "i18n/i18n";

type Props = {
  onClickToGoBack: () => void;
};

export const ForgotPasswordValidated = ({ onClickToGoBack }: Props) => {
  const { t } = useTranslation("ForgotPassword");
  return (
    <div>
      <Alert
        description={
          <p className={fr.cx("fr-text--sm")}>
            <Button
              className={fr.cx("fr-pl-1v", "fr-text--sm")}
              style={{
                padding: 0,
                display: "inline",
                textDecoration: "underline",
                fontWeight: "400",
              }}
              priority="tertiary no outline"
              linkProps={{
                to: "/assistance",
                search: {
                  "mot-de-passe-oublie": true,
                },
              }}
            >
              {t("contactSupport")}
            </Button>
          </p>
        }
        severity="success"
        small
      />
      <Divider orientation="horizontal" variant="fullWidth" className={fr.cx("fr-p-0", "fr-my-3w")} />
      <Button
        style={{ width: "100%" }}
        className={fr.cx("fr-grid-row", "fr-grid-row--center", "fr-mb-3w")}
        linkProps={{
          to: "/mes-enquetes",
        }}
      >
        {t("goBackToConnexion")}
      </Button>
      <Button
        style={{ width: "100%" }}
        priority="secondary"
        className={fr.cx("fr-grid-row", "fr-grid-row--center")}
        onClick={onClickToGoBack}
      >
        {t("modifyIdentifier")}
      </Button>
    </div>
  );
};
