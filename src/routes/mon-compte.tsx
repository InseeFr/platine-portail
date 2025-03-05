import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";
import { MyAccount } from "components/myAccount/MyAccount";
import { getGetContactQueryOptions } from "gen/pilotage/1-contacts";
import { useTranslation } from "i18n";
import { getOidc } from "oidc";
import { Helmet } from "react-helmet-async";

const route = createFileRoute("/mon-compte")({
  component: MyAccountIndex,
  loader: async ({ context: { queryClient }, abortController }) => {
    const oidc = await getOidc();

    if (!oidc.isUserLoggedIn) {
      await oidc.login({
        doesCurrentHrefRequiresAuth: true,
        extraQueryParams: { label: "Mon compte" },
      });
      //Never there
      return;
    }
    //very strange to use a things inside token as id....
    const contactPr = queryClient.ensureQueryData(
      getGetContactQueryOptions(oidc.getDecodedIdToken().preferred_username.toUpperCase(), {
        request: { signal: abortController.signal },
      }),
    );

    return contactPr;
  },
});

function MyAccountIndex() {
  const { t } = useTranslation("Header");

  const contact = route.useLoaderData();

  if (!contact) {
    return;
  }

  return (
    <div className={fr.cx("fr-container")}>
      <Helmet>
        <title>{`${t("my account")} - ${t("service tagline")}`}</title>
      </Helmet>
      <MyAccount contact={contact} onSave={() => {}} />
    </div>
  );
}
