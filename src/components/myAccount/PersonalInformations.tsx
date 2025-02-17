import type { APISchemas } from "types/api";
import { declareComponentKeys, useTranslation } from "i18n";

type Props = {
  contact: APISchemas["ContactDetailsDto"];
};

export const PersonalInformations = ({ contact }: Props) => {
  const { t } = useTranslation("PersonalInformations");
  const { t: myAccountTranslation } = useTranslation("MyAccount");

  const civility =
    contact.civility && contact.civility !== "Undefined" ? myAccountTranslation(contact.civility) : "";
  return (
    <div>
      <InformationWithLabel label={t("civility")} information={civility} />
      <InformationWithLabel label={t("lastName")} information={contact.lastName} />
      <InformationWithLabel label={t("firstName")} information={contact.firstName} />
      <InformationWithLabel label={t("email")} information={contact.email} />
      <InformationWithLabel label={t("function")} information={contact.function} />
      <InformationWithLabel label={t("usual company name")} information={contact.usualCompanyName} />
      <InformationWithLabel label={t("phone")} information={contact.otherPhone} />
      <InformationWithLabel label={t("mobile phone")} information={contact.phone} />
    </div>
  );
};

export const InformationWithLabel = ({
  label,
  information,
}: {
  label: string;
  information?: string;
}) => {
  return (
    <div className="fr-grid-row">
      <p className="fr-mb-1w fr-mr-1v"> {label}</p>
      <p className="fr-mb-1w fr-text--bold">{information && information !== "" ? information : "-"}</p>
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
>()("PersonalInformations");

export type I18n = typeof i18n;
