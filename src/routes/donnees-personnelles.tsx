import { createFileRoute } from "@tanstack/react-router";
import { PersonalData } from "components/PersonalData";
import { useTranslation } from "i18n";
import { Helmet } from "react-helmet-async";

export const Route = createFileRoute("/donnees-personnelles")({
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
      <PersonalData />
    </div>
  );
}
