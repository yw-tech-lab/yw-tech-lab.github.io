import React from 'react';
import { useParams } from 'react-router-dom';
import caseStudies from '../components/data.js';
import Projects from '../components/Projects';
import Device from '../components/Device';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const study = caseStudies.find((study) => study.id === id);

  if (!study) {
    return <Projects />;
  }

  return (
    <>
      <div className="bg-[#185977]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="grid grid-cols-4 gap-4 justify-center">
            <div className="col-span-2">
              <h2 className="text-3xl font-abril mb-6 text-white">Homepage</h2>
              <p className="text-lg text-white">
                We redesigned the CNE homepage to be welcoming to a wide range of visitors,
                including families, community educators, and donors. The hompage showcases CNE's
                services, current initiatives, and impact through an engaging, accessible design. It
                also highlights key accomplishments, answers common questions, and offers an easy
                way to connect.
              </p>
            </div>
            <div className="col-span-2 flex gap-5">
              <Device width="250px" imageUrl="/images/screenshots/mobile/homepage.png" />
              <Device width="250px" imageUrl="/images/screenshots/mobile/ccap.png" />
            </div>
          </section>
        </div>
      </div>
      <div className="bg-[#05aaad]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="grid grid-cols-4 gap-4 justify-center">
            <div className="col-span-2">
              <h2 className="text-3xl font-abril mb-6 text-gray-900">Impact</h2>
              <p className="text-lg text-gray-900">
                This page highlights CNE's impactful role as a leader in early childhood education.
                It shows their dedication to providing every child with a Strong Start to
                Kindergarten through initiatives like home visits, developmental screenings, and
                trauma-informed care.
              </p>
            </div>
            <div className="col-span-2 flex gap-5">
              <Device width="250px" imageUrl="/images/screenshots/mobile/impact.png" />
              <Device width="250px" imageUrl="/images/screenshots/mobile/programs-overview.png" />
            </div>
          </section>
        </div>
      </div>
      {/* Hero Section */}
      {/* <div className="mb-16">
          <h1 className="text-5xl font-abril mb-6">{study.title}</h1>
          <p className="text-lg font-semibold text-indigo-600">All placeholder / dummy text!</p>
          <p className="text-xl text-gray-600 mb-8">{study.description}</p>
        </div> */}

      {/* Overview Section */}
      {/* <section className="mb-16">
          <h2 className="text-3xl font-abril mb-6">Overview</h2>
          <p className="text-lg font-semibold text-indigo-600">All placeholder / dummy text!</p>
          <p className="text-lg text-gray-700 leading-relaxed">{study.details.overview}</p>
        </section> */}

      {/* Challenge & Solution Section */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
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
        </div> */}

      {/* Features Section */}
      {/* <section className="mb-16">
          <h2 className="text-3xl font-abril mb-6">Key Features</h2>
          <p className="text-lg font-semibold text-indigo-600">All placeholder / dummy text!</p>
          <ul className="pl-12">
            {study.details.results.map((result, index) => (
              <li key={index} className="list-disc text-lg">
                {result}
              </li>
            ))}
          </ul>
        </section> */}

      {/* Results Section */}
      {/* <div className="mb-16">
          <h2 className="text-3xl font-abril mb-6">Results</h2>
          <p className="text-lg font-semibold text-indigo-600">All placeholder / dummy text!</p>
          <ul className="pl-12">
            {study.details.results.map((result, index) => (
              <li key={index} className="list-disc text-lg">
                {result}
              </li>
            ))}
          </ul>
        </div> */}
    </>
  );
};

export default CaseStudyDetail;
