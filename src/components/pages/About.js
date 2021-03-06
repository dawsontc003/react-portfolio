import React, { useState } from "react";

function About() {
  return (
    <div>
      <a
        href="https://dawsontc003.github.io/responsive-portfolio/Assets/Dawson,%20Thomas%20Resume.pdf"
        target="_blank"
      >
        <img
          href="https://dawsontc003.github.io/responsive-portfolio/Assets/Dawson,%20Thomas%20Resume.pdf"
          src="https://dawsontc003.github.io/responsive-portfolio/Assets/resume-page1.GIF"
          class="card-img-to"
          alt="Resume page 1"
          width="60%"
          height="60%"
        ></img>
        <img
          src="https://dawsontc003.github.io/responsive-portfolio/Assets/resume-page2.GIF"
          class="card-img-to"
          alt="Resume page 2"
          width="60%"
          height="60%"
        ></img>
      </a>
    </div>
  );
}

export default About;
