import { RadioButtons } from "@codegouvfr/react-dsfr/RadioButtons";
import { useTranslation } from "i18n/i18n";
import { declareComponentKeys } from "i18nifty/declareComponentKeys";
import { tss } from "tss-react/dsfr";
import { Input } from "@codegouvfr/react-dsfr/Input";
import { fr } from "@codegouvfr/react-dsfr";
import Button from "@codegouvfr/react-dsfr/Button";
import type { APISchemas } from "types/api";
import { useForm } from "hooks/useForm";
import { personnalInformationsSchema } from "types/schemas";
import { useState } from "react";
import { useFetchMutationPilotage } from "hooks/useFetchQuery";

type Props = {
  contact: APISchemas["ContactDetailsDto"];
  onClose: () => void;
  onSave: () => void;
};

export const PersonalInformationsForm = ({ contact, onClose, onSave }: Props) => {
  const { classes } = useStylesContactInformationsForm();
  const { t: translationMyAccount } = useTranslation("MyAccount");
  const { t } = useTranslation("PersonalInformationsForm");
  const [civility, setCivility] = useState<APISchemas["ContactDetailsDto"]["civility"]>(
    contact.civility,
  );

  const { register, errors, handleSubmit, reset, isDirty } = useForm(personnalInformationsSchema, {
    defaultValues: contact,
  });

  const { mutateAsync, isPending } = useFetchMutationPilotage("/api/contacts/{id}", "put");

  const onSubmit = handleSubmit(async data => {
    await mutateAsync({
      body: { ...data, civility: civility, identifier: contact.identifier },
      urlParams: { id: contact.identifier },
    });
    onSave();
  });

  const handleClose = () => {
    reset(contact);
    onClose();
  };

  return (
    <form action="#" onSubmit={onSubmit}>
      <RadioButtons
        legend={t("civility")}
        small
        options={[
          {
            label: translationMyAccount("Female"),
            nativeInputProps: {
              checked: civility === "Female",
              onChange: () => setCivility("Female"),
            },
          },
          {
            label: translationMyAccount("Male"),
            nativeInputProps: {
              checked: civility === "Male",
              onChange: () => setCivility("Male"),
            },
          },
        ]}
        orientation="horizontal"
      />
      <div className={classes.container}>
        <Input
          label={t("lastName")}
          nativeInputProps={{
            autoComplete: "family-name",
            spellCheck: "false",
            ...register("lastName"),
          }}
          state={errors.lastName ? "error" : "default"}
          stateRelatedMessage={errors.lastName?.message}
        />
        <Input
          label={t("firstName")}
          nativeInputProps={{
            autoComplete: "given-name",
            spellCheck: "false",
            ...register("firstName"),
          }}
        />
        <Input
          label={t("email")}
          nativeInputProps={{ autoComplete: "email", type: "email", ...register("email") }}
        />
      </div>
      <div className={classes.container}>
        <Input
          label={t("function")}
          nativeInputProps={{ autoComplete: "organization", ...register("function") }}
        />
        <Input label={t("usual company name")} nativeInputProps={{ ...register("usualCompanyName") }} />
      </div>
      <div className={classes.container}>
        <Input
          label={t("phone")}
          hintText={
            <div className={classes.hintText}>
              <span>{t("phone hint text")}</span>
              <span>{t("phone example")}</span>
            </div>
          }
          nativeInputProps={{ autoComplete: "tel", type: "tel", ...register("otherPhone") }}
        />
        <Input
          label={t("mobile phone")}
          hintText={
            <div className={classes.hintText}>
              <span>{t("phone hint text")}</span>
              <span>{t("phone example")}</span>
            </div>
          }
          nativeInputProps={{ autoComplete: "tel", type: "tel", ...register("phone") }}
        />
      </div>
      <FormButtons
        classes={classes}
        onClose={handleClose}
        isPending={isPending}
        isNotSubmittable={!isDirty}
      />
    </form>
  );
};

type FormButtonsProps = {
  classes: Record<"hintText" | "container" | "buttons", string>;
  onClose: () => void;
  isPending: boolean;
  isNotSubmittable: boolean;
};

export const FormButtons = ({ classes, onClose, isPending, isNotSubmittable }: FormButtonsProps) => {
  const { t } = useTranslation("PersonalInformationsForm");

  return (
    <div className={classes.buttons}>
      <Button priority="secondary" type="reset" onClick={onClose} disabled={isPending}>
        {t("cancel")}
      </Button>
      <Button type="submit" disabled={isNotSubmittable}>
        {t("register")}
      </Button>
    </div>
  );
};

const { i18n } = declareComponentKeys<
  | "civility"
  | "lastName"
  | "firstName"
  | "email"
  | "function"
  | "usual company name"
  | "phone"
  | "mobile phone"
  | "phone hint text"
  | "phone example"
  | "cancel"
  | "register"
>()("PersonalInformationsForm");

export type I18n = typeof i18n;

export const useStylesContactInformationsForm = tss.withName({ PersonalInformationsForm }).create({
  container: {
    display: "flex",

    ".fr-input-group": {
      flexGrow: 1,
    },
    [fr.breakpoints.down("sm")]: {
      flexDirection: "column",
      paddingBottom: fr.spacing("3w"),
    },
    [fr.breakpoints.up("sm")]: {
      gap: fr.spacing("3w"),
    },
  },
  hintText: {
    display: "flex",
    flexDirection: "column",
  },
  buttons: {
    display: "flex",
    justifyContent: "end",
    gap: fr.spacing("2w"),
  },
});
