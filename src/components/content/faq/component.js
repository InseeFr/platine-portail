import React, { Component } from 'react';
import { getFaqData } from 'utils/read-content';
import PropTypes from 'prop-types';
import FaqItem from './item';

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = { itemDisplayed: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClick(id) {
    const { itemDisplayed } = this.state;
    if (id === itemDisplayed) this.setState({ itemDisplayed: 0 });
    else this.setState({ itemDisplayed: id });
  }

  handleKeyPress(event, id) {
    const { itemDisplayed } = this.state;
    if (event.keyCode === 13) {
      if (id === itemDisplayed) this.setState({ itemDisplayed: 0 });
      else this.setState({ itemDisplayed: id });
    }
  }

  render() {
    const { enquete } = this.props;
    const faqData = getFaqData(enquete);
    const { itemDisplayed } = this.state;
    return (
      <section>
        <h2>{`Questions générales`}</h2>
        {faqData.map(({ id, title, body, type }) =>
          type === 'general' ? (
            <FaqItem
              id={id}
              key={`faq-item-${id}`}
              title={title}
              body={body}
              handleClick={this.handleClick}
              handleKeyPress={this.handleKeyPress}
              display={itemDisplayed === id}
              tabIndex="0"
            />
          ) : null
        )}

        <h2>{`Questions relatives à l'enquête`}</h2>
        {faqData.map(({ id, title, body, type }) =>
          type === 'specific' ? (
            <FaqItem
              id={id}
              key={`faq-item-${id}`}
              title={title}
              body={body}
              handleClick={this.handleClick}
              display={itemDisplayed === id}
              tabIndex="0"
            />
          ) : null
        )}
      </section>
    );
  }
}
export default Faq;
Faq.propTypes = {
  enquete: PropTypes.string.isRequired,
};
