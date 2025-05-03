import React from 'react';
import { useParams } from 'react-router-dom';
import caseStudies from '../components/data.js';
import Projects from '../components/Projects';
import { Link } from 'react-router-dom';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const study = caseStudies.find((study) => study.id === id);

  if (!study) {
    return <Projects />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-5xl font-abril mb-6">{study.title}</h1>
        <p className="text-lg font-semibold text-indigo-600">All placeholder / dummy text!</p>
        <p className="text-xl text-gray-600 mb-8">{study.description}</p>
      </div>

      {/* Overview Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-abril mb-6">Overview</h2>
        <p className="text-lg font-semibold text-indigo-600">All placeholder / dummy text!</p>
        <p className="text-lg text-gray-700 leading-relaxed">{study.details.overview}</p>
      </section>

      {/* Challenge & Solution Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <section>
          <h2 className="text-3xl font-abril mb-6">The Challenge</h2>
          <p className="text-lg font-semibold text-indigo-600">All placeholder / dummy text!</p>
          <p className="text-lg text-gray-700 leading-relaxed">{study.details.challenge}</p>
        </section>
        <section>
          <h2 className="text-3xl font-abril mb-6">Our Solution</h2>
          <p className="text-lg font-semibold text-indigo-600">All placeholder / dummy text!</p>
          <p className="text-lg text-gray-700 leading-relaxed">{study.details.solution}</p>
        </section>
      </div>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-abril mb-6">Key Features</h2>
        <p className="text-lg font-semibold text-indigo-600">All placeholder / dummy text!</p>
        <ul className="pl-12">
          {study.details.results.map((result, index) => (
            <li key={index} className="list-disc text-lg">
              {result}
            </li>
          ))}
        </ul>
      </section>

      {/* Results Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-abril mb-6">Results</h2>
        <p className="text-lg font-semibold text-indigo-600">All placeholder / dummy text!</p>
        <ul className="pl-12">
          {study.details.results.map((result, index) => (
            <li key={index} className="list-disc text-lg">
              {result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
