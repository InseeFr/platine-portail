import React from 'react';
import Banner from 'components/template/banner';
import FooterMenu from 'components/template/footer-menu';
import { getSurveys } from 'utils/read-content';
import SurveyItem from 'components/template/survey-item';

const Home = () => (
  <div id="main">
    <Banner title={`Portail de réponse aux enquêtes de l'Insee\r\n auprès des particuliers`} />

    <div className="row">
      <div className="col-md-12 text-justify">
        <section>
          <h2>{`Sélectionnez votre enquête`} </h2>
          <div className="surveys-list">
            {getSurveys().map(element => (
              <SurveyItem survey={element} />
            ))}
          </div>
        </section>
      </div>
      <div className="footer">
        <FooterMenu home />
      </div>
    </div>
  </div>
);

export default Home;
