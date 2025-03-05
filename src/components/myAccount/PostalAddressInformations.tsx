import { InformationWithLabel } from "./PersonalInformations";
import { declareComponentKeys, useTranslation } from "i18n";

type Props = {
  address:
    | {
        streetNumber?: string;
        repetitionIndex?: string;
        streetType?: string;
        streetName?: string;
        addressSupplement?: string;
        cityName?: string;
        zipCode?: string;
        cedexCode?: string;
        cedexName?: string;
        specialDistribution?: string;
        countryCode?: string;
        countryName?: string;
      }
    | undefined;
};

export const PostalAddressInformations = ({ address }: Props) => {
  const { t } = useTranslation("PostalAddressInformations");

  return (
    <div>
      <InformationWithLabel label={t("country name")} information={address?.countryName} />
      <InformationWithLabel label={t("street number")} information={address?.streetNumber} />
      <InformationWithLabel label={t("repetition index")} information={address?.repetitionIndex} />
      <InformationWithLabel label={t("street type")} information={address?.streetType} />
      <InformationWithLabel label={t("street name")} information={address?.streetName} />
      <InformationWithLabel label={t("address supplement")} information={address?.addressSupplement} />
      <InformationWithLabel
        label={t("special distribution")}
        information={address?.specialDistribution}
      />

      <InformationWithLabel label={t("zip code")} information={address?.zipCode} />
      <InformationWithLabel label={t("city name")} information={address?.cityName} />

      <InformationWithLabel label={t("cedex code")} information={address?.cedexCode} />
      <InformationWithLabel label={t("cedex name")} information={address?.cedexName} />
    </div>
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
>()("PostalAddressInformations");

export type I18n = typeof i18n;
