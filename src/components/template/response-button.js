import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { isSurveyOnLine } from 'utils/api';

const ResponseButton = ({ id,  urlBackEnd}) => {
  const [surveyOnLine, setSurveyOnLine] = useState(undefined);
  const [messageSurveyOffline, setMessageSurveyOffline] = useState("");
  const [messageInfoSurveyOffline, setMessageInfoSurveyOffline] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await isSurveyOnLine(urlBackEnd)(id);
          if (response.data && response.data.opened === false) {
            setSurveyOnLine(false);
            setMessageSurveyOffline(response.data.messageSurveyOffline);
            setMessageInfoSurveyOffline(response.data.messageInfoSurveyOffline);
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
  
  if(surveyOnLine === undefined) {
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
          <button type="button" className="btn btn-lg" id="accessButton" disabled={!surveyOnLine}>
            {'Accéder au questionnaire'}
          </button>
        </Link>
        <p />
        {!surveyOnLine && (
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
