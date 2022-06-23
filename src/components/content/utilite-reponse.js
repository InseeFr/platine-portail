import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import {
  getResponseUseText,
  getReponseUseGenericText,
  getResponseUseGenericInformationText,
} from 'utils/read-content';

const UtiliteReponse = ({ id }) => (
  <div>
    <section>
      <p>
        <ReactMarkdown source={getReponseUseGenericText()} linkTarget="_blank" />
        <ReactMarkdown source={getResponseUseText(id)} linkTarget="_blank" />
        <br />
        <div className="centered">
          <ReactMarkdown source={getResponseUseGenericInformationText()} linkTarget="_blank" />
        </div>
      </p>
    </section>
  </div>
);
export default UtiliteReponse;
UtiliteReponse.propTypes = {
  id: PropTypes.string.isRequired,
};
