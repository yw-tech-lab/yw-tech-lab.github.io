import React from 'react';
import Device from '../components/devices/Device.jsx';
import Nav from '../components/Nav.jsx';

export default function EYC() {
  return (
    <>
      <Nav />

      {/* Section 1 */}
      <section className="bg-[#f1ce71]">
        <div className="panel two-column-layout">
          {/* Left column */}
          <div>
            <h2 className="mb-6">Embrace Your Crown</h2>
            <p>EYC text goes here...</p>
          </div>

          {/* Right column */}
          <div className="flex gap-5">
            <Device width="200px" imageUrl="/images/cne/mobile/homepage.png" />
            <Device width="200px" className="top-[-30px]" imageUrl="/images/cne/mobile/ccap.png" />
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
          <div className="flex gap-5">
            <Device width="200px" imageUrl="/images/cne/mobile/homepage.png" />
            <Device width="200px" className="top-[-30px]" imageUrl="/images/cne/mobile/ccap.png" />
          </div>
        </div>
      </section>
    </>
  );
}
