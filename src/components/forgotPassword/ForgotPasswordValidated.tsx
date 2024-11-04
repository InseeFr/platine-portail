import Alert from "@codegouvfr/react-dsfr/Alert";
import Button from "@codegouvfr/react-dsfr/Button";
import Divider from "@mui/material/Divider";
import { useTranslation } from "i18n/i18n";

type Props = {
  surveyId: string;
  onClickToGoBack: () => void;
};

export const ForgotPasswordValidated = ({ surveyId, onClickToGoBack }: Props) => {
  const { t } = useTranslation("ForgotPassword");
  return (
    <div>
      <Alert
        description={
          <p className="fr-text--sm">
            {surveyId === "eec" ? t("alertTextEEC") : t("alertText")}
            <Button
              className="fr-pl-1v fr-text--sm"
              style={{
                padding: 0,
                display: "inline",
                textDecoration: "underline",
                fontWeight: "400",
              }}
              priority="tertiary no outline"
              linkProps={{
                to: "/$survey/contacter-assistance",
                params: {
                  survey: surveyId,
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
      <Divider orientation="horizontal" variant="fullWidth" className="fr-p-0 fr-my-3w" />
      <Button
        style={{ width: "100%" }}
        className="fr-grid-row fr-grid-row--center fr-mb-3w"
        linkProps={{
          to: "/$survey/login",
          params: {
            survey: surveyId,
          },
        }}
      >
        {t("goBackToConnexion")}
      </Button>
      <Button
        style={{ width: "100%" }}
        priority="secondary"
        className="fr-grid-row fr-grid-row--center"
        onClick={onClickToGoBack}
      >
        {t("modifyIdentifier")}
      </Button>
    </div>
  );
};
