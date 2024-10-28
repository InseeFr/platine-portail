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
    "header": "Menu",
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
    "title": "Sélectionnez votre enquête",
    "sideMenuTitle": "Menu latéral pour accéder aux informations de l'enquêtes",
    "surveyLink": "Voir l'enquête en détail",
    "openNewWindow": "ouvre une nouvelle fenêtre",
    "survey introduction": "Introduction à l'enquête",
    "homepage": "Accueil",
    "in this section": "Dans cette rubrique",
    "legal framework": "Cadre juridique",
    "what are your answers for?": "À quoi servent vos réponses ?",
    "documents to the surveyed": "Documents aux enquêtés",
    "some results": "Quelques résultats",
    "respond to survey": "Répondre à l'enquête",
    "respond to survey detail":
      "Munissez vous de votre identifiant et de votre mot de passe pour répondre à l’enquête.",
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
    "answer saved":
      "Vos réponses ont été sauvegardées, vous pourrez ainsi compléter ultérieurement votre questionnaire.",
    "send message warning":
      "N’oubliez pas d’envoyer votre questionnaire une fois qu’il sera entièrement complété.",
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
    "contact us": "Contactez-nous :",
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
              to: "/$survey/faq",
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
  Accessibility: {
    "pageTitle": "Accessibilité",
    "accessibilityText":
      "L'Insee s’engage à rendre ses sites internet, intranet, extranet et ses progiciels accessibles (et ses applications mobiles et mobilier urbain numérique) conformément à l’article 47 de la loi n°2005-102 du 11 février 2005. À cette fin, elle met en œuvre la stratégie et les actions suivantes :",
    "multiYearPlan": "Schéma pluriannuel de mise en accessibilité 2022-2024",
    "actionPlans": "Plans d’actions 2023, 2024",
    "accessibilityDocumentsNote": "Ces documents sont communicables à la demande.",

    accessibilityStatementLink: () => (
      <p>
        Cette déclaration d’accessibilité s’applique à
        <a href="https://enquetes.stat-publique.fr">https://enquetes.stat-publique.fr</a>.
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
    "statementEstablishmentText": "?",

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
    "securityText":
      "Le site https://enquetes.stat-publique.fr/ a fait l'objet d'une décision d'homologation prononcée par l'autorité d'homologation pour le compte de l'autorité qualifiée de la sécurité du système d'information.",
  },

  /* spell-checker: enable */
};
