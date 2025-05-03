import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects';
import Banner from './components/Banner';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Nav from './components/Nav';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Projects />
              </>
            }
          />
          <Route
            path="/case-studies/:id"
            element={
              <>
                <Nav />
                <CaseStudyDetail />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
