import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import caseStudies from '../components/data.js';
import Device from '../components/Device';
import Nav from '../components/Nav';
import Panel from '../components/Panel';
import Phone from '../components/Phone';
const CaseStudyDetail = () => {
  const { id } = useParams();
  const study = caseStudies.find((study) => study.id === id);

  // if the study is not found, redirect to the case studies page:
  if (!study) {
    return <Navigate to="/case-studies/" replace />;
  }

  return (
    <>
      <Nav />
      <Panel bgColor="bg-[#185977]" gridCols="grid-cols-12">
        {/* Left column */}
        <div className="col-span-6">
          <h2 className="text-3xl font-abril mb-6 text-white">Homepage</h2>
          <p className="text-lg text-white">
            We redesigned the CNE homepage to be welcoming to a wide range of visitors, including
            families, community educators, and donors. The hompage showcases CNE's services, current
            initiatives, and impact through an engaging, accessible design. It also highlights key
            accomplishments, answers common questions, and offers an easy way to connect.
          </p>
        </div>

        {/* Right column */}
        <div className="col-span-6 flex gap-5">
          {/* <Phone /> */}
          <Device width="200px" imageUrl="/images/screenshots/mobile/homepage.png" />
          <Device
            width="200px"
            className="top-[-30px]"
            imageUrl="/images/screenshots/mobile/ccap.png"
          />
        </div>
      </Panel>
      <Panel style={{ backgroundImage: 'linear-gradient(90deg, #bce2f6, #e8def1)' }}>
        {/* Left column */}
        <div className="col-span-6">
          <h2 className="text-3xl font-abril mb-6 text-gray-900">Impact</h2>
          <p className="text-lg text-gray-900">
            This page highlights CNE's impactful role as a leader in early childhood education. It
            shows their dedication to providing every child with a Strong Start to Kindergarten
            through initiatives like home visits, developmental screenings, and trauma-informed
            care.
          </p>
        </div>

        {/* Right column */}
        <div className="col-span-6 flex gap-5">
          <Device width="200px" imageUrl="/images/screenshots/mobile/impact.png" />
          <Device
            width="200px"
            className="top-[-30px]"
            imageUrl="/images/screenshots/mobile/programs-overview.png"
          />
        </div>
      </Panel>
      <Panel
        bgColor="bg-[#05aaad]"
        style={{ backgroundImage: 'linear-gradient(90deg, #bce2f6, #e8def1)' }}
      >
        <div className="col-span-8 col-start-3">
          <h2 className="text-3xl font-abril mb-6 text-gray-900">Programs</h2>
          <p className="text-lg text-gray-900 mb-12">
            To help parents and caregivers understand the importance of early childhood education,
            we created a simple program overview page, organized by age group. This page provides a
            clear and accessible explanation of CNE's various programs, including home visits,
            developmental screenings, childcare providers and supports, and more.
          </p>
          <img className="w-full" src="/images/screenshots/desktop/programs.png" alt="Programs" />
        </div>
      </Panel>
    </>
  );
};

export default CaseStudyDetail;
