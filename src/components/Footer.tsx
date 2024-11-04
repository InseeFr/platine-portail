import { headerFooterDisplayItem } from "@codegouvfr/react-dsfr/Display";
import { Footer as DSFRFooter } from "@codegouvfr/react-dsfr/Footer";
import logoInsee from "assets/logo-insee.png";
import sspLogo from "assets/logo-ssp.jpg";
import { declareComponentKeys, useTranslation } from "i18n";
import { Follow } from "@codegouvfr/react-dsfr/Follow";
import { useEffect } from "react";

export function Footer({ className }: Readonly<{ className?: string }>) {
  const { t } = useTranslation("Footer");

  // useEffect used for updating HTML contents from third-party library (DSFR)
  useEffect(() => {
    const linksMapping = {
      "www.cnis.fr": "cnis.fr",
      "ec.europa.eu/eurostat/fr": "ec.europa.eu",
    };

    Object.keys(linksMapping).forEach(link => {
      const element = document.querySelector(`a[href="https://${link}"]`);
      if (element) element.innerHTML = linksMapping[link as keyof typeof linksMapping];
    });
  }, []);

  return (
    <>
      <Follow
        className={className}
        social={{
          buttons: [
            {
              linkProps: {
                href: "https://x.com/inseefr",
              },
              type: "twitter-x",
            },
          ],
        }}
      />
      <DSFRFooter
        className={className}
        accessibility="non compliant"
        id="footer"
        operatorLogo={{
          alt: t("operator logo alt"),
          imgUrl: logoInsee,
          orientation: "vertical",
        }}
        termsLinkProps={{
          to: "/mentions-legales",
        }}
        accessibilityLinkProps={{ to: "/accessibilite" }}
        domains={["insee.fr", "www.cnis.fr", "ec.europa.eu/eurostat/fr", "service-public.fr"]}
        bottomItems={[
          {
            text: t("personal data"),
            linkProps: {
              to: "/donnees-personnelles",
            },
          },
          {
            text: t("security"),
            linkProps: {
              to: "/securite",
            },
          },
          {
            text: t("cookies"),
            linkProps: {
              to: "/",
            },
          },
          headerFooterDisplayItem,
        ]}
        partnersLogos={{
          main: {
            alt: t("ssp logo alt"),
            imgUrl: sspLogo,
          },
        }}
      />
    </>
  );
}

const { i18n } = declareComponentKeys<
  "operator logo alt" | "ssp logo alt" | "personal data" | "cookies" | "security"
>()("Footer");

export type I18n = typeof i18n;
