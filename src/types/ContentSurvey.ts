export type SurveyData = {
  id: string;
  isSurveyOnline: boolean;
  disabledOnWelcomePage?: boolean;
  messageSurveyOffline: string;
  messageInfoSurveyOffline: string;
  title: string;
  titleShort: string;
  verifmail: boolean;
  content: {
    description: {
      title: string;
      body: string;
    };
    resultats: {
      title: string;
      "menu-title": string;
      "picture-url"?: string;
      legende: string;
      "link-url"?: string;
    };
    "enquete-en-detail": {
      "menu-link": string;
    };
    "donnees-personnelles": {
      cartouche: string;
      context: string;
    };
    "a-quoi-servent-vos-reponses": {
      body: string;
    };
    "faq-data": {
      title: string;
      body: string;
    }[];
    "faq-data-general"?: {
      title: string;
      body: string;
    }[];
  };
};

export type GenericData = {
  content: {
    "faq-data": {
      title: string;
      body: string;
    }[];
    ineligible: {
      body: string;
    };
    unauthorized: {
      body: string;
    };
  };
};

export type Content = { generique: GenericData; specifique: SurveyData[] };
