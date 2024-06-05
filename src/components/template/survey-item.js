import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SurveyItem = ({ survey }) => (
  <div className="survey-item">
    <Link to={`/${survey.id}`} tabIndex="-1">
      <button type="button" className="btn btn-lg" id="boutonRepondre">
        <span>{survey.titleShort}</span>
        <br />
        {`${window.location.host}/${survey.id}`}
      </button>
    </Link>
  </div>
);

export default SurveyItem;
SurveyItem.propTypes = {
  survey: PropTypes.shape({
    id: PropTypes.string.isRequired,
    titleShort: PropTypes.string.isRequired,
  }).isRequired,
};
