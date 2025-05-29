import React from 'react';
import Nav from '../components/Nav.jsx';
const Bio = () => {
  return (
    <>
      <Nav />
      <section className="panel">
        <div className="two-column-layout">
          <h2 className="md:col-span-2">About Me</h2>
          <div>
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
          <div className="bg-indigo-100">
            <div className="p-16 flex justify-center items-center h-full min-h-[300px]">
              <p>Maybe a picture here?</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bio;
