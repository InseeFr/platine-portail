import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import {getAccessibleContentById} from 'utils/read-content';

const Accessibilite = ({ title, body, id }) => (
  <div>
    <section>
      <h2>{title}</h2>
      <p>
        {undefined===getAccessibleContentById(id) ?
        <ReactMarkdown source={body} linkTarget="_blank" />:
        <ReactMarkdown source={getAccessibleContentById(id)} linkTarget="_blank" />}
      </p>
    </section>
  </div>
);

export default Accessibilite;
Accessibilite.propTypes = {
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
