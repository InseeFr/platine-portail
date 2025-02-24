import { Input } from "@codegouvfr/react-dsfr/Input";
import { Select } from "@codegouvfr/react-dsfr/SelectNext";
import { useTranslation } from "i18n";
import type { UseFormRegister } from "react-hook-form";
import { tss } from "tss-react/dsfr";
import type { MailObjectType } from "types/mailObjectEnum";
import type { Schema, z } from "zod";
import { DSFRHide } from "./DSFRHide";

type Props = {
  errors: any;
  register: UseFormRegister<z.TypeOf<Schema>>;
  objectOptions: MailObjectType[];
};

export const SupportFormPart = ({ register, errors, objectOptions }: Props) => {
  const { t } = useTranslation("SupportForm");
  const { classes } = useStyles();
  return (
    <>
      <Select
        label={t("object")}
        nativeSelectProps={{
          ...register("mailObjet"),
          id: "object",
          ...(errors.mailObjet ? { "aria-invalid": true, "aria-errormessage": `object-desc` } : {}),
        }}
        options={objectOptions.map(option => {
          return { value: option, label: t(option) };
        })}
        placeholder={t("objectPlaceholder")}
        state={errors.mailObjet ? "error" : "default"}
        stateRelatedMessage={errors.mailObjet?.message && t(errors.mailObjet?.message)}
      />
      {!errors.mailObjet && (
        <DSFRHide hidden>
          <p id={"object-desc"} />
        </DSFRHide>
      )}
      <Input
        label={t("lastName")}
        nativeInputProps={{
          autoComplete: "family-name",
          spellCheck: "false",
          ...register("lastName"),
          id: "lastName",
          ...(errors.lastName
            ? { "aria-invalid": true, "aria-errormessage": `lastName-desc-error` }
            : {}),
        }}
      />
      {!errors.lastName && (
        <DSFRHide hidden>
          <p id={"lastName-desc-error"} />
        </DSFRHide>
      )}
      <Input
        label={t("firstName")}
        nativeInputProps={{
          autoComplete: "given-name",
          spellCheck: "false",
          ...register("firstName"),
          id: "firstName",
          ...(errors.firstName
            ? { "aria-invalid": true, "aria-errormessage": `firstName-desc-error` }
            : {}),
        }}
      />
      {!errors.firstName && (
        <DSFRHide hidden>
          <p id={"firstName-desc-error"} />
        </DSFRHide>
      )}
      <Input
        label={t("phone")}
        nativeInputProps={{
          autoComplete: "tel",
          type: "tel",
          ...register("phonenumber"),
          id: "phone",
          ...(errors.phonenumber
            ? { "aria-invalid": true, "aria-errormessage": `phone-desc-error` }
            : {}),
        }}
      />
      {!errors.phonenumber && (
        <DSFRHide hidden>
          <p id={"phone-desc-error"} />
        </DSFRHide>
      )}
      <Input
        label={t("email")}
        nativeInputProps={{
          autoComplete: "email",
          type: "email",
          ...register("mailaddress"),
          id: "email",
          ...(errors.mailaddress && {
            "aria-invalid": true,
            "aria-errormessage": "email-desc-error",
          }),
        }}
        state={errors.mailaddress ? "error" : "default"}
        stateRelatedMessage={errors.mailaddress?.message && t(errors.mailaddress?.message)}
      />
      {!errors.mailaddress && (
        <DSFRHide hidden>
          <p id={"email-desc-error"} />
        </DSFRHide>
      )}
      <Input
        label={t("confirmEmail")}
        nativeInputProps={{
          autoComplete: "email",
          type: "email",
          ...register("mailaddressConfirmation"),
          id: "confirmEmail",
          ...(errors.mailaddressConfirmation && {
            "aria-invalid": true,
            "aria-errormessage": "confirmEmail-desc-error",
          }),
        }}
        state={errors.mailaddressConfirmation ? "error" : "default"}
        stateRelatedMessage={
          errors.mailaddressConfirmation?.message && t(errors.mailaddressConfirmation?.message)
        }
      />
      {!errors.mailaddressConfirmation && (
        <DSFRHide hidden>
          <p id={"confirmEmail-desc-error"} />
        </DSFRHide>
      )}
      <Input
        label={t("idec")}
        hintText={t("idecHintText")}
        nativeInputProps={{
          ...register("idec"),
          id: "idec",
          ...(errors.idec && { "aria-invalid": true, "aria-errormessage": "idec-desc-error" }),
        }}
        state={errors.idec ? "error" : "default"}
        stateRelatedMessage={errors.idec?.message && t(errors.idec?.message)}
      />
      {!errors.idec && (
        <DSFRHide hidden>
          <p id={"idec-desc-error"} />
        </DSFRHide>
      )}
      <Input
        label={t("message")}
        textArea
        className={classes.inputTextArea}
        state={errors.message ? "error" : "info"}
        stateRelatedMessage={errors.message?.message ? t(errors.message?.message) : t("messageInfo")}
        nativeTextAreaProps={register("message")}
      />
    </>
  );
};

const useStyles = tss.withName({ SupportFormPart }).create({
  inputTextArea: {
    textArea: {
      height: "200px",
    },
  },
});
