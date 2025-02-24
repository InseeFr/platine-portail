import { declareComponentKeys, useTranslation } from "i18n";
import Button from "@codegouvfr/react-dsfr/Button";
import { Schema, z } from "zod";
import { type UseFormRegister } from "react-hook-form";
import { useIsAuthenticated } from "hooks/useAuth";
import { useEffect, useRef } from "react";
import { SupportFormPart } from "components/commons/SupportFormPart";
import { MailObjectEnum } from "types/mailObjectEnum";
import { DSFRHide } from "components/commons/DSFRHide";
import { fr } from "@codegouvfr/react-dsfr";

type Props = {
  surveyId: string;
  isSuccess: boolean;
  errors: any;
  register: UseFormRegister<z.TypeOf<Schema>>;
  onSubmit: () => void;
};

export const SupportForm = ({ surveyId, isSuccess, errors, register, onSubmit }: Props) => {
  const { t } = useTranslation("SupportForm");
  const { isAuthenticated } = useIsAuthenticated();

  const containerRef = useRef<HTMLDivElement>(null);
  const objectOptions = isAuthenticated
    ? MailObjectEnum.filter(val =>
        ["affichageQuestionnaire", "comprehensionQuestionnaire", "autre"].includes(val),
      )
    : MailObjectEnum.filter(val => ["perteIdentifiant", "perteMotDePasse", "autre"].includes(val));

  useEffect(() => {
    containerRef.current?.scrollIntoView({
      block: "start",
    });
  }, [isSuccess]);

  if (isSuccess) {
    return (
      <div ref={containerRef}>
        <h3>{t("contact support")}</h3>
        <div className={fr.cx("fr-alert", "fr-alert--success", "fr-mb-5w", "fr-mb-md-0")}>
          <p>{t("successAlert")}</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef}>
      <h3>{t("contact support")}</h3>
      <div className={fr.cx("fr-mb-5w", "fr-mb-md-0")}>
        {t("FaqSupport", { surveyId })}
        <p className={fr.cx("fr-text--sm")}>{t("address usage")}</p>
        <p className={fr.cx("fr-text--sm")}>{t("mandatory fields")}</p>
        <form action="#" onSubmit={onSubmit}>
          <SupportFormPart errors={errors} register={register} objectOptions={objectOptions} />

          <DSFRHide hidden unhidden unhiddenScreenSize="md">
            <Button type="submit">{t("submit")}</Button>
          </DSFRHide>
          <DSFRHide hidden unhidden hiddenScreenSize="md">
            <Button className={fr.cx("fr-grid-row--center")} style={{ width: "100%" }} type="submit">
              {t("submit")}
            </Button>
          </DSFRHide>
        </form>
      </div>
    </div>
  );
};

const { i18n } = declareComponentKeys<
  | "address usage"
  | "mandatory fields"
  | "phone"
  | "idec"
  | "idecHintText"
  | "lastName"
  | "firstName"
  | "object"
  | "objectPlaceholder"
  | "mailObjetRequired"
  | "email"
  | "confirmEmail"
  | "message"
  | "messageRequired"
  | "messageInfo"
  | "messageSizeIdec"
  | "emailRequired"
  | "emailConfirmationFailed"
  | "invalidEmail"
  | "submit"
  | "affichageQuestionnaire"
  | "comprehensionQuestionnaire"
  | "autre"
  | "perteIdentifiant"
  | "perteMotDePasse"
  | "successAlert"
  | "surveyRequired"
  | "contact support"
  | { K: "FaqSupport"; P: { surveyId: string }; R: JSX.Element }
>()("SupportForm");

export type I18n = typeof i18n;
