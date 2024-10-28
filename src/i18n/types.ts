import type { GenericTranslations } from "i18nifty";

//List the languages with support
export const languages = ["en", "fr"] as const;

//If the user's browser language doesn't match any
//of the languages above specify the language to fallback to:
export const fallbackLanguage = "en";

export type Language = (typeof languages)[number];

export type ComponentKey =
  | import("components/Header").I18n
  | import("components/Footer").I18n
  | import("components/surveyHomepage/SurveyHomepage").I18n
  | import("components/myAccount/MyAccount").I18n
  | import("components/mySurveys/MySurveys").I18n
  | import("components/myAccount/PersonalInformationsForm").I18n
  | import("components/myAccount/PostalAddressInformationsForm").I18n
  | import("components/AutoLogoutCountdown").I18n
  | import("components/Logout").I18n
  | import("components/myAccount/PersonalInformations").I18n
  | import("components/myAccount/PostalAddressInformations").I18n
  | import("components/surveyHomepage/Faq").I18n
  | import("../routes/$survey/documents").I18n
  | import("components/surveyHomepage/SupportForm").I18n
  | import("components/LegalInformation").I18n
  | import("components/errorPages/NotFound").I18n
  | import("components/errorPages/TechnicalError").I18n
  | import("components/errorPages/ErrorPages").I18n
  | import("components/EmailForm").I18n
  | import("components/Accessibility").I18n;

export type Translations<L extends Language> = GenericTranslations<
  ComponentKey,
  Language,
  typeof fallbackLanguage,
  L
>;
