import React from "react";
import { Document } from "react-pdf";

function About() {
  return (
    <div>
      <Document file="https://dawsontc003.github.io/responsive-portfolio/Assets/Dawson,%20Thomas%20Resume.pdf" />
    </div>
  );
}

export default About;
