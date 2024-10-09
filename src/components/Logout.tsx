import { declareComponentKeys, useTranslation } from "i18n/i18n";
import Button from "@codegouvfr/react-dsfr/Button";
import { fr } from "@codegouvfr/react-dsfr";
import { PadlockIcon } from "assets/Padlock";
import { useOidc } from "hooks/useAuth";

export const Logout = () => {
  const { t } = useTranslation("Logout");
  const { login } = useOidc();

  const onClick = () => {
    if (login) {
      login({ doesCurrentHrefRequiresAuth: false });
    }
  };

  return (
    <section>
      <div
        className={fr.cx(
          "fr-grid-row",
          "fr-grid-row--center",
          "fr-grid-row--middle",
          "fr-col-12",
          "fr-px-2w",
          "fr-py-6w",
        )}
      >
        <div className={fr.cx("fr-col-md-8")}>
          <h1>{t("title")}</h1>

          <p className={fr.cx("fr-text--lead")}>{t("answer saved")}</p>
          <p className={fr.cx("fr-text--lead", "fr-text--bold")}>{t("send message warning")}</p>
          <Button onClick={onClick}>{t("reconnect")}</Button>
        </div>
        <div className={fr.cx("fr-col-3", "fr-hidden", "fr-unhidden-lg", "fr-col-offset-1")}>
          <PadlockIcon />
        </div>
      </div>
    </section>
  );
};

const { i18n } = declareComponentKeys<
  "title" | "disconnected" | "answer saved" | "send message warning" | "reconnect"
>()("Logout");

export type I18n = typeof i18n;
