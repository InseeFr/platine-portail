/* eslint no-unexpected-multiline: 0 */
import content from 'resources/content';

// ---------------- //
// generic content  //
// ---------------- //
const getGeneric = () => content.generique;
const getGenericContent = () => getGeneric().content;
export const getReponseUseGenericText = () =>
  getGenericContent()['a-quoi-servent-vos-reponses'].body;
export const getResponseUseGenericInformationText = () =>
  getGenericContent()['a-quoi-servent-vos-reponses'].information;
export const getA11yBody = () => getGenericContent().accessibilite.body;
export const getA11yTitle = () => getGenericContent().accessibilite.title;

export const getIneligibleText = () => getGenericContent().ineligible.body;

export const getImportantInfo = () => getGeneric().importantInfo;

export const getSurveys = () =>
  content.specifique.map(element => {
    return {
      titleShort: element.titleShort,
      id: element.id,
    };
  });

// ----------------- //
// specific content  //
// ----------------- //
export const idExists = id => content.specifique.find(e => e.id === id) !== undefined;
export const getContentById = id => content.specifique.find(e => e.id === id).content;
export const getSurveyTitleById = id => content.specifique.find(e => e.id === id).title;
export const getSurveyTitleShortById = id => content.specifique.find(e => e.id === id).titleShort;
export const getSurveyOfflineMessageById = id =>
  content.specifique.find(e => e.id === id).messageSurveyOffline;
export const getSurveyOfflineMessageInfoById = id =>
  content.specifique.find(e => e.id === id).messageInfoSurveyOffline;
export const getSurveyVerifMailById = id => content.specifique.find(e => e.id === id).verifmail;
export const getSurveyConfigurationById = id =>
  content.specifique.find(e => e.id === id).configuration;

// description accueil
export const getSurveyDescriptionBody = id => getContentById(id).description.body;
export const getSurveyDescriptionTitle = id => getContentById(id).description.title;

// enquete en détail
export const getSurveyDetailLink = id => getContentById(id)['enquete-en-detail']['menu-link'];

// donnees personnelles
export const getDonneesPersonnellesSpecificContextTexteById = id =>
  getContentById(id)['donnees-personnelles'].context;
export const getDonneesPersonnellesSpecificCartoucheTexteById = id =>
  getContentById(id)['donnees-personnelles'].cartouche;
// a quoi servent vos réponses ?
export const getResponseUseText = id => getContentById(id)['a-quoi-servent-vos-reponses'].body;

// resultats
export const getSurveyResultsTitleById = id => getContentById(id).resultats.title;
export const getResultsMenuTitle = id => getContentById(id).resultats['menu-title'];
export const getSurveyResultsPictureUrlById = id => getContentById(id).resultats['picture-url'];
export const getSurveyResultsLegendeById = id => getContentById(id).resultats.legende;

// assistance
export const getListOptionsMailAssitance = (id, auth) =>
  getSurveyConfigurationById(id).listOptionsObjetMailAssistance.filter(e => e.auth === auth);
export const getListOptionsSurvey = id =>
  content.specifique
    .filter(element => element.id === id)
    .map(element => {
      return {
        value: element.id,
        displayValue: element.title,
      };
    });

// site enquête non accessible

export const getAccessibleContentById = id => content.specifique.find(e => e.id === id).accessible;

// faq
export const getFaqData = id =>
  getContentById(id)
    ['faq-data'].map(element => {
      return { ...element, type: 'specific' };
    })
    .concat(
      getGenericContent()['faq-data'].map(element => {
        return { ...element, type: 'general' };
      })
    )
    .map((element, index) => {
      return { ...element, id: index + 1 };
    });
