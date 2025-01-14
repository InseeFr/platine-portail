import {
  createRootRouteWithContext,
  Outlet,
  ScrollRestoration,
  useRouter,
} from "@tanstack/react-router";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { AutoLogoutCountdown } from "components/AutoLogoutCountdown";
import { SkipLinks } from "@codegouvfr/react-dsfr/SkipLinks";
import { useTranslation } from "i18n";
import { NotFound } from "components/errorPages/NotFound";
import { useEffect, useRef } from "react";
import type { GenericData, SurveyData } from "types/ContentSurvey";
import type { QueryClient } from "@tanstack/react-query";

type RouterContext = {
  queryClient: QueryClient;
  getTitleShort: (params: { surveyId: string }) => string | undefined;
  getSpecificData: () => SurveyData[];
  getSurveyData: (params: { surveyId: string }) => SurveyData | undefined;
  getGenericData: () => GenericData;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  const { t } = useTranslation("Header");

  const router = useRouter();

  const currentPath = router.history.location.pathname;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, [currentPath]);

  return (
    <div ref={ref} tabIndex={-1}>
      <SkipLinks
        links={[
          {
            anchor: "#content",
            label: t("content"),
          },
          {
            anchor: "#footer",
            label: t("footer"),
          },
        ]}
      />
      <Header />
      <main>
        <ScrollRestoration />
        <Outlet />
      </main>
      <AutoLogoutCountdown />
      <Footer />
    </div>
  );
}
