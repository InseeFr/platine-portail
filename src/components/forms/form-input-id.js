import React from 'react';
import PropTypes from 'prop-types';
import { idecLengthMin, idecLengthMax } from 'utils/properties';
import TextInput from 'components/form-elements/textInput';

export default class FormInputId extends React.Component {
  constructor(props) {
    super(props);
    const { idec } = this.props;
    this.state = { idec, disable: false };
  }

  onInputChange = e => {
    const { value } = e.target;
    const { onInputChange } = this.props;
    onInputChange(value);
    this.setState({ idec: value });
  };

  handleOnClick = () => {
    const { formSendButtonHandler } = this.props;
    const { idec } = this.state;
    if (idec.length < 7) {
      this.setState({ disable: true });
    } else {
      formSendButtonHandler(idec);
    }
  };

  handleOnFocus = () => {
    this.setState({ disable: false });
  };

  render() {
    const { idec, disable } = this.state;
    return (
      <div>
        <h2>{`Demande du mot de passe`}</h2>
        <p>{`Veuillez renseigner votre identifiant de collecte :`}</p>
        <label htmlFor="idec">
          {`Identifiant `}
          <sup>*</sup>
          {` (entre ${idecLengthMin} et ${idecLengthMax} caractères, exemple : N9XCZ3L)`}
        </label>
        <TextInput
          id="idec"
          name="idec"
          maxLength={idecLengthMax}
          size={idecLengthMax}
          width={idecLengthMax}
          value={idec}
          valid
          touched
          onFocus={() => this.handleOnFocus()}
          onChange={e => this.onInputChange(e)}
        />
        {disable ? (
          <div className="validation-error">
            {`Merci de renseigner un identifiant qui doit comporter entre ${idecLengthMin} et ${idecLengthMax} caractères`}
          </div>
        ) : (
          <></>
        )}
        <button
          type="button"
          disabled={disable}
          className="btn btn-md"
          onClick={() => this.handleOnClick()}
        >
          {`Envoyer`}
        </button>
        <p>(*) Champ obligatoire</p>
      </div>
    );
  }
}

FormInputId.propTypes = {
  formSendButtonHandler: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  idec: PropTypes.string.isRequired,
};
