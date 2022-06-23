import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const SurveyDescription = ({ title, body }) => (
  <div>
    <section>
      <h2>{title}</h2>
      <p>
        <ReactMarkdown source={body} linkTarget="_blank" />
      </p>
    </section>
  </div>
);

export default SurveyDescription;

SurveyDescription.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
