import React from 'react';
import './Phone.css';

const Phone = () => {
  return (
    <div class="phone">
      <div class="phone-back">
        <div class="phone-left-side">
          <div class="phone-button top"></div>
          <div class="phone-button"></div>
          <div class="phone-button bottom"></div>
          <div class="phone-antena bottom"></div>
        </div>
        <div class="phone-bottom">
          <div class="phone-screw">
            <div></div>
          </div>
          <div class="phone-charger"></div>
          <div class="phone-screw right">
            <div></div>
          </div>
        </div>
      </div>
      <div class="phone-screen"></div>
      <div class="phone-display">
        <div class="phone-notch">
          <div class="phone-speaker"></div>
        </div>
        <div class="display-content">
          <img
            class="screenshot"
            src="https://yw-tech-lab.github.io/images/screenshots/mobile/homepage.png"
          />
          <div class="scroll-indicator">
            <div class="scroll-handle"></div>
          </div>
          <div class="home-button"></div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
