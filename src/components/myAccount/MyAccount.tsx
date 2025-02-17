import { fr } from "@codegouvfr/react-dsfr";
import { declareComponentKeys } from "i18nifty/declareComponentKeys";
import { useTranslation } from "i18n";
import type { APISchemas } from "types/api";
import { PersonalInformations } from "./PersonalInformations";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { PostalAddressInformations } from "./PostalAddressInformations";
import { useToggle } from "react-use";
import { PersonalInformationsForm } from "./PersonalInformationsForm";
import { PostalAddressInformationsForm } from "./PostalAddressInformationsForm";
import { AvatarIcon } from "assets/Avatar";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { type MouseEventHandler } from "react";

type Props = {
  contact: APISchemas["ContactDetailsDto"];
  onSave: () => void;
};

export function MyAccount({ contact, onSave }: Props) {
  const { t } = useTranslation("MyAccount");

  const [editPersonnalInfos, toggleEditPersonnalInfos] = useToggle(false);
  const [editPostalAddressInfos, toggleEditPostalAddressInfos] = useToggle(false);

  const onToggleEditPersonnalInfos: MouseEventHandler = event => {
    event.preventDefault();
    toggleEditPersonnalInfos();
  };

  const onToggleEditPostalAddressInfos: MouseEventHandler = event => {
    event.preventDefault();
    toggleEditPostalAddressInfos();
  };

  const handleSave = () => {
    editPersonnalInfos && toggleEditPostalAddressInfos();
    editPostalAddressInfos && toggleEditPersonnalInfos();
    onSave();
  };

  return (
    <section id="content">
      <Breadcrumb
        className="fr-mb-0"
        currentPageLabel={t("title my account")}
        homeLinkProps={{
          to: "/",
        }}
        segments={[]}
      />

      <div
        className={fr.cx("fr-grid-row", "fr-grid-row--middle", "fr-mt-md-0", "fr-mt-2w")}
        style={{ "flexWrap": "nowrap" }}
      >
        <AvatarIcon />
        <h1>{t("title my account")}</h1>
      </div>
      <section
        className="fr-mb-10v fr-p-3w"
        style={{ border: `1px solid ${fr.colors.decisions.border.default.grey.default}` }}
      >
        {!editPersonnalInfos && (
          <div className="fr-grid-row fr-grid-row--between fr-grid-row--middle fr-mb-2w">
            <h3
              style={{
                color: fr.colors.decisions.text.title.blueFrance.default,
              }}
              className="fr-col fr-mb-1v"
            >
              {t("my personal information")}
            </h3>
            <Button
              type="button"
              className="fr-btn fr-hidden fr-unhidden-sm"
              onClick={onToggleEditPersonnalInfos}
            >
              {t("edit")}
            </Button>
          </div>
        )}
        {editPersonnalInfos ? (
          <PersonalInformationsForm
            contact={contact}
            onClose={toggleEditPersonnalInfos}
            onSave={handleSave}
          />
        ) : (
          <div className="fr-grid-row">
            <PersonalInformations contact={contact} />
            <Button
              type="button"
              className={"fr-col-12 fr-hidden-sm  fr-grid-row--center "}
              onClick={onToggleEditPersonnalInfos}
            >
              {t("edit")}
            </Button>
          </div>
        )}
      </section>
      <section
        className="fr-p-3w"
        style={{ border: `1px solid ${fr.colors.decisions.border.default.grey.default}` }}
      >
        {!editPostalAddressInfos && (
          <div className="fr-grid-row fr-grid-row--between fr-grid-row--middle fr-mb-2w">
            <h3
              style={{
                color: fr.colors.decisions.text.title.blueFrance.default,
              }}
              className="fr-col fr-mb-1v"
            >
              {t("postal address")}
            </h3>
            <Button
              type="button"
              className="fr-btn fr-hidden fr-unhidden-sm"
              onClick={onToggleEditPostalAddressInfos}
            >
              {t("edit")}
            </Button>
          </div>
        )}
        {editPostalAddressInfos ? (
          <PostalAddressInformationsForm
            contact={contact}
            onClose={toggleEditPostalAddressInfos}
            onSave={handleSave}
          />
        ) : (
          <div className="fr-grid-row">
            <PostalAddressInformations contact={contact} />
            <Button
              type="button"
              className={"fr-col-12 fr-hidden-sm  fr-grid-row--center "}
              onClick={onToggleEditPostalAddressInfos}
            >
              {t("edit")}
            </Button>
          </div>
        )}
      </section>
    </section>
  );
}

const { i18n } = declareComponentKeys<
  "title my account" | "my personal information" | "Female" | "Male" | "edit" | "postal address"
>()("MyAccount");

export type I18n = typeof i18n;
