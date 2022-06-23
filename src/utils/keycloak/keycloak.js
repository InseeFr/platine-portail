import Keycloak from 'keycloak-js';

export const kc = Keycloak(`${window.location.origin}/keycloak.json`);

export const getRolesFromKc = () =>
  (kc && kc.tokenParsed && kc.tokenParsed.realm_access && kc.tokenParsed.realm_access.roles) || [];

export const keycloakAuthentication = params =>
  new Promise((resolve, reject) => {
    kc.init(params)
      .then(authenticated => {
        resolve(authenticated);
      })
      .catch(e => reject(e));
  });

export const refreshToken = (minValidity = 5) =>
  new Promise((resolve, reject) => {
    kc.updateToken(minValidity)
      .then(() => resolve())
      .catch(error => reject(error));
  });
