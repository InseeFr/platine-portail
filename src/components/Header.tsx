import { fr } from "@codegouvfr/react-dsfr";
import { Header as DsfrHeader } from "@codegouvfr/react-dsfr/Header";
import logoInsee from "assets/logo-insee.png";
import { useIsAuthenticated, useLogout } from "hooks/useAuth";
import { declareComponentKeys, useTranslation } from "i18n";
import { VITE_APP_URL } from "resources/configuration";
import { tss } from "tss-react/dsfr";

export function Header() {
  const { t } = useTranslation("Header");
  const { isAuthenticated } = useIsAuthenticated();
  const { classes } = useStyles();
  const logout = useLogout();

  return (
    <DsfrHeader
      className={classes.logoContainer}
      brandTop={
        <>
          République
          <br />
          Française
        </>
      }
      id="header"
      homeLinkProps={{
        to: isAuthenticated ? "/mes-enquetes" : "/",
        title: t("home link title"),
      }}
      quickAccessItems={
        isAuthenticated && logout
          ? [
              {
                iconId: "fr-icon-customer-service-fill",
                linkProps: {
                  to: "/",
                },
                text: t("contact support"),
              },
              {
                iconId: "fr-icon-account-circle-fill",
                linkProps: {
                  to: "/mon-compte",
                },
                text: t("my account"),
              },
              {
                iconId: "fr-icon-logout-box-r-line",
                buttonProps: {
                  className: fr.cx("fr-btn--tertiary", "fr-nav"),
                  onClick: () =>
                    logout({
                      redirectTo: "specific url",
                      url: `${VITE_APP_URL}/deconnexion`,
                    }),
                },
                text: t("logout"),
              },
            ]
          : [
              {
                iconId: "fr-icon-customer-service-fill",
                linkProps: {
                  to: "/",
                },
                text: t("contact support"),
              },

              {
                iconId: "fr-icon-account-circle-fill",
                linkProps: {
                  className: fr.cx("fr-btn--tertiary", "fr-nav"),
                  to: "/mes-enquetes",
                },
                text: t("login"),
              },
            ]
      }
      serviceTitle={t("service tagline")}
      operatorLogo={{
        alt: t("operator logo alt"),
        imgUrl: logoInsee,
        orientation: "vertical",
      }}
    />
  );
}

const { i18n } = declareComponentKeys<
  | "select language"
  | "home link title"
  | "login"
  | "logout"
  | "my account"
  | "service tagline"
  | "operator logo alt"
  | "page title surveys"
  | "contact support"
  | "content"
  | "footer"
  | "my surveys"
>()("Header");

export type I18n = typeof i18n;

const useStyles = tss.withName({ Header }).create({
  logoContainer: {
    ".fr-header__brand-top": { overflow: "inherit" },
  },
});
