import React from 'react';
import { useParams } from 'react-router-dom';
import caseStudies from '../components/data.js';
import Projects from '../components/Projects';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const study = caseStudies.find((study) => study.id === id);

  if (!study) {
    return <Projects />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-abril mb-6">{study.title}</h1>
        <p className="text-xl text-gray-600">{study.description}</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: study.content }} />
      </div>
    </div>
  );
};

export default CaseStudyDetail;
