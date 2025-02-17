import type { APISchemas } from "types/api";
import { declareComponentKeys, useTranslation } from "i18n";
import { useForm } from "hooks/useForm";
import { addressSchema } from "types/schemas";
import { Input } from "@codegouvfr/react-dsfr/Input";
import { useFetchMutationPilotage } from "hooks/useFetchQuery";
import Button from "@codegouvfr/react-dsfr/Button";
import { fr } from "@codegouvfr/react-dsfr";

type Props = {
  contact: APISchemas["ContactDetailsDto"];
  onClose: () => void;
  onSave: () => void;
};

export const PostalAddressInformationsForm = ({ contact, onClose, onSave }: Props) => {
  const { t } = useTranslation("PostalAddressInformationsForm");
  const { t: translationMyAccount } = useTranslation("MyAccount");

  const { register, handleSubmit, reset, isDirty } = useForm(addressSchema, {
    defaultValues: contact.address,
  });

  const { mutateAsync, isPending } = useFetchMutationPilotage("/api/contacts/{id}", "put");

  const onSubmit = handleSubmit(async data => {
    await mutateAsync({
      body: { ...contact, address: { ...data } },
      urlParams: { id: contact.identifier },
    });
    onSave();
  });

  const handleClose = () => {
    reset(contact.address);
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
          {translationMyAccount("postal address")}
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
      <div className="fr-grid-row fr-grid-row--gutters fr-pb-4w fr-pb-md-1v">
        <Input
          className="fr-col-md-4 fr-col-12"
          label={t("country name")}
          nativeInputProps={{
            ...register("countryName"),
          }}
        />
        <Input
          className="fr-col-md-4 fr-col-12"
          label={t("street number")}
          nativeInputProps={{
            ...register("streetNumber"),
          }}
        />
        <Input
          className="fr-col-md-4 fr-col-12"
          label={t("repetition index")}
          nativeInputProps={{ autoComplete: "", ...register("repetitionIndex") }}
        />
      </div>
      <div className="fr-grid-row fr-grid-row--gutters fr-pb-4w fr-pb-md-1v">
        <Input
          className="fr-col-md-4 fr-col-12"
          label={t("street type")}
          nativeInputProps={{ ...register("streetType") }}
        />
        <Input
          className="fr-col-md-4 fr-col-12"
          label={t("street name")}
          nativeInputProps={{ ...register("streetName") }}
        />
        <Input
          className="fr-col-md-4 fr-col-12"
          label={t("address supplement")}
          nativeInputProps={{ ...register("addressSupplement") }}
        />
      </div>
      <div className="fr-grid-row fr-grid-row--gutters fr-pb-4w fr-pb-md-1v">
        <Input
          className="fr-col-md-4 fr-col-12"
          label={t("special distribution")}
          nativeInputProps={{ ...register("specialDistribution") }}
        />
        <Input
          className="fr-col-md-4 fr-col-12"
          label={t("zip code")}
          nativeInputProps={{ autoComplete: "postal-code", ...register("zipCode") }}
        />
        <Input
          className="fr-col-md-4 fr-col-12"
          label={t("city name")}
          nativeInputProps={{ ...register("cityName") }}
        />
      </div>
      <div className="fr-grid-row fr-grid-row--gutters fr-pb-4w fr-pb-md-1v">
        <Input
          className="fr-col-md-6 fr-col-12"
          label={t("cedex code")}
          hintText={t("cedex code hint text")}
          nativeInputProps={{ autoComplete: "postal-code", ...register("cedexCode") }}
        />
        <Input
          className="fr-col-md-6 fr-col-12"
          label={t("cedex name")}
          hintText={t("cedex name hint text")}
          nativeInputProps={{ ...register("cedexName") }}
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
  | "country name"
  | "street number"
  | "repetition index"
  | "street type"
  | "street name"
  | "address supplement"
  | "special distribution"
  | "zip code"
  | "city name"
  | "cedex code"
  | "cedex name"
  | "cedex name hint text"
  | "cedex code hint text"
  | "cancel"
  | "register"
>()("PostalAddressInformationsForm");

export type I18n = typeof i18n;
