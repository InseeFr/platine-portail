import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "components/supportPage/SupportPage";
import { useTranslation } from "i18n";
import { Helmet } from "react-helmet-async";

export type SupportSearch = {
  "mot-de-passe-oublie"?: boolean;
};

export const Route = createFileRoute("/assistance")({
  validateSearch: (search: Record<string, unknown>): SupportSearch => {
    return {
      "mot-de-passe-oublie": (search["mot-de-passe-oublie"] as boolean) || undefined,
    };
  },
  component: Index,
});

function Index() {
  const { t: headerTranslation } = useTranslation("Header");
  const { t } = useTranslation("Support");

  return (
    <div>
      <Helmet>
        <title>{`${t("contact support")} - ${headerTranslation("service tagline")}`} </title>
      </Helmet>
      <SupportPage />
    </div>
  );
}
