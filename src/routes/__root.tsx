import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { QueryClient } from "@tanstack/react-query";
import { AutoLogoutCountdown } from "components/AutoLogoutCountdown";
import { SkipLinks } from "@codegouvfr/react-dsfr/SkipLinks";
import { useTranslation } from "i18n";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: () => <>The route is not defined</>,
});

function RootComponent() {
  const { t } = useTranslation("Header");

  return (
    <div>
      <SkipLinks
        links={[
          {
            anchor: "#contenu",
            label: t("content"),
          },
          {
            anchor: "#header",
            label: t("header"),
          },
          {
            anchor: "#footer",
            label: t("footer"),
          },
        ]}
      />
      <Header />
      <main>
        <Outlet />
      </main>
      <AutoLogoutCountdown />
      <Footer />
    </div>
  );
}
