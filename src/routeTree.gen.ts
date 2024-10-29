/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SecuriteImport } from './routes/securite'
import { Route as MonCompteImport } from './routes/mon-compte'
import { Route as MesEnquetesImport } from './routes/mes-enquetes'
import { Route as MentionsLegalesImport } from './routes/mentions-legales'
import { Route as DonneesPersonnellesImport } from './routes/donnees-personnelles'
import { Route as DeconnexionImport } from './routes/deconnexion'
import { Route as ConnexionImport } from './routes/connexion'
import { Route as AccessibiliteImport } from './routes/accessibilite'
import { Route as SurveyImport } from './routes/$survey'
import { Route as IndexImport } from './routes/index'
import { Route as SurveyIndexImport } from './routes/$survey/index'
import { Route as SurveyUtilisationReponseImport } from './routes/$survey/utilisation-reponse'
import { Route as SurveyResultatsImport } from './routes/$survey/resultats'
import { Route as SurveyLoginImport } from './routes/$survey/login'
import { Route as SurveyIntroductionImport } from './routes/$survey/introduction'
import { Route as SurveyFaqImport } from './routes/$survey/faq'
import { Route as SurveyDocumentsImport } from './routes/$survey/documents'
import { Route as SurveyCadreJuridiqueImport } from './routes/$survey/cadre-juridique'
import { Route as SurveyContacterAssistanceIndexImport } from './routes/$survey/contacter-assistance/index'
import { Route as SurveyRepondantMailImport } from './routes/$survey/repondant/mail'
import { Route as SurveyContacterAssistanceErreurImport } from './routes/$survey/contacter-assistance/erreur'
import { Route as SurveyContacterAssistanceAuthImport } from './routes/$survey/contacter-assistance/auth'

// Create/Update Routes

const SecuriteRoute = SecuriteImport.update({
  path: '/securite',
  getParentRoute: () => rootRoute,
} as any)

const MonCompteRoute = MonCompteImport.update({
  path: '/mon-compte',
  getParentRoute: () => rootRoute,
} as any)

const MesEnquetesRoute = MesEnquetesImport.update({
  path: '/mes-enquetes',
  getParentRoute: () => rootRoute,
} as any)

const MentionsLegalesRoute = MentionsLegalesImport.update({
  path: '/mentions-legales',
  getParentRoute: () => rootRoute,
} as any)

const DonneesPersonnellesRoute = DonneesPersonnellesImport.update({
  path: '/donnees-personnelles',
  getParentRoute: () => rootRoute,
} as any)

const DeconnexionRoute = DeconnexionImport.update({
  path: '/deconnexion',
  getParentRoute: () => rootRoute,
} as any)

const ConnexionRoute = ConnexionImport.update({
  path: '/connexion',
  getParentRoute: () => rootRoute,
} as any)

const AccessibiliteRoute = AccessibiliteImport.update({
  path: '/accessibilite',
  getParentRoute: () => rootRoute,
} as any)

const SurveyRoute = SurveyImport.update({
  path: '/$survey',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SurveyIndexRoute = SurveyIndexImport.update({
  path: '/',
  getParentRoute: () => SurveyRoute,
} as any)

const SurveyUtilisationReponseRoute = SurveyUtilisationReponseImport.update({
  path: '/utilisation-reponse',
  getParentRoute: () => SurveyRoute,
} as any)

const SurveyResultatsRoute = SurveyResultatsImport.update({
  path: '/resultats',
  getParentRoute: () => SurveyRoute,
} as any)

const SurveyLoginRoute = SurveyLoginImport.update({
  path: '/login',
  getParentRoute: () => SurveyRoute,
} as any)

const SurveyIntroductionRoute = SurveyIntroductionImport.update({
  path: '/introduction',
  getParentRoute: () => SurveyRoute,
} as any)

const SurveyFaqRoute = SurveyFaqImport.update({
  path: '/faq',
  getParentRoute: () => SurveyRoute,
} as any)

const SurveyDocumentsRoute = SurveyDocumentsImport.update({
  path: '/documents',
  getParentRoute: () => SurveyRoute,
} as any)

const SurveyCadreJuridiqueRoute = SurveyCadreJuridiqueImport.update({
  path: '/cadre-juridique',
  getParentRoute: () => SurveyRoute,
} as any)

const SurveyContacterAssistanceIndexRoute =
  SurveyContacterAssistanceIndexImport.update({
    path: '/contacter-assistance/',
    getParentRoute: () => SurveyRoute,
  } as any)

const SurveyRepondantMailRoute = SurveyRepondantMailImport.update({
  path: '/repondant/mail',
  getParentRoute: () => SurveyRoute,
} as any)

const SurveyContacterAssistanceErreurRoute =
  SurveyContacterAssistanceErreurImport.update({
    path: '/contacter-assistance/erreur',
    getParentRoute: () => SurveyRoute,
  } as any)

const SurveyContacterAssistanceAuthRoute =
  SurveyContacterAssistanceAuthImport.update({
    path: '/contacter-assistance/auth',
    getParentRoute: () => SurveyRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/$survey': {
      id: '/$survey'
      path: '/$survey'
      fullPath: '/$survey'
      preLoaderRoute: typeof SurveyImport
      parentRoute: typeof rootRoute
    }
    '/accessibilite': {
      id: '/accessibilite'
      path: '/accessibilite'
      fullPath: '/accessibilite'
      preLoaderRoute: typeof AccessibiliteImport
      parentRoute: typeof rootRoute
    }
    '/connexion': {
      id: '/connexion'
      path: '/connexion'
      fullPath: '/connexion'
      preLoaderRoute: typeof ConnexionImport
      parentRoute: typeof rootRoute
    }
    '/deconnexion': {
      id: '/deconnexion'
      path: '/deconnexion'
      fullPath: '/deconnexion'
      preLoaderRoute: typeof DeconnexionImport
      parentRoute: typeof rootRoute
    }
    '/donnees-personnelles': {
      id: '/donnees-personnelles'
      path: '/donnees-personnelles'
      fullPath: '/donnees-personnelles'
      preLoaderRoute: typeof DonneesPersonnellesImport
      parentRoute: typeof rootRoute
    }
    '/mentions-legales': {
      id: '/mentions-legales'
      path: '/mentions-legales'
      fullPath: '/mentions-legales'
      preLoaderRoute: typeof MentionsLegalesImport
      parentRoute: typeof rootRoute
    }
    '/mes-enquetes': {
      id: '/mes-enquetes'
      path: '/mes-enquetes'
      fullPath: '/mes-enquetes'
      preLoaderRoute: typeof MesEnquetesImport
      parentRoute: typeof rootRoute
    }
    '/mon-compte': {
      id: '/mon-compte'
      path: '/mon-compte'
      fullPath: '/mon-compte'
      preLoaderRoute: typeof MonCompteImport
      parentRoute: typeof rootRoute
    }
    '/securite': {
      id: '/securite'
      path: '/securite'
      fullPath: '/securite'
      preLoaderRoute: typeof SecuriteImport
      parentRoute: typeof rootRoute
    }
    '/$survey/cadre-juridique': {
      id: '/$survey/cadre-juridique'
      path: '/cadre-juridique'
      fullPath: '/$survey/cadre-juridique'
      preLoaderRoute: typeof SurveyCadreJuridiqueImport
      parentRoute: typeof SurveyImport
    }
    '/$survey/documents': {
      id: '/$survey/documents'
      path: '/documents'
      fullPath: '/$survey/documents'
      preLoaderRoute: typeof SurveyDocumentsImport
      parentRoute: typeof SurveyImport
    }
    '/$survey/faq': {
      id: '/$survey/faq'
      path: '/faq'
      fullPath: '/$survey/faq'
      preLoaderRoute: typeof SurveyFaqImport
      parentRoute: typeof SurveyImport
    }
    '/$survey/introduction': {
      id: '/$survey/introduction'
      path: '/introduction'
      fullPath: '/$survey/introduction'
      preLoaderRoute: typeof SurveyIntroductionImport
      parentRoute: typeof SurveyImport
    }
    '/$survey/login': {
      id: '/$survey/login'
      path: '/login'
      fullPath: '/$survey/login'
      preLoaderRoute: typeof SurveyLoginImport
      parentRoute: typeof SurveyImport
    }
    '/$survey/resultats': {
      id: '/$survey/resultats'
      path: '/resultats'
      fullPath: '/$survey/resultats'
      preLoaderRoute: typeof SurveyResultatsImport
      parentRoute: typeof SurveyImport
    }
    '/$survey/utilisation-reponse': {
      id: '/$survey/utilisation-reponse'
      path: '/utilisation-reponse'
      fullPath: '/$survey/utilisation-reponse'
      preLoaderRoute: typeof SurveyUtilisationReponseImport
      parentRoute: typeof SurveyImport
    }
    '/$survey/': {
      id: '/$survey/'
      path: '/'
      fullPath: '/$survey/'
      preLoaderRoute: typeof SurveyIndexImport
      parentRoute: typeof SurveyImport
    }
    '/$survey/contacter-assistance/auth': {
      id: '/$survey/contacter-assistance/auth'
      path: '/contacter-assistance/auth'
      fullPath: '/$survey/contacter-assistance/auth'
      preLoaderRoute: typeof SurveyContacterAssistanceAuthImport
      parentRoute: typeof SurveyImport
    }
    '/$survey/contacter-assistance/erreur': {
      id: '/$survey/contacter-assistance/erreur'
      path: '/contacter-assistance/erreur'
      fullPath: '/$survey/contacter-assistance/erreur'
      preLoaderRoute: typeof SurveyContacterAssistanceErreurImport
      parentRoute: typeof SurveyImport
    }
    '/$survey/repondant/mail': {
      id: '/$survey/repondant/mail'
      path: '/repondant/mail'
      fullPath: '/$survey/repondant/mail'
      preLoaderRoute: typeof SurveyRepondantMailImport
      parentRoute: typeof SurveyImport
    }
    '/$survey/contacter-assistance/': {
      id: '/$survey/contacter-assistance/'
      path: '/contacter-assistance'
      fullPath: '/$survey/contacter-assistance'
      preLoaderRoute: typeof SurveyContacterAssistanceIndexImport
      parentRoute: typeof SurveyImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  SurveyRoute: SurveyRoute.addChildren({
    SurveyCadreJuridiqueRoute,
    SurveyDocumentsRoute,
    SurveyFaqRoute,
    SurveyIntroductionRoute,
    SurveyLoginRoute,
    SurveyResultatsRoute,
    SurveyUtilisationReponseRoute,
    SurveyIndexRoute,
    SurveyContacterAssistanceAuthRoute,
    SurveyContacterAssistanceErreurRoute,
    SurveyRepondantMailRoute,
    SurveyContacterAssistanceIndexRoute,
  }),
  AccessibiliteRoute,
  ConnexionRoute,
  DeconnexionRoute,
  DonneesPersonnellesRoute,
  MentionsLegalesRoute,
  MesEnquetesRoute,
  MonCompteRoute,
  SecuriteRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/$survey",
        "/accessibilite",
        "/connexion",
        "/deconnexion",
        "/donnees-personnelles",
        "/mentions-legales",
        "/mes-enquetes",
        "/mon-compte",
        "/securite"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/$survey": {
      "filePath": "$survey.tsx",
      "children": [
        "/$survey/cadre-juridique",
        "/$survey/documents",
        "/$survey/faq",
        "/$survey/introduction",
        "/$survey/login",
        "/$survey/resultats",
        "/$survey/utilisation-reponse",
        "/$survey/",
        "/$survey/contacter-assistance/auth",
        "/$survey/contacter-assistance/erreur",
        "/$survey/repondant/mail",
        "/$survey/contacter-assistance/"
      ]
    },
    "/accessibilite": {
      "filePath": "accessibilite.tsx"
    },
    "/connexion": {
      "filePath": "connexion.tsx"
    },
    "/deconnexion": {
      "filePath": "deconnexion.tsx"
    },
    "/donnees-personnelles": {
      "filePath": "donnees-personnelles.tsx"
    },
    "/mentions-legales": {
      "filePath": "mentions-legales.tsx"
    },
    "/mes-enquetes": {
      "filePath": "mes-enquetes.tsx"
    },
    "/mon-compte": {
      "filePath": "mon-compte.tsx"
    },
    "/securite": {
      "filePath": "securite.tsx"
    },
    "/$survey/cadre-juridique": {
      "filePath": "$survey/cadre-juridique.tsx",
      "parent": "/$survey"
    },
    "/$survey/documents": {
      "filePath": "$survey/documents.tsx",
      "parent": "/$survey"
    },
    "/$survey/faq": {
      "filePath": "$survey/faq.tsx",
      "parent": "/$survey"
    },
    "/$survey/introduction": {
      "filePath": "$survey/introduction.tsx",
      "parent": "/$survey"
    },
    "/$survey/login": {
      "filePath": "$survey/login.tsx",
      "parent": "/$survey"
    },
    "/$survey/resultats": {
      "filePath": "$survey/resultats.tsx",
      "parent": "/$survey"
    },
    "/$survey/utilisation-reponse": {
      "filePath": "$survey/utilisation-reponse.tsx",
      "parent": "/$survey"
    },
    "/$survey/": {
      "filePath": "$survey/index.tsx",
      "parent": "/$survey"
    },
    "/$survey/contacter-assistance/auth": {
      "filePath": "$survey/contacter-assistance/auth.tsx",
      "parent": "/$survey"
    },
    "/$survey/contacter-assistance/erreur": {
      "filePath": "$survey/contacter-assistance/erreur.tsx",
      "parent": "/$survey"
    },
    "/$survey/repondant/mail": {
      "filePath": "$survey/repondant/mail.tsx",
      "parent": "/$survey"
    },
    "/$survey/contacter-assistance/": {
      "filePath": "$survey/contacter-assistance/index.tsx",
      "parent": "/$survey"
    }
  }
}
ROUTE_MANIFEST_END */
