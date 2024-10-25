import { createFileRoute } from "@tanstack/react-router";
import { Accessibility } from "components/Accessibility";
import { useTranslation } from "i18n";
import { Helmet } from "react-helmet-async";

export const Route = createFileRoute("/accessibilite")({
  component: Index,
});

function Index() {
  const { t: headerTranslation } = useTranslation("Header");
  const { t } = useTranslation("Accessibility");

  return (
    <div>
      <Helmet>
        <title>{`${t("pageTitle")} - ${headerTranslation("service tagline")}`} </title>
      </Helmet>
      <Accessibility />
    </div>
  );
}
