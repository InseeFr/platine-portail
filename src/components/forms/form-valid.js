import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ValidForm = ({ idec, id }) => (
  <>
    <div className="sendMdp">
      <h2>Votre demande est prise en compte</h2>
      <p>
        {`Vous avez demandé une réinitialisation de mot de passe pour l'identifiant ${idec}.
        `}
      </p>
      <p>
        {id === 'eec'
          ? 'Si votre compte existe, un nouveau mot de passe vous parviendra par mail dans quelques instants.'
          : 'Si votre compte existe, un nouveau mot de passe vous parviendra par mail dans quelques instants, ou par courrier dans les prochains jours.'}
        {` En cas de difficultés, vous pouvez `}
        <Link to={`/${id}/contacter-assistance`}>{`contacter l'assistance`}</Link>
      </p>
    </div>
  </>
);
export default ValidForm;
ValidForm.propTypes = {
  idec: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
