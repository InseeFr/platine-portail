import type { Translations } from "../types";
import { Button } from "@codegouvfr/react-dsfr/Button";

export const translations: Translations<"en"> = {
  /* spell-checker: disable */
  Header: {
    "select language": "Select language",
    "home link title": "Home - Response portal for official statistics surveys",
    login: "Log in",
    logout: "Log out",
    "my account": "My account",
    "service tagline": "Response portal for official statistics surveys",
    "operator logo alt": "Insee, measure to understand",
    "page title surveys": "My surveys",
    "contact support": "Contact support",
    "content": "Content",
    "footer": "Footer",
    "my surveys": "My surveys",
  },
  Footer: {
    "operator logo alt": "Homepage",
    "personal data": "Personal data",
    "cookies": "Cookies management",
    "ssp logo alt": "Public statistics",
    "security": "Security",
  },

  SurveyHomepage: {
    "title": "Select your survey",
    "openNewWindow": "open in a new window",
    "sideMenuTitle": "Side menu to access survey information",
    "surveyLink": "See the survey in detail",
    "survey introduction": "Survey introduction",
    "homepage": "Homepage",
    "in this section": "In this section",
    "contact support": "Contact support",
    "FAQ": "Answer your questions",
    "legal framework": "Legal framework",
    "what are your answers for?": "What are your answers for?",
    "documents to the surveyed": "Documents to the surveyed",
    "some results": "Some results",
    "respond to survey": "Respond to the survey",
    "respond to survey detail": "Please bring your username and password to complete the survey.",
  },
  MySurveys: {
    "title my surveys": "Welcome on your dashboard",
    "closed": "Finished",
    "opened": "In progress",
    "unstarted": "Unstarted",
    "search": "Search",
    "surveys": "Surveys",
    "surveys table title": "My surveys",
    "survey name": "Survey name",
    "identifier": "Identifier",
    "actions": "Actions",
    "goToSurvey": "Respond",
    "status": "Status",
    "respond before": "Respond before",
    "on": "on",
    "entities displayed": "entities diplayed",
    "loading surveys": "loading surveys...",
    "identificationCode column": "identifier column",
    "survey name column": "survey name column",
    "status column": "status column",
    "respond before column": "respond before column",
    "actions column": "actions column",
    "sortable column": "sortable column",
    "identifier label": "Identifier:",
    "download deposit proof": "Deposit proof",
    "continue": "Continue",
    "from": "from",
  },
  MyAccount: {
    "title my account": "My account",
    "my personal information": "My personal information",
    "Female": "Female",
    "Male": "Male",
    "edit": "Edit",
    "postal address": "Postal address",
  },
  PersonalInformations: {
    "civility": "Civility:",
    "lastName": "Last name:",
    "firstName": "First name:",
    "email": "Email:",
    "function": "Function:",
    "usual company name": "Usual company name:",
    "phone": "Landline phone:",
    "mobile phone": "Mobile phone:",
  },
  PersonalInformationsForm: {
    "civility": "Civility",
    "lastName": "Last name",
    "firstName": "First name",
    "email": "Email",
    "function": "Function",
    "usual company name": "Usual company name",
    "phone": "Landline phone",
    "mobile phone": "Mobile phone",
    "phone hint text": "Enter the number without periods or spaces.",
    "phone example": "Example: 0102030405",
    "cancel": "Cancel",
    "register": "Register",
  },
  PostalAddressInformations: {
    "country name": "Country name:",
    "street number": "Street number:",
    "repetition index": "Repetition index:",
    "street type": "Street type:",
    "street name": "Street name:",
    "address supplement": "Address supplement:",
    "special distribution": "Special distribution:",
    "zip code": "Zip code:",
    "city name": "City name:",
    "cedex code": "Cedex code(example: 75675):",
    "cedex name": "Cedex name(example: PARIS CEDEX 14):",
  },
  PostalAddressInformationsForm: {
    "country name": "Country name",
    "street number": "Street number",
    "repetition index": "Repetition index",
    "street type": "Street type",
    "street name": "Street name",
    "address supplement": "Address supplement",
    "special distribution": "Special distribution",
    "zip code": "Zip code",
    "city name": "City name",
    "cedex code": "Cedex code",
    "cedex code hint text": "Example: 75675",
    "cedex name": "Cedex name",
    "cedex name hint text": "Example: PARIS CEDEX 14",
    "cancel": "Cancel",
    "register": "Register",
  },
  AutoLogout: {
    "autoLogoutLabel": "Are you still there?",
    logoutTimer: ({ secondLeft }: { secondLeft: number }) => (
      <p>You will be logged out in {secondLeft} sec. </p>
    ),
  },
  Logout: {
    "title": "You have been disconnected.",
    "disconnected": "Disconnected",
    "answer saved":
      "Your answers have been saved, so you can complete your questionnaire at a later date.",
    "send message warning":
      "Don't forget to send in your questionnaire once it has been fully completed.",
    "reconnect": "Reconnect",
  },
  Support: {
    "contact support": "Contact support",
    "support title": "Hello, how can we help you?",
    "FAQ": "Answer your questions",
    "generalQuestions": "General questions",
    "surveyQuestions": "Questions about the survey",
    "FAQ form section": "form to contact us",
    "FAQ form title": "Can't find the answer in the FAQ?",
    "contact us": "Contact us:",
  },
  SupportForm: {
    FaqSupport: ({ surveyId }: { surveyId: string }) => {
      return (
        <p className="fr-text--sm">
          Before submitting a support request, please check if the answer to your question can be found
          in the section
          <Button
            className="fr-pl-1v fr-text--sm"
            style={{ padding: 0, display: "inline", textDecoration: "underline", fontWeight: "400" }}
            priority="tertiary no outline"
            linkProps={{
              to: "/$survey/faq",
              params: {
                survey: surveyId,
              },
            }}
          >
            Answer your questions
          </Button>
        </p>
      );
    },
    "address usage":
      "The address you provide remains strictly confidential. We commit to using your address only for sending messages related to your request.",
    "mandatory fields": "All fields marked with an asterisk (*) are mandatory.",
    "invalidEmail": "Please enter a valid email address",
    "emailRequired": "Please enter an email address",
    "emailConfirmationFailed": "The email addresses do not match",
    "lastName": "Last Name",
    "firstName": "First Name",
    "object": "Subject*",
    "objectPlaceholder": "Select an option",
    "mailObjetRequired": "Please enter a subject",
    "phone": "Phone",
    "email": "Email Address*",
    "confirmEmail": "Confirm Email Address*",
    "idec": "Identifier",
    "idecHintText": "Format: between 7 and 9 characters",
    "message": "Message*",
    "messageRequired": "Please enter a message",
    "messageInfo": "4000 characters remaining",
    "messageSizeIdec": "Please enter an identifier containing 7 to 9 characters",
    "submit": "Submit",
    "affichageQuestionnaire": "Display of the questionnaire",
    "comprehensionQuestionnaire": "Understanding of the questionnaire",
    "autre": "Other",
    "perteIdentifiant": "Lost identifier",
    "perteMotDePasse": "Lost password",
    "successAlert":
      "Your support request has been successfully submitted. You will receive a response by email soon.",
    "contact support": "Contact support",
  },
  Documents: {
    "downloadEMail": "Download the email",
    "downloadEMailDescription": "View the details of an email",
    "downloadInstructions": "Download the instructions",
    "downloadInstructionsDescription": "View the instructions for the questionnaire",
    "downloadQuestioning": "PDF Questionnaire",
    "downloadQuestioningDescription": "View the details of a PDF questionnaire",
    "downloadMail": "Download the mail",
    "downloadMailDescription": "View the details of a letter",
  },
  LegalInformation: {
    "pageTitle": "Legal Notice",
    "servicePresentationTitle": "Service Presentation",
    "servicePresentationText":
      "The online response service is intended for households and businesses surveyed as part of a public statistics survey. These users can complete their questionnaires directly online via the Internet. To access the online response service, the user must log in by providing the access code and password listed on the letter sent to them. The service also provides users with information about the survey and an online assistance system in case of any issues encountered.",
    "legalFrameworkTitle": "Legal Framework of the Survey",
    "legalFrameworkText": "It is available on the promotional portal for this survey.",
    "cookiesTitle": "Cookie Management",
    "cookiesText":
      "This portal does not use any cookies that require user consent. Therefore, you do not need to accept their use before continuing your browsing.",
    "copyrightTitle": "Copyright",
    "copyrightText":
      "Any reproduction of trademarks and logos displayed on this site for purposes other than strictly private is strictly prohibited.",
    "publisherInformationTitle": "Publisher Information",
    "address": "Institut National de la Statistique et des Études Économiques CS 70058",
    "streetInformation": "88 avenue Verdier",
    "cityInformation": "92541 MONTROUGE CEDEX FRANCE",
    "phone": "Phone:",
  },
  NotFound: {
    "title": "Page Not Found",
    "error": "Error 404",
    "notFoundText": "The page you are looking for cannot be found. We apologize for the inconvenience.",
    "verifyUrl": "If you typed the web address into the browser, please check that it is correct.",
    "goHomeInformation":
      "The page may no longer be available. In that case, to continue your visit, you can consult our homepage.",
    "buttonLabel": "Homepage",
  },
  TechnicalError: {
    "title": "Unexpected Error",
    "error": "Error 500",
    "technicalErrorText":
      "Sorry, the service is experiencing an issue. We are working to resolve it as quickly as possible.",
    "reloadPageTips": "Try refreshing the page or try again later.",
    "supportInformation": "If you need immediate assistance, please contact us.",
    "buttonLabel": "Contact Us",
  },
  ErrorPages: {
    "connexion": "Login",
    "alertTitle": "Survey Access Unavailable",
    "contactSupport": "contact support",
    "alertText": "If you believe this is an error, please",
  },
  EmailForm: {
    "connexion": "Log in",
    "contactDetailsInformation":
      "Your contact details, especially your email address, are used exclusively for contact purposes and to facilitate your access to the survey questionnaire.",
    "personalInformations":
      "This personal information comes from administrative files. It is protected by law; its use falls under the public service missions of Insee.",
    "link": "Learn more",
    "openNewWindow": "opens a new window",
    "unknownEmailFormtitle": "Please enter your email address",
    "knownEmailFormtitle": "Please confirm your email address",
    "email": "Email address",
    "confirmEmail": "Confirm your email address",
    "submitUnknownEmailForm": "Validate and access the survey",
    "submitKnownEmailForm": "Confirm and access the survey",
    "pageTitle": "Authentication",
  },
  ForgotPassword: {
    "pageTitleForgotPassword": "Forgot Password",
    "sectionTitle": "Password Recovery",
    "information":
      "To obtain a new password, please enter your identifier that you received by email and/or mail.",
    "idecHintText":
      "Expected format: an identifier comprising 7 to 9 characters, upper-case letters and numbers.",
    "submitButton": "Submit",
    "forgotPasswordHelpTitle": "Password Recovery Help",
    "contactSupport": "contact support.",
    "forgotPasswordHelp": "If you do not have your identifier, please",
    "alertText":
      "If your account exists, a new password will be sent to you by email shortly, or by mail in the coming days. If you encounter any issues, you can",
    "alertTextEEC": "If your account exists, a new password will be sent to you by email shortly.",
    "goBackToConnexion": "Back to Login",
    "modifyIdentifier": "Modify Identifier",
  },
  Accessibility: {
    "pageTitle": "Accessibility",
    "accessibilityText":
      "Insee is committed to making its internet, intranet, extranet sites, and software applications accessible (including mobile applications and digital urban furniture) in accordance with Article 47 of Law No. 2005-102 of February 11, 2005.",
    accessibilityPlan: () => (
      <p>
        To this end, it implements a multi-year plan setting out Insee's digital accessibility policy
        (currently being drafted), as well as an annual action plan.{" "}
        <a
          className="fr-link"
          href="https://www.insee.fr/fr/information/7621795"
          target="_blank"
          title="Insee's multi-year digital accessibility plan 2023-2025 - open link in a new tab"
        >
          https://www.insee.fr/fr/information/7621795
        </a>
      </p>
    ),
    accessibilityStatementLink: () => (
      <p>
        This accessibility statement applies to{" "}
        <a
          className="fr-link"
          href="https://enquetes.stat-publique.fr"
          target="_blank"
          title="enquetes.stat-publique.fr - open link in a new tab"
        >
          https://enquetes.stat-publique.fr
        </a>
        {""}.
      </p>
    ),

    "complianceStatusTitle": "Compliance Status",
    "complianceStatusText":
      "The online response site service of public statistics surveys is non-compliant with the general accessibility improvement framework (RGAA), version 4, due to a pending compliance audit.",

    "testResultsTitle": "Test Results",
    "testResultsText":
      "This statement will be updated as soon as the results of the compliance audit are known.",

    "nonAccessibleContentTitle": "Non-Accessible Content",
    "nonAccessibleContentText": "Not applicable.",

    "exemptionsTitle": "Disproportionate Burden Exemptions",
    "exemptionsText": "Not applicable.",

    "nonApplicableContentTitle": "Content Not Subject to Accessibility Obligation",
    "nonApplicableContentText": "Not applicable.",

    "statementEstablishmentTitle": "Establishment of This Accessibility Statement",
    "statementEstablishmentText": "This declaration was issued on January 07, 2025",

    "technologiesUsedTitle": "Technologies Used for the Site",
    "technology1": "HTML5",
    "technology2": "CSS",
    "technology3": "Javascript",
    "technology4": "React",

    "testEnvironmentTitle": "Test Environment",
    "testEnvironmentText": "Not applicable.",

    "accessibilityEvaluationToolsTitle": "Accessibility Evaluation Tools",
    "accessibilityEvaluationToolsText": "Not applicable.",

    "verifiedPagesTitle": "Pages Verified for Compliance",
    "verifiedPagesText": "Not applicable.",

    "feedbackAndContactTitle": "Feedback and Contact",
    "feedbackAndContactText":
      "If you are unable to access content or a service, you may contact support for assistance in finding an accessible alternative or obtaining the content in another format.",

    "appealOptionsTitle": "Appeal Options",
    "appealOptionsText":
      "If you find an accessibility barrier preventing you from accessing content or functionality on the site, report it to us, and if you do not receive a response, you are entitled to file a complaint or a request for referral to the Defender of Rights.",
    "appealOptionsStep1": "Write a message to the Defender of Rights (via the contact form).",
    "appealOptionsStep2": "Contact the local delegate of the Defender of Rights in your area.",
    "appealOptionsStep3":
      "Send a letter by post (free, no stamp required) to: Defender of Rights, Libre réponse 71120, 75342 Paris CEDEX 07.",
    "appealOptionsStep4": "Contact the Defender of Rights by phone: 09 69 39 00 00.",
  },
  Security: {
    "pageTitle": "Security",
    securityText: () => (
      <p>
        The site{" "}
        <a
          className="fr-link"
          href="https://enquetes.stat-publique.fr"
          target="_blank"
          title="enquetes.stat-publique.fr - open link in a new tab"
        >
          https://enquetes.stat-publique.fr
        </a>{" "}
        has been granted an approval decision issued by the accreditation authority on behalf of the
        qualified information system security authority.
      </p>
    ),
  },
  PersonalData: {
    "pageTitle": "Personal Data",
    personalDataText: () => (
      <p>
        Insee undertakes to ensure that the processing of{" "}
        <a
          className="fr-link"
          href="https://www.insee.fr/fr/information/3719162"
          target="_blank"
          title="Personal Data - open a new window"
        >
          Personal Data
        </a>{" "}
        for statistical purposes comply with the requirements of the{" "}
        <a
          className="fr-link"
          href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679"
          target="_blank"
          title="General Data Protection Regulation - open a new window"
        >
          General Data Protection Regulation (GDPR)
        </a>{" "}
        and{" "}
        <a
          className="fr-link"
          href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000886460"
          target="_blank"
          title="French Data Protection Act - open a new window"
        >
          French Data Protection Act
        </a>
        {""}.
      </p>
    ),
  },
  Chatbot: {
    "title": "Surveys portal",
  },
  /* spell-checker: enable */
};
