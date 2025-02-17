import { createReactOidc } from "oidc-spa/react";
import { createMockReactOidc } from "oidc-spa/mock/react";
import {
  VITE_APP_URL,
  VITE_AUTH_TYPE,
  VITE_OIDC_CLIENT_ID,
  VITE_OIDC_ISSUER,
} from "resources/configuration";

type TokenInfo = {
  inseegroupedefaut: string[];
  preferred_username: string;
};

const guestUser: TokenInfo = {
  inseegroupedefaut: [],
  preferred_username: "guest",
};

const isOidc = VITE_AUTH_TYPE === "oidc";

export const createAppOidc = () => {
  if (isOidc) {
    return createReactOidc<TokenInfo>({
      issuerUri: VITE_OIDC_ISSUER,
      clientId: VITE_OIDC_CLIENT_ID,
      publicUrl: "/",
      autoLogoutParams: {
        redirectTo: "specific url",
        url: `${VITE_APP_URL}/deconnexion`,
      },
    });
  }

  return createMockReactOidc<TokenInfo>({
    isUserInitiallyLoggedIn: true,
    mockedTokens: {
      decodedIdToken: guestUser,
      accessToken: "accessToken",
    },
  });
};
