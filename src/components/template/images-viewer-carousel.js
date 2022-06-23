import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class ImagesViewerCarousel extends Component {
  state = {
    numImages: null,
    imageNumber: 1,
    rep: this.props,
  };

  render() {
    const { rep } = this.props;
    return (
      <section>
        <div className="carousel-wrapper">
          <Carousel showArrows useKeyboardArrows labels>
            <div>
              <img src={`${rep}/img-01.png`} alt="recto LA" />
            </div>
            <div>
              <img src={`${rep}/img-02.png`} alt="verso LA" />
            </div>
            <div>
              <img src={`${rep}/img-03.png`} alt="mail avis" />
            </div>
          </Carousel>
        </div>
      </section>
    );
  }
}
