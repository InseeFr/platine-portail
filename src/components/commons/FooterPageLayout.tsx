import Breadcrumb from "@codegouvfr/react-dsfr/Breadcrumb";
import { ComponentKey } from "i18n/types";
import { TranslationFunction } from "i18nifty/typeUtils/TranslationFunction";

export function FooterPageLayout({
  children,
  t,
}: Readonly<{
  children: React.ReactNode;
  t: TranslationFunction<string, ComponentKey>;
}>) {
  return (
    <section id="content" className="fr-container">
      <Breadcrumb
        currentPageLabel={t("pageTitle")}
        className="fr-mb-1w"
        homeLinkProps={{
          to: "/",
        }}
        segments={[]}
      />
      <h2>{t("pageTitle")}</h2>
      {children}
    </section>
  );
}
