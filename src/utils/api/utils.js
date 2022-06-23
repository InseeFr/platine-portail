import { refreshToken, kc, keycloakAuthentication } from 'utils/keycloak';

const getSecureHeader = token => {
  return token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
};

export const authentication = () => {
  if (kc.authenticated) return refreshToken();
  return keycloakAuthentication({ onLoad: 'login-required', checkLoginIframe: false });
};

export const getHeader = () => {
  return {
    ...getSecureHeader(kc.token),
    Accept: 'application/json;charset=utf-8',
    'Content-Type': 'application/json;charset=utf-8',
  };
};
