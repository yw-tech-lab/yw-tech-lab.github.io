import React from 'react';
import Device from '../components/Device.jsx';
import Nav from '../components/Nav.jsx';

export default function AUX() {
  return (
    <>
      <Nav />

      {/* Section 1 */}
      <section className="bg-[#185977]">
        <div className="panel grid grid-cols-2">
          {/* Left column */}
          <div>
            <h2 className="mb-6 text-white">The Aux</h2>
            <p className="text-white">AUX text goes here...</p>
          </div>

          {/* Right column */}
          <div className="flex gap-5">
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
      <section className="bg-[#F0F0F0]">
        <div className="panel grid grid-cols-2">
          {/* Left column */}
          <div>
            <h2 className="mb-6">Blah blah blah</h2>
            <p>text text text</p>
          </div>

          {/* Right column */}
          <div className="flex gap-5">
            <Device width="200px" imageUrl="/images/screenshots/mobile/homepage.png" />
            <Device
              width="200px"
              className="top-[-30px]"
              imageUrl="/images/screenshots/mobile/ccap.png"
            />
          </div>
        </div>
      </section>
    </>
  );
}
