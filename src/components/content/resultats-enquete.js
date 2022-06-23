import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

function ResultatsEnquete({ title, pictureUrl, legende }) {
  return (
    <>
      <section>
        <h2>{title}</h2>
        <Image src={`${window.location.origin}/${pictureUrl}`} responsive />
        <br />
        <p>
          <ReactMarkdown source={legende} linkTarget="_blank" />
        </p>
      </section>
    </>
  );
}
export default ResultatsEnquete;

ResultatsEnquete.propTypes = {
  title: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  legende: PropTypes.string.isRequired,
};
