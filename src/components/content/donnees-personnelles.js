import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import {  getDonneesPersonnellesSpecificCartoucheTexteById , getDonneesPersonnellesSpecificContextTexteById  } from 'utils/read-content';

const DonneesPersonnelles = ({ id }) => (
  <div>
    <section>
      
    <ReactMarkdown source={getDonneesPersonnellesSpecificCartoucheTexteById(id)} linkTarget="_blank" />
      <br></br>
      <ReactMarkdown source={getDonneesPersonnellesSpecificContextTexteById(id)} linkTarget="_blank" />
    </section>
  </div>
);
export default DonneesPersonnelles;
DonneesPersonnelles.propTypes = {
  id: PropTypes.string.isRequired,
};
