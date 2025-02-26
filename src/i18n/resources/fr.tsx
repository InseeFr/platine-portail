import type { Translations } from "../types";
import { Button } from "@codegouvfr/react-dsfr/Button";

export const translations: Translations<"fr"> = {
  /* spell-checker: disable */
  Header: {
    "select language": "Sélectionner la langue",
    "home link title": "Accueil - Portail de réponse aux enquêtes de la statistique publique",
    login: "Se connecter",
    logout: "Me déconnecter",
    "my account": "Mon compte",
    "service tagline": "Portail de réponse aux enquêtes de la statistique publique",
    "operator logo alt": "Insee, mesurer pour comprendre",
    "page title surveys": "Mes enquêtes",
    "contact support": "Contacter l'assistance",
    "need help": "Besoin d'aide ?",
    "content": "Contenu",
    "footer": "Pied de page",
    "my surveys": "Mes enquêtes",
  },
  Footer: {
    "operator logo alt": "Accueil",
    "personal data": "Données personnelles",
    "cookies": "Gestion des cookies",
    "ssp logo alt": "Statistique publique",
    "security": "Securité",
  },
  SurveyHomepage: {
    "title": "Bienvenue sur votre tableau de bord",
    "sideMenuTitle": "Menu latéral pour accéder aux informations de l'enquêtes",
    "surveyLink": "Voir l'enquête en détail",
    "openNewWindow": "ouvre une nouvelle fenêtre",
    "survey introduction": "Introduction à l'enquête",
    "homepage": "Accueil",
    "in this section": "Dans cette rubrique",
    "contact support": "Contacter l'assistance",
    "FAQ": "Réponses à vos questions",
    "legal framework": "Cadre juridique",
    "what are your answers for?": "À quoi servent vos réponses ?",
    "documents to the surveyed": "Documents aux enquêtés",
    "some results": "Quelques résultats",
    "respond to survey": "Répondre à l'enquête",
    "respond to survey detail":
      "Munissez vous de votre identifiant et de votre mot de passe pour répondre à l’enquête.",
    "about surveys":
      "Retrouvez l’ensemble des enquêtes auxquelles vous avez répondu ou vous êtes invités à répondre.",
    "questionnaire count done": "Nombre de questionnaires : ",
    "questionnaire count doing": "Nombre de questionnaires en cours:",
  },
  MySurveys: {
    "title my surveys": "Bienvenue sur votre tableau de bord",
    "closed": "Terminé",
    "opened": "En cours",
    "unstarted": "Non commencée",
    "search": "Rechercher",
    "surveys": "Enquêtes",
    "surveys table title": "Mes enquêtes",
    "survey name": "Nom de l'enquête",
    "identifier": "Identifiant",
    "actions": "Actions",
    "goToSurvey": "Répondre",
    "status": "Statut",
    "respond before": "Répondre avant le",
    "on": "sur",
    "entities displayed": "entités affichées",
    "loading surveys": "chargement des enquêtes...",
    "identificationCode column": "colonne identifiant",
    "survey name column": "colonne nom de l'enquête",
    "status column": "colonne statut",
    "respond before column": "colonne répondre avant le...",
    "actions column": "colonne d'actions",
    "sortable column": "colonne triable",
    "identifier label": "Identifiant :",
    "download deposit proof": "Preuve de dépot",
    "continue": "Continuer",
    "from": "à partir du",
  },
  MyAccount: {
    "title my account": "Mon compte",
    "my personal information": "Mes informations personnelles",
    "Female": "Madame",
    "Male": "Monsieur",
    "edit": "Modifier",
    "postal address": "Mes coordonnées postales",
  },
  PersonalInformations: {
    "civility": "Civilité :",
    "lastName": "Nom :",
    "firstName": "Prénom :",
    "email": "Adresse mail :",
    "function": "Fonction :",
    "usual company name": "Entreprise :",
    "phone": "Téléphone fixe :",
    "mobile phone": "Téléphone portable :",
  },
  PersonalInformationsForm: {
    "civility": "Civilité",
    "lastName": "Nom",
    "firstName": "Prénom",
    "email": "Adresse mail",
    "function": "Fonction",
    "usual company name": "Entreprise",
    "phone": "Téléphone fixe",
    "mobile phone": "Téléphone portable",
    "phone hint text": "Saisissez le numéro sans point ni espace.",
    "phone example": "Exemple : 0102030405",
    "cancel": "Annuler",
    "register": "Enregistrer",
  },
  PostalAddressInformations: {
    "country name": "Pays :",
    "street number": "Numéro de voie :",
    "repetition index": "Indice de répétition :",
    "street type": "Type de voie :",
    "street name": "Libellé de voie :",
    "address supplement": "Complément(ZI, Bat, Res, ...) :",
    "special distribution": "Mention spéciale :",
    "zip code": "Code postal :",
    "city name": "Libellé commune :",
    "cedex code": "Code cedex(exemple: 75675) :",
    "cedex name": "Bureau distributeur(exemple: PARIS CEDEX 14) :",
  },
  PostalAddressInformationsForm: {
    "country name": "Pays",
    "street number": "Numéro de voie",
    "repetition index": "Indice de répétition",
    "street type": "Type de voie",
    "street name": "Libellé de voie",
    "address supplement": "Complément(ZI, Bat, Res, ...)",
    "special distribution": "Mention spéciale",
    "zip code": "Code postal",
    "city name": "Libellé commune",
    "cedex code": "Code cedex",
    "cedex code hint text": "Exemple: 75675",
    "cedex name": "Bureau distributeur",
    "cedex name hint text": "Exemple: PARIS CEDEX 14",
    "cancel": "Annuler",
    "register": "Enregistrer",
  },
  AutoLogout: {
    "autoLogoutLabel": "Êtes-vous toujours là ?",
    logoutTimer: ({ secondLeft }: { secondLeft: number }) => (
      <p>Vous allez être déconnecté dans {secondLeft} sec. </p>
    ),
  },
  Logout: {
    "title": "Vous avez été déconnecté.",
    "disconnected": "Déconnexion",
    "logout text": "Veuillez vous reconnecter pour accéder à vos enquêtes.",
    "reconnect": "Se reconnecter",
  },
  Support: {
    "contact support": "Contacter l'assistance",
    "support title": "Bonjour, comment pouvons-nous vous aider ?",
    "FAQ": "Réponses à vos questions",
    "generalQuestions": "Questions générales",
    "surveyQuestions": "Questions relatives à l'enquête",
    "FAQ form section": "formulaire pour nous contacter",
    "FAQ form title": "Vous ne trouvez pas la réponse dans la FAQ ? ",
    "contact us": "Contactez-nous !",
    "survey": "Nom de l'enquête*",
  },
  SupportForm: {
    FaqSupport: ({ surveyId }: { surveyId: string }) => {
      return (
        <p className="fr-text--sm">
          Avant de faire une demande d'assistance, pensez à regarder si la réponse à votre question
          figure dans la rubrique
          <Button
            className="fr-pl-1v fr-text--sm"
            style={{ padding: 0, display: "inline", textDecoration: "underline", fontWeight: "400" }}
            priority="tertiary no outline"
            linkProps={{
              to: "/mes-enquetes/$survey/faq",
              params: {
                survey: surveyId,
              },
            }}
          >
            Réponses à vos questions
          </Button>
        </p>
      );
    },
    "address usage":
      "L'adresse que vous nous communiquez reste strictement confidentielle. Nous nous engageons à utiliser votre adresse uniquement  pour envoyer des messages relatifs à votre demande.",
    "mandatory fields": "Tous les champs suivis d’un astérisque (*) sont obligatoires.",
    "invalidEmail": "Veuillez renseigner une adresse de messagerie valide",
    "emailRequired": "Veuillez renseigner une adresse de messagerie",
    "emailConfirmationFailed": "Les adresses de messagerie ne correspondent pas",
    "lastName": "Nom",
    "firstName": "Prénom",
    "object": "Objet*",
    "objectPlaceholder": "Sélectionner une option",
    "mailObjetRequired": "Veuillez renseigner un objet",
    "phone": "Téléphone",
    "email": "Adresse de messagerie*",
    "confirmEmail": "Confirmation de l’adresse de messagerie*",
    "idec": "Identifiant",
    "idecHintText": "Format : entre 7 et 9 caractères",
    "message": "Message*",
    "messageRequired": "Veuillez renseigner un message",
    "surveyRequired": "Veuillez renseigner une enquête",
    "messageSizeIdec": "Veuillez renseigner un identifiant comprenant 7 à 9 caractères",
    "messageInfo": "4000 caractères restants",
    "submit": "Envoyer",
    "affichageQuestionnaire": "Affichage du questionnaire",
    "comprehensionQuestionnaire": "Compréhension du questionnaire",
    "autre": "Autre",
    "perteIdentifiant": "Perte d'identifiant",
    "perteMotDePasse": "Perte de mot de passe",
    "successAlert":
      "Votre demande d'assistance a bien été prise en compte. Vous recevrez une réponse par mail prochainement.",
    "contact support": "Contacter l'assistance",
  },
  Documents: {
    "downloadEMail": "Télécharger le mail",
    "downloadEMailDescription": "Voir le détail d’un mail",
    "downloadInstructions": "Télécharger la notice",
    "downloadInstructionsDescription": "Voir la notice pour le questionnaire",
    "downloadQuestioning": "Questionnaire PDF",
    "downloadQuestioningDescription": "Voir le détail d’un questionnaire PDF",
    "downloadMail": "Télécharger le courrier",
    "downloadMailDescription": "Voir le détail d’un courrier",
  },
  LegalInformation: {
    "pageTitle": "Mentions légales",
    "servicePresentationTitle": "Présentation du service",
    "servicePresentationText":
      "Le service d'accès au site de réponse en ligne est destiné aux ménages et entreprises qui sont interrogées dans le cadre d'une enquête de la statistique publique. Ces usagers peuvent saisir leurs questionnaires directement en ligne par Internet. Pour accéder au service de réponse en ligne, l'utilisateur doit s'identifier en fournissant son code d'accès et son mot de passe figurant sur le courrier qui lui a été adressé. L'utilisateur du service dispose également d'informations concernant l'enquête et d'un systéme d'assistance en ligne en cas de difficulté rencontrée.",
    "legalFrameworkTitle": "Cadre juridique de l'enquête",
    "legalFrameworkText": "Il figure sur le portail de promotion de cette enquête.",
    "cookiesTitle": "Gestion des cookies",
    "cookiesText":
      "Ce portail n’utilise aucun cookie nécessitant un consentement des usagers. C’est pourquoi vous n’avez pas à accepter leur utilisation avant de poursuivre votre navigation.",
    "copyrightTitle": "Copyright",
    "copyrightText":
      "Toute reproduction pour un usage autre que strictement privé des marques et logos affichés sur le présent site est rigoureusement interdite.",
    "publisherInformationTitle": "Informations éditeurs",
    "address": "Institut National de la Statistique et des Études Économiques CS 70058",
    "streetInformation": "88 avenue Verdier",
    "cityInformation": "92541 MONTROUGE CEDEX FRANCE",
    "phone": "Tél. :",
  },
  NotFound: {
    "title": "Page non trouvée",
    "error": "Erreur 404",
    "notFoundText": "La page que vous cherchez est introuvable. Excusez-nous pour la gêne occasionnée.",
    "verifyUrl": "Si vous avez tapé l'adresse web dans le navigateur, vérifiez qu'elle est correcte.",
    "goHomeInformation":
      "La page n'est peut-être plus disponible. Dans ce cas, pour continuer votre visite vous pouvez consulter notre page d'accueil.",
    "buttonLabel": "Page d'accueil",
  },
  TechnicalError: {
    "title": "Erreur inattendue",
    "error": "Erreur 500",
    "technicalErrorText":
      "Désolé, le service rencontre un problème, nous travaillons pour le résoudre le plus rapidement possible.",
    "reloadPageTips": "Essayez de rafraîchir la page ou bien ressayez plus tard.",
    "supportInformation": "Si vous avez besoin d’une aide immédiate, merci de nous contacter.",
    "buttonLabel": "Contactez-nous",
  },
  ErrorPages: {
    "connexion": "Connexion",
    "alertTitle": "Accès à l'enquête impossible",
    "contactSupport": "contacter l'assistance",
    "alertText": " Si vous pensez qu'il s'agit d'une erreur, veuillez",
  },
  EmailForm: {
    "connexion": "Connexion",
    "contactDetailsInformation":
      "Vos coordonnées, en particulier votre adresse de messagerie (mail), sont  exclusivement utilisées à des fins de contact et pour vous faciliter  l’accès au questionnaire de l’enquête. ",
    "personalInformations":
      "Ces informations personnelles sont issues des fichiers administratifs. Elles sont  protégées par la loi ; leur utilisation relève de l’exercice des  missions de service public de l’Insee. ",
    "link": "En savoir plus",
    "openNewWindow": "ouvre une nouvelle fenêtre",
    "unknownEmailFormtitle": "Veuillez renseigner votre adresse de messagerie",
    "knownEmailFormtitle": "Veuillez confirmer votre adresse de messagerie",
    "email": "Adresse de messagerie",
    "confirmEmail": "Confirmer votre adresse de messagerie",
    "submitUnknownEmailForm": "Valider et accéder à l'enquête",
    "submitKnownEmailForm": "Confirmer et accéder à l'enquête",
    "pageTitle": "Authentification",
  },
  ForgotPassword: {
    "pageTitleForgotPassword": "Mot de passe oublié",
    "sectionTitle": "Récupération du mot de passe",
    "information":
      "Pour obtenir un nouveau mot de passe, veuillez renseigner votre identifiant que vous avez reçu par mail et/ou par courrier.",
    "idecHintText":
      "Format attendu : un identifiant comprenant 7 à 9 caractères, lettres et chiffres en majuscules",
    "submitButton": "Envoyer",
    "forgotPasswordHelpTitle": "Aide à la récupération du mot de passe",
    "contactSupport": "contacter l'assistance.",
    "forgotPasswordHelp": "Si vous n’avez pas votre identifiant, veuillez",
    "alertText":
      "Si votre compte existe, un nouveau mot de passe vous parviendra par mail dans quelques instants, ou par courrier dans les prochains jours. En cas de difficultés, vous pouvez",
    "alertTextEEC":
      "Si votre compte existe, un nouveau mot de passe vous parviendra par mail dans quelques instants.",
    "goBackToConnexion": "Retour à la connexion",
    "modifyIdentifier": "Modifier l'identifiant",
  },
  Accessibility: {
    "pageTitle": "Accessibilité",
    "accessibilityText":
      "L'Insee s’engage à rendre ses sites internet, intranet, extranet et ses progiciels accessibles (et ses applications mobiles et mobilier urbain numérique) conformément à l’article 47 de la loi n°2005-102 du 11 février 2005.",
    accessibilityPlan: () => (
      <p>
        A cette fin, il met en œuvre un schéma pluriannuel présentant la politique de l'Insee en matière
        d'accessibilité numérique (en cours de rédaction) ainsi qu'un plan annuel d'action.{" "}
        <a
          className="fr-link"
          href="https://www.insee.fr/fr/information/7621795"
          target="_blank"
          title="Schéma pluriannuel de mise en accessibilité numérique de l’Insee 2023-2025 - ouvre une nouvelle fenêtre"
        >
          https://www.insee.fr/fr/information/7621795
        </a>
      </p>
    ),
    accessibilityStatementLink: () => (
      <p>
        Cette déclaration d’accessibilité s’applique à{" "}
        <a
          className="fr-link"
          href="https://enquetes.stat-publique.fr"
          target="_blank"
          title="enquetes.stat-publique.fr - ouvre une nouvelle fenêtre"
        >
          https://enquetes.stat-publique.fr
        </a>
        {""}.
      </p>
    ),

    "complianceStatusTitle": "État de conformité",
    "complianceStatusText":
      "Le service d'accès au site de réponse en ligne des enquêtes de la statistique publique est non conforme avec le référentiel général d’amélioration de l’accessibilité (RGAA), version 4 en raison d'une absence d'audit de conformité en cours de réalisation.",

    "testResultsTitle": "Résultats des tests",
    "testResultsText":
      "La présente déclaration sera mise à jour dès que les résultats de l'audit de conformité seront connus.",

    "nonAccessibleContentTitle": "Contenus non accessibles",
    "nonAccessibleContentText": "Sans objet.",

    "exemptionsTitle": "Dérogations pour charge disproportionnée",
    "exemptionsText": "Sans objet.",

    "nonApplicableContentTitle": "Contenus non soumis à l’obligation d’accessibilité",
    "nonApplicableContentText": "Sans objet.",

    "statementEstablishmentTitle": "Établissement de cette déclaration d’accessibilité",
    "statementEstablishmentText": "Cette déclaration a été établie le 07 janvier 2025",

    "technologiesUsedTitle": "Technologies utilisées pour la réalisation du site",
    "technology1": "HTML5",
    "technology2": "CSS",
    "technology3": "Javascript",
    "technology4": "React",

    "testEnvironmentTitle": "Environnement de test",
    "testEnvironmentText": "Sans objet.",

    "accessibilityEvaluationToolsTitle": "Outils pour évaluer l’accessibilité",
    "accessibilityEvaluationToolsText": "Sans objet.",

    "verifiedPagesTitle": "Pages du site ayant fait l’objet de la vérification de conformité",
    "verifiedPagesText": "Sans objet.",

    "feedbackAndContactTitle": "Retour d’information et contact",
    "feedbackAndContactText":
      "Si vous n’arrivez pas à accéder à un contenu ou à un service, vous pouvez contacter l'assistance, pour être orienté vers une alternative accessible ou obtenir le contenu sous une autre forme.",

    "appealOptionsTitle": "Voies de recours",
    "appealOptionsText":
      "Si vous constatez un défaut d’accessibilité vous empêchant d’accéder à un contenu ou une fonctionnalité du site, que vous nous le signalez et que vous ne parvenez pas à obtenir une réponse de notre part, vous êtes en droit de faire parvenir vos doléances ou une demande de saisine au Défenseur des droits.",
    "appealOptionsStep1": "Écrire un message au Défenseur des droits (via le formulaire de contact).",
    "appealOptionsStep2": "Contacter le délégué du Défenseur des droits dans votre région.",
    "appealOptionsStep3":
      "Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre) à l'adresse suivante : Défenseur des droits, Libre réponse 71120, 75342 Paris CEDEX 07.",
    "appealOptionsStep4": "Contacter le Défenseur des droits par téléphone : 09 69 39 00 00.",
  },
  Security: {
    "pageTitle": "Securité",
    securityText: () => (
      <p>
        Le site{" "}
        <a
          className="fr-link"
          href="https://enquetes.stat-publique.fr"
          target="_blank"
          title="enquetes.stat-publique.fr - ouvrir dans un nouvel onglet"
        >
          https://enquetes.stat-publique.fr
        </a>{" "}
        a fait l'objet d'une décision d'homologation prononcée par l'autorité d'homologation pour le
        compte de l'autorité qualifiée de la sécurité du système d'information.
      </p>
    ),
  },
  PersonalData: {
    "pageTitle": "Données personnelles",
    personalDataText: () => (
      <p>
        L’Insee s'engage à ce que les traitements de{" "}
        <a
          className="fr-link"
          href="https://www.insee.fr/fr/information/3719162"
          target="_blank"
          title="Données à caractère personnel - ouvre une nouvelle fenêtre"
        >
          Données à caractère personnel
        </a>{" "}
        qu’il met en œuvre à des fins statistiques soient conformes au{" "}
        <a
          className="fr-link"
          href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32016R0679"
          target="_blank"
          title="Règlement général sur la protection des données- ouvre une nouvelle fenêtre"
        >
          Règlement général sur la protection des données (RGPD)
        </a>{" "}
        et à la{" "}
        <a
          className="fr-link"
          href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000886460"
          target="_blank"
          title="loi Informatique et Libertés - ouvre une nouvelle fenêtre"
        >
          loi Informatique et Libertés
        </a>
        {""}.
      </p>
    ),
  },
  Chatbot: {
    "title": "Portail des enquêtes",
  },
  HomePage: {
    "portal title": "Bienvenue sur le portail de réponses aux enquêtes de la statistique publique",
    "portal description":
      "L’Insee mène chaque année des enquêtes auprès des particuliers et des entreprises. En y répondant, vous rendez possible la production d’informations fiables, permettant ainsi d’éclairer le débat public.",
    "authentication title":
      "Vous avez reçu des identifiants par mail ou par courrier pour répondre à une enquête ?",
    "authentication description":
      "Vous avez été tiré au sort pour participer à une enquête et répondre en ligne. Munissez-vous de votre identifiant et de votre mot de passe pour vous connecter et répondre à l’enquête.",
    "authentication button": "Se connecter",
    "activities title": "Les activités de la statistique publique",
    "activities description":
      "L’Insee collecte, produit, analyse et diffuse des informations statistiques sur l’économie, la société et les territoires français.",
    "activities collect": "Collecter",
    "activities analyze": "Analyser",
    "activities diffuse": "Diffuser",
    "confidentiality title": "L’Insee est tenu au secret statistique",
    "confidentiality description":
      "Le secret statistique interdit strictement la communication de données individuelles ou susceptibles d’identifier les enquêtés. Il garantit la fiabilité des statistiques, que ces traitements proviennent d’enquêtes ou de bases de données.",
    "learn more": "En savoir plus",
    "page title": "Acceuil",
  },
  /* spell-checker: enable */
};
