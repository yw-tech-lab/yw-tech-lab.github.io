import React from 'react';
import Projects from '../components/Projects.jsx';
import Nav from '../components/Nav.jsx';

export default function Home() {
  return (
    <>
      <Nav isHome={true} />

      {/* Top Banner */}
      <div className="bg-gradient-to-r from-indigo-50 via-pink-100 to-blue-50">
        <div className="panel">
          <h1 className="text-center">Your Name</h1>
          <p className="body-text-large max-w-2xl mx-auto text-center">
            Some tagline (e.g., "I bridge design and code to create intuitive digital products").
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="panel">
        <h2>About Me</h2>
        <p className="body-text-large">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
          pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
          aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
          aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
          ipsum dolor sit amet consectetur adipiscing elit.
        </p>
      </div>

      <Projects />
    </>
  );
}
