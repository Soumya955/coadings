import React from 'react';
import { Document, Page } from 'react-pdf';

const PDFViewer = ({ pdfFile }) => {
  return (
    <Document file={pdfFile}>
      {Array.from({ length: pdfFile.numPages }, (_, page) => (
        <Page key={`page_${page + 1}`} pageNumber={page + 1} />
      ))}
    </Document>
  );
};

export default PDFViewer;
