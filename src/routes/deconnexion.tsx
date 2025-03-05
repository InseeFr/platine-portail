import { Navigate, createFileRoute } from "@tanstack/react-router";

import { Logout } from "components/Logout";
import { useTranslation } from "i18n";
import { useOidc } from "oidc";
import { Helmet } from "react-helmet-async";

export const Route = createFileRoute("/deconnexion")({
  component: LogoutIndex,
});

function LogoutIndex() {
  const { isUserLoggedIn } = useOidc();
  const { t } = useTranslation("Logout");
  const { t: headerTranslation } = useTranslation("Header");

  if (isUserLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Helmet>
        <title>{`${t("disconnected")} - ${headerTranslation("service tagline")}`}</title>
      </Helmet>
      <Logout />
    </div>
  );
}
