export const MailObjectEnum = [
  "perteIdentifiant",
  "perteMotDePasse",
  "autre",
  "affichageQuestionnaire",
  "comprehensionQuestionnaire",
] as const;

export type MailObjectType = (typeof MailObjectEnum)[number];
