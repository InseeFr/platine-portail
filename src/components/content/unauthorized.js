import React from 'react';
import ReactMarkdown from 'react-markdown';
import { getUnauthorizedText } from 'utils/read-content';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UnauthorizedPage = ({ id }) => {
  return (
    <>
      <div className="no-survey">
        <section>
          <p>
            <ReactMarkdown source={getUnauthorizedText()} linkTarget="_blank" />
            {` En cas de difficultés, vous pouvez `}
            <Link to={`/${id}/contacter-assistance`}>{`contacter l'assistance`}</Link>
          </p>
        </section>
      </div>
    </>
  );
};

export default UnauthorizedPage;
UnauthorizedPage.propTypes = {
  id: PropTypes.string.isRequired,
};
