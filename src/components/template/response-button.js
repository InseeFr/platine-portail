import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { isSurveyOnLine } from 'utils/api';
import {
  getSurveyOfflineMessageById,
  getSurveyOfflineMessageInfoById,
} from '../../utils/read-content';

const ResponseButton = ({ id, urlBackEnd }) => {
  const [surveyOnLine, setSurveyOnLine] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await isSurveyOnLine(urlBackEnd)(id);
        if (response.data && response.data.opened === false) {
          setSurveyOnLine(false);
        } else {
          setSurveyOnLine(true);
        }
      } catch (error) {
        console.error('Error checking survey online:', error);
        setSurveyOnLine(false);
      }
    };

    fetchData();
  }, [id, urlBackEnd]);

  return (
    <div className="center-block text-center">
      <section>
        <h2>{`Répondre à l'enquête`}</h2>
        <Link to={`/${id}/login`} tabIndex="-1">
          <button type="button" className="btn btn-lg" id="boutonRepondre" disabled={!surveyOnLine}>
            {'Accéder au questionnaire'}
          </button>
        </Link>
        <p />
        {!surveyOnLine && (
          <>
            <div className="surveyOver">{getSurveyOfflineMessageById(id)}</div>
            <p>{getSurveyOfflineMessageInfoById(id)}</p>
          </>
        )}
      </section>
    </div>
  );
};

export default ResponseButton;
