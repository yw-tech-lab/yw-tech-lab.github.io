import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import Bio from './pages/Bio';

// ScrollToTop component to handle scroll restoration
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        {/* Depending on the URL, render the appropriate component: */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio/" element={<Bio />} />
          <Route path="/case-studies/" element={<CaseStudies />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
