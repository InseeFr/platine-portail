import React from 'react';
import ReactMarkdown from 'react-markdown';
import { getIneligibleText } from 'utils/read-content';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NoSurveyPage = ({ id }) => {
  return (
    <>
      <div className="no-survey">
        <section>
          <p>
            <ReactMarkdown source={getIneligibleText()} linkTarget="_blank" />
            {` En cas de difficultés, vous pouvez `}
            <Link to={`/${id}/contacter-assistance`}>{`contacter l'assistance`}</Link>
          </p>
        </section>
      </div>
    </>
  );
};

export default NoSurveyPage;
NoSurveyPage.propTypes = {
  id: PropTypes.string.isRequired,
};
