import { fr } from "@codegouvfr/react-dsfr";
import Button from "@codegouvfr/react-dsfr/Button";
import Input from "@codegouvfr/react-dsfr/Input";
import Divider from "@mui/material/Divider";
import { DSFRHide } from "components/commons/DSFRHide";
import { useTranslation } from "i18n";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { Schema, z } from "zod";

type Props = {
  onSubmit: () => void;
  register: UseFormRegister<z.TypeOf<Schema>>;
  errors: FieldErrors<{
    idec: string;
  }>;
};

export const ForgotPasswordForm = ({ onSubmit, register, errors }: Props) => {
  const { t: supportFormTranslation } = useTranslation("SupportForm");
  const { t } = useTranslation("ForgotPassword");

  return (
    <>
      <p>{t("information")}</p>
      <form action="#" onSubmit={onSubmit}>
        <Input
          label={supportFormTranslation("idec")}
          hintText={t("idecHintText")}
          nativeInputProps={{
            ...register("idec"),
            id: "idec",
            ...(errors.idec && { "aria-invalid": true, "aria-errormessage": "idec-desc-error" }),
          }}
          state={errors.idec ? "error" : "default"}
          stateRelatedMessage={errors.idec?.message && t(errors.idec?.message as keyof typeof t)}
        />
        {!errors.idec && (
          <DSFRHide hidden>
            <p id={"idec-desc-error"} />
          </DSFRHide>
        )}
        <Button
          style={{ width: "100%" }}
          className={fr.cx("fr-grid-row", "fr-grid-row--center")}
          type="submit"
        >
          {t("submitButton")}
        </Button>
      </form>
      <Divider orientation="horizontal" variant="fullWidth" className={fr.cx("fr-p-0", "fr-my-3w")} />
      <h4>{t("forgotPasswordHelpTitle")}</h4>
      <p>
        {t("forgotPasswordHelp")}
        <Button
          className={fr.cx("fr-pl-1v")}
          style={{
            padding: 0,
            display: "inline",
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
    </>
  );
};
