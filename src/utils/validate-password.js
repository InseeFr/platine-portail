import { LONGUEUR_MINIMALE_PASSWORD_POLITIQUE_INSEE } from 'utils/properties';

export default password => {
  if (password === null || password.length < LONGUEUR_MINIMALE_PASSWORD_POLITIQUE_INSEE) {
    return false;
  }

  let compteur = 0;
  compteur += RegExp('^(.*[a-z].*)$').test(password) ? 1 : 0;
  compteur += RegExp('^(.*[A-Z].*)$').test(password) ? 1 : 0;
  compteur += RegExp('^(.*[0-9].*)$').test(password) ? 1 : 0;
  compteur += RegExp('^(.*[^a-zA-Z0-9].*)$').test(password) ? 1 : 0;
  return compteur === 3 || compteur === 4;
};
