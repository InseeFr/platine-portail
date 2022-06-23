import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Main from 'components/main';
import Home from 'components/home';

/** adresse du fichier de conf. Les propriétées sont fetchées dans dans la méthode componentDidMount */
const apiConfigPath = `${window.location.origin}/configuration.json`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { urlBackEnd: null, isConfigLoaded: false, keycloakAuth: null };
  }

  componentDidMount() {
    fetch(apiConfigPath)
      .then(response => response.json())
      .then(data =>
        this.setState({
          urlBackEnd: data.urlColemanPromotionBack,
          isConfigLoaded: true,
          keycloakAuth: data.authType === 'keycloak',
        })
      );
  }

  render() {
    const { isConfigLoaded, urlBackEnd, keycloakAuth } = this.state;

    return (
      <>
        <Helmet htmlAttributes={{ lang: 'fr' }}>
          <title>{`Répondre à une enquête internet de l’Insee auprès des particuliers`}</title>
          <meta
            name="description"
            content={`Sélectionnez votre enquête sur le portail de l’Institut national de la statistique et des études économiques`}
          />
        </Helmet>

        {isConfigLoaded && (
          <>
            <BrowserRouter>
              <Switch>
                <Route
                  path="/:id"
                  render={routeProps => (
                    <Main {...routeProps} urlBackEnd={urlBackEnd} keycloakAuth={keycloakAuth} />
                  )}
                />

                <Route
                  exact
                  path="/"
                  render={routeProps => (
                    <Home {...routeProps} urlBackEnd={urlBackEnd} keycloakAuth={keycloakAuth} />
                  )}
                />
              </Switch>
            </BrowserRouter>
          </>
        )}
      </>
    );
  }
}
export default App;
