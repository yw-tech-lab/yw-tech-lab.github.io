import React from 'react';
import PhoneDark from '../components/devices/PhoneDark.jsx';
import Nav from '../components/Nav.jsx';

export default function AUX() {
  return (
    <>
      <Nav />

      {/* Section 1 */}
      <section className="bg-[#185977]">
        <div className="panel two-column-layout">
          {/* Left column */}
          <div>
            <h2 className="mb-6 text-white">The Aux</h2>
            <p className="text-white">AUX text goes here...</p>
          </div>

          {/* Right column */}
          <div className="flex gap-5">
            <PhoneDark imageUrl="/images/the-aux/mobile/homepage.png" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-[#F0F0F0]">
        <div className="panel two-column-layout">
          {/* Left column */}
          <div>
            <h2 className="mb-6">Blah blah blah</h2>
            <p>text text text</p>
          </div>

          {/* Right column */}
          <PhoneDark imageUrl="/images/the-aux/mobile/wellness.png" />
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
          <img
            className="w-full"
            src="/images/the-aux/desktop/wellness.png"
            alt="The Wellness Collective"
          />
        </div>
      </section>
    </>
  );
}
