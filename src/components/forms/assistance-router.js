import React from 'react';
import PropTypes from 'prop-types';
import ValidForm from 'components/forms/form-valid';
import FormInputId from 'components/forms/form-input-id';
import ErrorTechnical from 'components/forms/error-technical';
import { pathPassword } from 'utils/properties';
import Axios from 'axios';

class AssistanceRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idec: '',
      displayInputId: true,
      displayValidForm: false,
      displayErrorTechnical: false,
      idue: this.getIdueQueryParam(props.location),
    };
  }

  getIdueQueryParam = url => {
    const urlSearch = new URLSearchParams(url.search);
    return urlSearch.get('idue');
  };

  formSendButtonHandler = idec => {
    const { urlBackEnd } = this.props;
    Axios.post(urlBackEnd + pathPassword, null, {
      params: {
        idec,
      },
    })
      .then(res => {
        console.log(res.status);
        console.log(res.data.status);
        console.log(res.data.status);
        this.setState({
          displayValidForm: true,
          displayInputId: false,
          displayErrorTechnical: false,
          idec,
        });
      })
      .catch(error => {
        this.setState({
          displayInputId: false,
          displayValidForm: false,
          displayErrorTechnical: true,
        });
      });
  };

  onInputChange = idec => {
    this.setState({ idec });
  };

  formCancelButtonHandler = () => {
    const { history, id } = this.props;
    history.push(`/${id}/login`);
  };

  formContactButtonHandler = () => {
    const { history, id } = this.props;
    const { displayErrorTechnical, idec } = this.state;
    const state = {
      idec: displayErrorTechnical ? idec : '',
    };

    history.push({
      pathname: `/${id}/contacter-assistance`,
      state,
    });
  };

  formRetryButtonHandler = () => {
    const { history, id } = this.props;
    history.push(`/${id}/assistance`);
  };

  render() {
    const { displayValidForm, displayErrorTechnical, displayInputId, idec } = this.state;
    const { id } = this.props;

    return (
      /* id === 'fpe' ? (
      <>
        {auth ? (
          <Redirect to={`/fpe/contacter-assistance/auth?idue=${idue}`} />
        ) : (
          <Redirect to="/fpe/contacter-assistance" />
        )}
      </> */

      <section>
        {displayInputId && (
          <FormInputId
            formSendButtonHandler={this.formSendButtonHandler}
            onInputChange={this.onInputChange}
            idec={idec}
          />
        )}
        {displayValidForm && <ValidForm idec={idec} id={id} />}

        {displayErrorTechnical && (
          <ErrorTechnical formRetryButtonHandler={this.formRetryButtonHandler} />
        )}
        <div className="btn-group">
          {!(displayErrorTechnical || displayValidForm) && (
            <button type="button" className="btn btn-md" onClick={this.formCancelButtonHandler}>
              {`Retour`}
            </button>
          )}
          {!displayValidForm && (
            <button type="button" className="btn btn-md" onClick={this.formContactButtonHandler}>
              {`Contacter l'assistance`}
            </button>
          )}
        </div>
      </section>
    );
  }
}

export default AssistanceRouter;
AssistanceRouter.propTypes = {
  urlBackEnd: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  auth: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};
