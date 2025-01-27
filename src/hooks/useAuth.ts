import { createAppOidc } from "../functions/oidc.ts";
import { getIsDark } from "@codegouvfr/react-dsfr/useIsDark";

export const { OidcProvider, prOidc, useOidc } = createAppOidc();

export const useHasRole = (role: string): boolean => {
  const { oidcTokens } = useOidc({ assertUserLoggedIn: true });
  return oidcTokens.decodedIdToken.inseegroupedefaut.includes(role);
};

export const useAccessToken = (): string | null => {
  return useOidc({ assertUserLoggedIn: false }).oidcTokens?.accessToken ?? null;
};

export const useUser = () => {
  return useOidc({ assertUserLoggedIn: true }).oidcTokens.decodedIdToken;
};

export const useLogout = () => {
  return useOidc({ assertUserLoggedIn: false }).logout;
};

export function useIsAuthenticated() {
  const { isUserLoggedIn, oidcTokens } = useOidc({ assertUserLoggedIn: false });

  return { isAuthenticated: isUserLoggedIn, tokens: oidcTokens };
}

export const AuthProvider = OidcProvider;

export const protectedLoader = async (params: { titleShort?: string }) => {
  const { titleShort } = params;
  const oidc = await prOidc;

  if (oidc.isUserLoggedIn) {
    return null;
  }

  const theme = getIsDark() ? "dark" : "light";

  await oidc.login({
    doesCurrentHrefRequiresAuth: true,
    extraQueryParams: { label: titleShort ?? "N/A", theme },
  });
};
