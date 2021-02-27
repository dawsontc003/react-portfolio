import React, { useState } from "react";
import { Document, Page } from "react-pdf";

function About() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages, pageNumber }) {
    setNumPages(numPages);
    setPageNumber(pageNumber);
  }

  return (
    <div>
      <Document
        file="https://dawsontc003.github.io/responsive-portfolio/Assets/Dawson,%20Thomas%20Resume.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default About;
