import { createReactOidc } from "oidc-spa/react";
import { createMockReactOidc } from "oidc-spa/mock/react";
import { z } from "zod";
import { getIsDark } from "@codegouvfr/react-dsfr/useIsDark";

const decodedIdTokenSchema = z.object({
  inseegroupedefaut: z.string().array(),
  preferred_username: z.string(),
});

const isOidc = import.meta.env.VITE_AUTH_TYPE === "oidc";

export const { OidcProvider, useOidc, getOidc } = isOidc
  ? createReactOidc({
      issuerUri: import.meta.env.VITE_OIDC_ISSUER,
      clientId: import.meta.env.VITE_OIDC_CLIENT_ID,
      homeUrl: import.meta.env.BASE_URL,
      decodedIdTokenSchema: decodedIdTokenSchema,
      autoLogoutParams: {
        redirectTo: "specific url",
        url: `/deconnexion`,
      },
      extraQueryParams: () => ({
        theme: getIsDark() ? "dark" : "light",
      }),
    })
  : createMockReactOidc({
      isUserInitiallyLoggedIn: true,
      homeUrl: import.meta.env.BASE_URL,
      mockedTokens: {
        decodedIdToken: {
          inseegroupedefaut: [],
          preferred_username: "guest",
        } satisfies z.infer<typeof decodedIdTokenSchema>,
      },
    });

export async function enforceLogin(params: { titleShort?: string } = {}): Promise<void | never> {
  const { titleShort } = params;
  const oidc = await getOidc();

  if (!oidc.isUserLoggedIn) {
    await oidc.login({
      doesCurrentHrefRequiresAuth: true,
      extraQueryParams: { label: titleShort ?? "N/A" },
    });
    // Never here
  }
}
