import React from 'react';
import Projects from '../components/Projects.jsx';
import Banner from '../components/Banner.jsx';
import About from '../components/About.jsx';
import Nav from '../components/Nav.jsx';
const Home = () => {
  return (
    <>
      <Nav isHome={true} />
      <Banner />
      <About />
      <Projects />
    </>
  );
};

export default Home;
