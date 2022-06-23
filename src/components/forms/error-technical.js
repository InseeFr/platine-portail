import React from 'react';
import PropTypes from 'prop-types';

const ErrorTechnical = ({ formRetryButtonHandler }) => (
  <div>
    <h2>Erreur technique</h2>
    <p>
      {`Nous avons rencontré un problème technique. Veuillez nous en excuser, vous pouvez réessayer ou contacter l’assistance.`}
    </p>
    <button type="button" className="btn btn-md" onClick={() => formRetryButtonHandler()}>
      {`Réessayer`}
    </button>
  </div>
);
export default ErrorTechnical;
ErrorTechnical.propTypes = {
  formRetryButtonHandler: PropTypes.func.isRequired,
};
