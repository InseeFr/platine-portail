import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class PdfViewer extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  onClickHandler = value => {
    const { numPages, pageNumber } = this.state;

    if (value + pageNumber > 0 && value + pageNumber < numPages + 1) {
      this.setState({ pageNumber: value + pageNumber });
    }
  };

  render() {
    const { pageNumber, numPages } = this.state;
    const { file } = this.props;
    return (
      <section>
        <Document file={file} onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <button type="button" onClick={() => this.onClickHandler(-1)}>{`Page précédente`}</button>
        <button type="button" onClick={() => this.onClickHandler(1)}>{`Page suivante`}</button>
        <p>{`Page ${pageNumber} sur ${numPages}`}</p>
      </section>
    );
  }
}
PdfViewer.propTypes = {
  file: PropTypes.string.isRequired,
};
