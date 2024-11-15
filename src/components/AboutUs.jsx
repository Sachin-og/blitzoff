import React from 'react';
import './AboutUs.css'; // Link to the CSS file

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Full wavy background */}
      <div className="full-wave"></div>
      {/* Overlay for text readability */}
      <div className="text-overlay"></div>

      {/* Content Container */}
      <div className="content-container">
        <h1 className="sea-heading">Dive into the Ocean of Celebrations!</h1>
        <p className="about-description">
          BLITZSCHLAG 2024, the largest annual cultural festival of Rajasthan and the crown jewel
          of the Malaviya National Institute of Technology Jaipur, ignites the spirit of the entire MNIT
          community! A vibrant tapestry of students woven together by a shared love for creativity
          and celebration. A carnival that offers a platform for students to unleash their talents,
          discover potential, and form lifelong bonds. From the exhilarating dance battles of RAMBA
          SAMBA to artistic masterpieces in the PRONITES, we offer an unparalleled stage for every passion
          to shine. BLITZSCHLAG is all about participating, connecting, and creating memories. Join us as we embark on a weekend of laughter and unforgettable experiences.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
