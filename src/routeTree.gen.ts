/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SecuriteImport } from './routes/securite'
import { Route as MonCompteImport } from './routes/mon-compte'
import { Route as MesEnquetesOldImport } from './routes/mes-enquetes-old'
import { Route as MentionsLegalesImport } from './routes/mentions-legales'
import { Route as DonneesPersonnellesImport } from './routes/donnees-personnelles'
import { Route as DeconnexionImport } from './routes/deconnexion'
import { Route as ConnexionImport } from './routes/connexion'
import { Route as AccessibiliteImport } from './routes/accessibilite'
import { Route as SurveyImport } from './routes/$survey'
import { Route as IndexImport } from './routes/index'
import { Route as MesEnquetesIndexImport } from './routes/mes-enquetes/index'
import { Route as MesEnquetesSurveyImport } from './routes/mes-enquetes/$survey'
import { Route as MesEnquetesSurveyIndexImport } from './routes/mes-enquetes/$survey/index'
import { Route as MesEnquetesSurveyUtilisationReponseImport } from './routes/mes-enquetes/$survey/utilisation-reponse'
import { Route as MesEnquetesSurveyResultatsImport } from './routes/mes-enquetes/$survey/resultats'
import { Route as MesEnquetesSurveyLoginImport } from './routes/mes-enquetes/$survey/login'
import { Route as MesEnquetesSurveyIntroductionImport } from './routes/mes-enquetes/$survey/introduction'
import { Route as MesEnquetesSurveyFaqImport } from './routes/mes-enquetes/$survey/faq'
import { Route as MesEnquetesSurveyDocumentsImport } from './routes/mes-enquetes/$survey/documents'
import { Route as MesEnquetesSurveyCadreJuridiqueImport } from './routes/mes-enquetes/$survey/cadre-juridique'
import { Route as MesEnquetesSurveyAssistanceImport } from './routes/mes-enquetes/$survey/assistance'
import { Route as MesEnquetesSurveyContacterAssistanceIndexImport } from './routes/mes-enquetes/$survey/contacter-assistance/index'
import { Route as MesEnquetesSurveyRepondantMailImport } from './routes/mes-enquetes/$survey/repondant/mail'
import { Route as MesEnquetesSurveyContacterAssistanceErreurImport } from './routes/mes-enquetes/$survey/contacter-assistance/erreur'
import { Route as MesEnquetesSurveyContacterAssistanceAuthImport } from './routes/mes-enquetes/$survey/contacter-assistance/auth'

// Create/Update Routes

const SecuriteRoute = SecuriteImport.update({
  path: '/securite',
  getParentRoute: () => rootRoute,
} as any)

const MonCompteRoute = MonCompteImport.update({
  path: '/mon-compte',
  getParentRoute: () => rootRoute,
} as any)

const MesEnquetesOldRoute = MesEnquetesOldImport.update({
  path: '/mes-enquetes-old',
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

const MesEnquetesIndexRoute = MesEnquetesIndexImport.update({
  path: '/mes-enquetes/',
  getParentRoute: () => rootRoute,
} as any)

const MesEnquetesSurveyRoute = MesEnquetesSurveyImport.update({
  path: '/mes-enquetes/$survey',
  getParentRoute: () => rootRoute,
} as any)

const MesEnquetesSurveyIndexRoute = MesEnquetesSurveyIndexImport.update({
  path: '/',
  getParentRoute: () => MesEnquetesSurveyRoute,
} as any)

const MesEnquetesSurveyUtilisationReponseRoute =
  MesEnquetesSurveyUtilisationReponseImport.update({
    path: '/utilisation-reponse',
    getParentRoute: () => MesEnquetesSurveyRoute,
  } as any)

const MesEnquetesSurveyResultatsRoute = MesEnquetesSurveyResultatsImport.update(
  {
    path: '/resultats',
    getParentRoute: () => MesEnquetesSurveyRoute,
  } as any,
)

const MesEnquetesSurveyLoginRoute = MesEnquetesSurveyLoginImport.update({
  path: '/login',
  getParentRoute: () => MesEnquetesSurveyRoute,
} as any)

const MesEnquetesSurveyIntroductionRoute =
  MesEnquetesSurveyIntroductionImport.update({
    path: '/introduction',
    getParentRoute: () => MesEnquetesSurveyRoute,
  } as any)

const MesEnquetesSurveyFaqRoute = MesEnquetesSurveyFaqImport.update({
  path: '/faq',
  getParentRoute: () => MesEnquetesSurveyRoute,
} as any)

const MesEnquetesSurveyDocumentsRoute = MesEnquetesSurveyDocumentsImport.update(
  {
    path: '/documents',
    getParentRoute: () => MesEnquetesSurveyRoute,
  } as any,
)

const MesEnquetesSurveyCadreJuridiqueRoute =
  MesEnquetesSurveyCadreJuridiqueImport.update({
    path: '/cadre-juridique',
    getParentRoute: () => MesEnquetesSurveyRoute,
  } as any)

const MesEnquetesSurveyAssistanceRoute =
  MesEnquetesSurveyAssistanceImport.update({
    path: '/assistance',
    getParentRoute: () => MesEnquetesSurveyRoute,
  } as any)

const MesEnquetesSurveyContacterAssistanceIndexRoute =
  MesEnquetesSurveyContacterAssistanceIndexImport.update({
    path: '/contacter-assistance/',
    getParentRoute: () => MesEnquetesSurveyRoute,
  } as any)

const MesEnquetesSurveyRepondantMailRoute =
  MesEnquetesSurveyRepondantMailImport.update({
    path: '/repondant/mail',
    getParentRoute: () => MesEnquetesSurveyRoute,
  } as any)

const MesEnquetesSurveyContacterAssistanceErreurRoute =
  MesEnquetesSurveyContacterAssistanceErreurImport.update({
    path: '/contacter-assistance/erreur',
    getParentRoute: () => MesEnquetesSurveyRoute,
  } as any)

const MesEnquetesSurveyContacterAssistanceAuthRoute =
  MesEnquetesSurveyContacterAssistanceAuthImport.update({
    path: '/contacter-assistance/auth',
    getParentRoute: () => MesEnquetesSurveyRoute,
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
    '/mes-enquetes-old': {
      id: '/mes-enquetes-old'
      path: '/mes-enquetes-old'
      fullPath: '/mes-enquetes-old'
      preLoaderRoute: typeof MesEnquetesOldImport
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
    '/mes-enquetes/$survey': {
      id: '/mes-enquetes/$survey'
      path: '/mes-enquetes/$survey'
      fullPath: '/mes-enquetes/$survey'
      preLoaderRoute: typeof MesEnquetesSurveyImport
      parentRoute: typeof rootRoute
    }
    '/mes-enquetes/': {
      id: '/mes-enquetes/'
      path: '/mes-enquetes'
      fullPath: '/mes-enquetes'
      preLoaderRoute: typeof MesEnquetesIndexImport
      parentRoute: typeof rootRoute
    }
    '/mes-enquetes/$survey/assistance': {
      id: '/mes-enquetes/$survey/assistance'
      path: '/assistance'
      fullPath: '/mes-enquetes/$survey/assistance'
      preLoaderRoute: typeof MesEnquetesSurveyAssistanceImport
      parentRoute: typeof MesEnquetesSurveyImport
    }
    '/mes-enquetes/$survey/cadre-juridique': {
      id: '/mes-enquetes/$survey/cadre-juridique'
      path: '/cadre-juridique'
      fullPath: '/mes-enquetes/$survey/cadre-juridique'
      preLoaderRoute: typeof MesEnquetesSurveyCadreJuridiqueImport
      parentRoute: typeof MesEnquetesSurveyImport
    }
    '/mes-enquetes/$survey/documents': {
      id: '/mes-enquetes/$survey/documents'
      path: '/documents'
      fullPath: '/mes-enquetes/$survey/documents'
      preLoaderRoute: typeof MesEnquetesSurveyDocumentsImport
      parentRoute: typeof MesEnquetesSurveyImport
    }
    '/mes-enquetes/$survey/faq': {
      id: '/mes-enquetes/$survey/faq'
      path: '/faq'
      fullPath: '/mes-enquetes/$survey/faq'
      preLoaderRoute: typeof MesEnquetesSurveyFaqImport
      parentRoute: typeof MesEnquetesSurveyImport
    }
    '/mes-enquetes/$survey/introduction': {
      id: '/mes-enquetes/$survey/introduction'
      path: '/introduction'
      fullPath: '/mes-enquetes/$survey/introduction'
      preLoaderRoute: typeof MesEnquetesSurveyIntroductionImport
      parentRoute: typeof MesEnquetesSurveyImport
    }
    '/mes-enquetes/$survey/login': {
      id: '/mes-enquetes/$survey/login'
      path: '/login'
      fullPath: '/mes-enquetes/$survey/login'
      preLoaderRoute: typeof MesEnquetesSurveyLoginImport
      parentRoute: typeof MesEnquetesSurveyImport
    }
    '/mes-enquetes/$survey/resultats': {
      id: '/mes-enquetes/$survey/resultats'
      path: '/resultats'
      fullPath: '/mes-enquetes/$survey/resultats'
      preLoaderRoute: typeof MesEnquetesSurveyResultatsImport
      parentRoute: typeof MesEnquetesSurveyImport
    }
    '/mes-enquetes/$survey/utilisation-reponse': {
      id: '/mes-enquetes/$survey/utilisation-reponse'
      path: '/utilisation-reponse'
      fullPath: '/mes-enquetes/$survey/utilisation-reponse'
      preLoaderRoute: typeof MesEnquetesSurveyUtilisationReponseImport
      parentRoute: typeof MesEnquetesSurveyImport
    }
    '/mes-enquetes/$survey/': {
      id: '/mes-enquetes/$survey/'
      path: '/'
      fullPath: '/mes-enquetes/$survey/'
      preLoaderRoute: typeof MesEnquetesSurveyIndexImport
      parentRoute: typeof MesEnquetesSurveyImport
    }
    '/mes-enquetes/$survey/contacter-assistance/auth': {
      id: '/mes-enquetes/$survey/contacter-assistance/auth'
      path: '/contacter-assistance/auth'
      fullPath: '/mes-enquetes/$survey/contacter-assistance/auth'
      preLoaderRoute: typeof MesEnquetesSurveyContacterAssistanceAuthImport
      parentRoute: typeof MesEnquetesSurveyImport
    }
    '/mes-enquetes/$survey/contacter-assistance/erreur': {
      id: '/mes-enquetes/$survey/contacter-assistance/erreur'
      path: '/contacter-assistance/erreur'
      fullPath: '/mes-enquetes/$survey/contacter-assistance/erreur'
      preLoaderRoute: typeof MesEnquetesSurveyContacterAssistanceErreurImport
      parentRoute: typeof MesEnquetesSurveyImport
    }
    '/mes-enquetes/$survey/repondant/mail': {
      id: '/mes-enquetes/$survey/repondant/mail'
      path: '/repondant/mail'
      fullPath: '/mes-enquetes/$survey/repondant/mail'
      preLoaderRoute: typeof MesEnquetesSurveyRepondantMailImport
      parentRoute: typeof MesEnquetesSurveyImport
    }
    '/mes-enquetes/$survey/contacter-assistance/': {
      id: '/mes-enquetes/$survey/contacter-assistance/'
      path: '/contacter-assistance'
      fullPath: '/mes-enquetes/$survey/contacter-assistance'
      preLoaderRoute: typeof MesEnquetesSurveyContacterAssistanceIndexImport
      parentRoute: typeof MesEnquetesSurveyImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  SurveyRoute,
  AccessibiliteRoute,
  ConnexionRoute,
  DeconnexionRoute,
  DonneesPersonnellesRoute,
  MentionsLegalesRoute,
  MesEnquetesOldRoute,
  MonCompteRoute,
  SecuriteRoute,
  MesEnquetesSurveyRoute: MesEnquetesSurveyRoute.addChildren({
    MesEnquetesSurveyAssistanceRoute,
    MesEnquetesSurveyCadreJuridiqueRoute,
    MesEnquetesSurveyDocumentsRoute,
    MesEnquetesSurveyFaqRoute,
    MesEnquetesSurveyIntroductionRoute,
    MesEnquetesSurveyLoginRoute,
    MesEnquetesSurveyResultatsRoute,
    MesEnquetesSurveyUtilisationReponseRoute,
    MesEnquetesSurveyIndexRoute,
    MesEnquetesSurveyContacterAssistanceAuthRoute,
    MesEnquetesSurveyContacterAssistanceErreurRoute,
    MesEnquetesSurveyRepondantMailRoute,
    MesEnquetesSurveyContacterAssistanceIndexRoute,
  }),
  MesEnquetesIndexRoute,
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
        "/mes-enquetes-old",
        "/mon-compte",
        "/securite",
        "/mes-enquetes/$survey",
        "/mes-enquetes/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/$survey": {
      "filePath": "$survey.tsx"
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
    "/mes-enquetes-old": {
      "filePath": "mes-enquetes-old.tsx"
    },
    "/mon-compte": {
      "filePath": "mon-compte.tsx"
    },
    "/securite": {
      "filePath": "securite.tsx"
    },
    "/mes-enquetes/$survey": {
      "filePath": "mes-enquetes/$survey.tsx",
      "children": [
        "/mes-enquetes/$survey/assistance",
        "/mes-enquetes/$survey/cadre-juridique",
        "/mes-enquetes/$survey/documents",
        "/mes-enquetes/$survey/faq",
        "/mes-enquetes/$survey/introduction",
        "/mes-enquetes/$survey/login",
        "/mes-enquetes/$survey/resultats",
        "/mes-enquetes/$survey/utilisation-reponse",
        "/mes-enquetes/$survey/",
        "/mes-enquetes/$survey/contacter-assistance/auth",
        "/mes-enquetes/$survey/contacter-assistance/erreur",
        "/mes-enquetes/$survey/repondant/mail",
        "/mes-enquetes/$survey/contacter-assistance/"
      ]
    },
    "/mes-enquetes/": {
      "filePath": "mes-enquetes/index.tsx"
    },
    "/mes-enquetes/$survey/assistance": {
      "filePath": "mes-enquetes/$survey/assistance.tsx",
      "parent": "/mes-enquetes/$survey"
    },
    "/mes-enquetes/$survey/cadre-juridique": {
      "filePath": "mes-enquetes/$survey/cadre-juridique.tsx",
      "parent": "/mes-enquetes/$survey"
    },
    "/mes-enquetes/$survey/documents": {
      "filePath": "mes-enquetes/$survey/documents.tsx",
      "parent": "/mes-enquetes/$survey"
    },
    "/mes-enquetes/$survey/faq": {
      "filePath": "mes-enquetes/$survey/faq.tsx",
      "parent": "/mes-enquetes/$survey"
    },
    "/mes-enquetes/$survey/introduction": {
      "filePath": "mes-enquetes/$survey/introduction.tsx",
      "parent": "/mes-enquetes/$survey"
    },
    "/mes-enquetes/$survey/login": {
      "filePath": "mes-enquetes/$survey/login.tsx",
      "parent": "/mes-enquetes/$survey"
    },
    "/mes-enquetes/$survey/resultats": {
      "filePath": "mes-enquetes/$survey/resultats.tsx",
      "parent": "/mes-enquetes/$survey"
    },
    "/mes-enquetes/$survey/utilisation-reponse": {
      "filePath": "mes-enquetes/$survey/utilisation-reponse.tsx",
      "parent": "/mes-enquetes/$survey"
    },
    "/mes-enquetes/$survey/": {
      "filePath": "mes-enquetes/$survey/index.tsx",
      "parent": "/mes-enquetes/$survey"
    },
    "/mes-enquetes/$survey/contacter-assistance/auth": {
      "filePath": "mes-enquetes/$survey/contacter-assistance/auth.tsx",
      "parent": "/mes-enquetes/$survey"
    },
    "/mes-enquetes/$survey/contacter-assistance/erreur": {
      "filePath": "mes-enquetes/$survey/contacter-assistance/erreur.tsx",
      "parent": "/mes-enquetes/$survey"
    },
    "/mes-enquetes/$survey/repondant/mail": {
      "filePath": "mes-enquetes/$survey/repondant/mail.tsx",
      "parent": "/mes-enquetes/$survey"
    },
    "/mes-enquetes/$survey/contacter-assistance/": {
      "filePath": "mes-enquetes/$survey/contacter-assistance/index.tsx",
      "parent": "/mes-enquetes/$survey"
    }
  }
}
ROUTE_MANIFEST_END */
