import React from 'react';
import Device from '../components/Device.jsx';
import Nav from '../components/Nav.jsx';

export default function CNE() {
  return (
    <>
      <Nav />

      {/* Section 1 */}
      <section className="bg-[#185977]">
        {/* Left column */}
        <div className="panel grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-3xl font-abril mb-6 text-white">Homepage</h2>
            <p className="text-lg text-white">
              We redesigned the CNE homepage to be welcoming to a wide range of visitors, including
              families, community educators, and donors. The hompage showcases CNE's services,
              current initiatives, and impact through an engaging, accessible design. It also
              highlights key accomplishments, answers common questions, and offers an easy way to
              connect.
            </p>
          </div>

          {/* Right column */}
          <div className="flex gap-5 mt-10 md:mt-0">
            <Device width="200px" imageUrl="/images/screenshots/mobile/homepage.png" />
            <Device
              width="200px"
              className="top-[-30px]"
              imageUrl="/images/screenshots/mobile/ccap.png"
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-[#F9F9F9]">
        <div className="panel grid grid-cols-2 gap-4">
          {/* Left column */}
          <div>
            <h2 className="text-3xl font-abril mb-6 text-gray-900">Impact</h2>
            <p className="text-lg text-gray-900">
              This page highlights CNE's impactful role as a leader in early childhood education. It
              shows their dedication to providing every child with a Strong Start to Kindergarten
              through initiatives like home visits, developmental screenings, and trauma-informed
              care.
            </p>
          </div>

          {/* Right column */}
          <div className="flex gap-5">
            <Device width="200px" imageUrl="/images/screenshots/mobile/impact.png" />
            <Device
              width="200px"
              className="top-[-30px]"
              imageUrl="/images/screenshots/mobile/programs-overview.png"
            />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ backgroundImage: 'linear-gradient(90deg, #bce2f6, #e8def1)' }}>
        <div className="panel max-w-4xl m-auto">
          <h2 className="text-3xl font-abril mb-6 text-gray-900">Programs</h2>
          <p className="text-lg text-gray-900 mb-12">
            To help parents and caregivers understand the importance of early childhood education,
            we created a simple program overview page, organized by age group. This page provides a
            clear and accessible explanation of CNE's various programs, including home visits,
            developmental screenings, childcare providers and supports, and more.
          </p>
          <img className="w-full" src="/images/screenshots/desktop/programs.png" alt="Programs" />
        </div>
      </section>
    </>
  );
}
