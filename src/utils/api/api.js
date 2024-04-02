import Axios from 'axios';
import { pathEmail, pathGetUrlQuestionnaire, pathUser, pathIsSurveyOnline } from 'utils/properties';
import { authentication, getHeader } from './utils';

export const getQuestionnaireUrl = (apiUrl, keycloakAuth) => {
  if (keycloakAuth) {
    return new Promise((resolve, reject) => {
      authentication()
        .then(() => {
          Axios.get(`${apiUrl}${pathGetUrlQuestionnaire}`, {
            headers: getHeader(),
          })
            .then(res => resolve(res))
            .catch(e => reject(e));
        })
        .catch(e => reject(new Error(`Error during refreshToken : ${e.message}`)));
    });
  }
  return new Promise((resolve, reject) => {
    Axios.get(`${apiUrl}${pathGetUrlQuestionnaire}`, {
      headers: {
        Accept: 'application/json;charset=utf-8',
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => resolve(res))
      .catch(e => reject(e));
  });
};

export const getMailFromLdap = apiUrl => {
  return new Promise((resolve, reject) => {
    authentication()
      .then(() => {
        Axios.get(`${apiUrl}${pathUser}${pathEmail}`, {
          headers: getHeader(),
          responseType: 'text',
        })
          .then(res => resolve(res))
          .catch(e => reject(e));
      })
      .catch(e => reject(new Error(`Error during refreshToken : ${e.message}`)));
  });
};

export const putMailToLdap = apiUrl => mail => {
  return new Promise((resolve, reject) => {
    authentication()
      .then(() => {
        Axios.put(`${apiUrl}${pathUser}${pathEmail}`, mail, {
          headers: getHeader(),
          responseType: 'text',
        })
          .then(res => resolve(res))
          .catch(e => reject(e));
      })
      .catch(e => reject(new Error(`Error during refreshToken : ${e.message}`)));
  });
};

export const isSurveyOnLine = apiUrl => surveyId => {
  return new Promise((resolve, reject) => {
    Axios.get(`${apiUrl}${pathIsSurveyOnline}/${surveyId}`, {
      responseType: 'text',
    })
      .then(res => resolve(res))
      .catch(e => reject(e));
  });
};
