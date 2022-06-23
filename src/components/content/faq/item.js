import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import './faq.scss';

function FaqItem({ display, body, title, id, handleClick, handleKeyPress }) {
  const iconClass = display
    ? 'glyphicon glyphicon-chevron-down'
    : 'glyphicon glyphicon-chevron-right';

  return (
    <Panel
      id={`faq-item-${id}`}
      expanded={display}
      onToggle={() => true}
      onClick={() => handleClick(id)}
      onKeyPress={e => (e.key === 'Enter' ? handleClick(id) : '')}
      tabIndex="0"
    >
      <Panel.Heading>
        <Panel.Title>
          <i className={`${iconClass} panel-icon`} />
          {title}
        </Panel.Title>
      </Panel.Heading>
      <Panel.Collapse>
        <Panel.Body>
          <ReactMarkdown source={body} />
        </Panel.Body>
      </Panel.Collapse>
    </Panel>
  );
}
export default FaqItem;
FaqItem.propTypes = {
  display: PropTypes.bool.isRequired,
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};
