import React from 'react';
import Nav from '../components/Nav.jsx';
const Bio = () => {
  return (
    <>
      <Nav />
      <section className="panel">
        <h2>About Me</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <p className="body-text">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien
              vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus
              leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus
              bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
              hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia
              nostra inceptos himenaeos. Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
            <p className="body-text">
              Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium
              tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
              fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia
              integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora
              torquent per conubia nostra inceptos himenaeos.
            </p>
          </div>
          <div>Some image or interesting asset?</div>
        </div>
      </section>
    </>
  );
};

export default Bio;
