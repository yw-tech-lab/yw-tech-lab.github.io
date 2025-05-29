import React from 'react';
import Projects from '../components/Projects.jsx';
import Nav from '../components/Nav.jsx';

export default function Home() {
  return (
    <>
      <Nav isHome={true} />

      {/* Top Banner */}
      <div className="bg-background-50">
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
          Coming from a background in customer service, I've always cared about helping people and
          making their experience better. That's what led me to front-end development – where I can
          use code to solve problems and improve the way people interact with technology. I'm still
          early in my journey, but I'm excited to keep learning and building tools that make things
          simpler, smoother, and more enjoyable.
        </p>
      </div>

      <Projects />
    </>
  );
}
