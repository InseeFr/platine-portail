import { RadioButtons } from "@codegouvfr/react-dsfr/RadioButtons";
import { useTranslation } from "i18n/i18n";
import { declareComponentKeys } from "i18nifty/declareComponentKeys";
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
      <div className="fr-grid-row fr-grid-row--between fr-grid-row--middle fr-mb-2w">
        <h3
          style={{
            color: fr.colors.decisions.text.title.blueFrance.default,
          }}
          className="fr-col fr-mb-1v"
        >
          {translationMyAccount("my personal information")}
        </h3>
        <div className="fr-hidden fr-unhidden-md">
          <Button
            priority="secondary"
            className="fr-mr-2w"
            type="reset"
            onClick={handleClose}
            disabled={isPending}
          >
            {t("cancel")}
          </Button>
          <Button type="submit" disabled={!isDirty}>
            {t("register")}
          </Button>
        </div>
      </div>
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
      <div className="fr-grid-row fr-grid-row--gutters fr-pb-4w fr-pb-md-1v">
        <Input
          className="fr-col-md-4 fr-col-12"
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
          className="fr-col-md-4 fr-col-12"
          label={t("firstName")}
          nativeInputProps={{
            autoComplete: "given-name",
            spellCheck: "false",
            ...register("firstName"),
          }}
        />
        <Input
          className="fr-col-md-4 fr-col-12"
          label={t("email")}
          nativeInputProps={{ autoComplete: "email", type: "email", ...register("email") }}
        />
      </div>
      <div className="fr-grid-row fr-grid-row--gutters fr-pb-4w fr-pb-md-1v">
        <Input
          className="fr-col-md-6 fr-col-12"
          label={t("function")}
          nativeInputProps={{ autoComplete: "organization", ...register("function") }}
        />
        <Input
          className="fr-col-md-6 fr-col-12"
          label={t("usual company name")}
          nativeInputProps={{ ...register("usualCompanyName") }}
        />
      </div>
      <div className="fr-grid-row fr-grid-row--gutters fr-pb-4w fr-pb-md-1v">
        <Input
          className="fr-col-md-6 fr-col-12"
          label={t("phone")}
          hintText={
            <div>
              <p className="fr-mb-1v fr-text--xs">{t("phone hint text")}</p>
              <p className="fr-mb-1v fr-text--xs">{t("phone example")}</p>
            </div>
          }
          nativeInputProps={{ autoComplete: "tel", type: "tel", ...register("otherPhone") }}
        />
        <Input
          className="fr-col-md-6 fr-col-12"
          label={t("mobile phone")}
          hintText={
            <div>
              <p className="fr-mb-1v fr-text--xs">{t("phone hint text")}</p>
              <p className="fr-mb-1v fr-text--xs">{t("phone example")}</p>
            </div>
          }
          nativeInputProps={{ autoComplete: "tel", type: "tel", ...register("phone") }}
        />
      </div>
      <div className="fr-hidden-md fr-mt-3w">
        <Button
          priority="secondary"
          className="fr-mr-2w"
          type="reset"
          onClick={handleClose}
          disabled={isPending}
        >
          {t("cancel")}
        </Button>
        <Button type="submit" disabled={!isDirty}>
          {t("register")}
        </Button>
      </div>
    </form>
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
