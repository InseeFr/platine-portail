import { createFileRoute } from "@tanstack/react-router";
import { Security } from "components/Security";
import { useTranslation } from "i18n";
import { Helmet } from "react-helmet-async";

export const Route = createFileRoute("/securite")({
  component: Index,
});

function Index() {
  const { t: headerTranslation } = useTranslation("Header");
  const { t } = useTranslation("Security");

  return (
    <div>
      <Helmet>
        <title>{`${t("pageTitle")} - ${headerTranslation("service tagline")}`} </title>
      </Helmet>
      <Security />
    </div>
  );
}
