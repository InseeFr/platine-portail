import React from 'react';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

const ResponseButton = ({ id, isSurveyOnLine, messageSurveyOffline,messageInfoSurveyOffline}) => {
  
  if(isSurveyOnLine === undefined) {
    return  (
      <div className="center-block text-center">
        <section style={{display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h3>{`Veuillez patienter`}</h3>
          <ReactLoading type="spin" color={`#0f417a`} width="50px"  />
        </section>
      </div>
    )
  } 

  return (
    <div className="center-block text-center">
      <section>
        <h2>{`Répondre à l'enquête`}</h2>
        <Link to={`/${id}/login`} tabIndex="-1">
          <button type="button" className="btn btn-lg" id="accessButton" disabled={!isSurveyOnLine}>
            {'Accéder au questionnaire'}
          </button>
        </Link>
        <p />
        {!isSurveyOnLine && (
          <>
            {messageSurveyOffline && <div className="surveyOver">{messageSurveyOffline}</div>}
            {messageInfoSurveyOffline && <p>{messageInfoSurveyOffline}</p>}
          </>
        )}
      </section>
    </div>
  );
};

export default ResponseButton;
