import React, { useEffect, useRef } from 'react';
import './PhoneDark.css';

const PhoneDark = ({ imageUrl }) => {
  const phoneRef = useRef(null);
  const phoneBackRef = useRef(null);
  const wrapperRef = useRef(null);

  // Create wrapper for phone
  const calculatePhoneDimensions = () => {
    const phone = phoneRef.current;
    const phoneBack = phoneBackRef.current;
    const wrapper = wrapperRef.current;

    if (!phone || !phoneBack || !wrapper) return;

    // Get the original dimensions from computed styles
    const backStyle = window.getComputedStyle(phoneBack);
    const originalWidth = parseFloat(backStyle.width);
    const originalHeight = parseFloat(backStyle.height);

    console.log('Original dimensions from CSS:', {
      width: originalWidth,
      height: originalHeight,
    });

    // Get the transform matrix
    const style = window.getComputedStyle(phone);
    const matrix = new DOMMatrix(style.transform);

    // Calculate the four corners of the original rectangle
    const corners = [
      { x: 0, y: 0 },
      { x: originalWidth, y: 0 },
      { x: originalWidth, y: originalHeight },
      { x: 0, y: originalHeight },
    ];

    // Transform each corner
    const transformedCorners = corners.map((corner) => ({
      x: corner.x * matrix.m11 + corner.y * matrix.m21 + matrix.m41,
      y: corner.x * matrix.m12 + corner.y * matrix.m22 + matrix.m42,
    }));

    // Find the bounds of the transformed rectangle
    const xCoords = transformedCorners.map((c) => c.x);
    const yCoords = transformedCorners.map((c) => c.y);
    const minX = Math.min(...xCoords);
    const maxX = Math.max(...xCoords);
    const minY = Math.min(...yCoords);
    const maxY = Math.max(...yCoords);

    // Calculate final dimensions
    let transformedWidth = maxX - minX;
    transformedWidth -= 0.075 * transformedWidth; // correcting for bounding box that's a little too big.
    const transformedHeight = maxY - minY;

    wrapper.style.width = `${transformedWidth}px`;
    wrapper.style.height = `${transformedHeight}px`;
  };

  useEffect(() => {
    calculatePhoneDimensions();

    // Add resize event listener
    const handleResize = () => {
      calculatePhoneDimensions();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const circleCursor =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='18' fill='%23a8d8ff' fill-opacity='0.6'/%3E%3C/svg%3E";

    const setupScreenshot = (screenshot) => {
      let isDragging = false;
      let startY = 0;
      let scrollPosition = 0;
      let isHandleDragging = false;

      const container = screenshot.parentElement;
      const scrollHandle = container.querySelector('.scroll-handle');
      const scrollIndicator = container.querySelector('.scroll-indicator');
      const phone = phoneRef.current;

      // Set initial cursors
      screenshot.style.cursor = `url("${circleCursor}") 20 20, auto`;
      scrollHandle.style.cursor = 'grab';

      const getMaxScroll = () => {
        const imageHeight = screenshot.naturalHeight;
        const containerHeight = container.clientHeight;
        return Math.max(0, imageHeight - containerHeight);
      };

      const updateScrollHandlePosition = () => {
        const maxScroll = getMaxScroll();
        if (maxScroll <= 0) return;

        const scrollPercent = -scrollPosition / maxScroll;
        const handleTrackHeight = scrollIndicator.clientHeight;
        const handleHeight = scrollHandle.clientHeight;
        const maxHandleTravel = handleTrackHeight - handleHeight;

        scrollHandle.style.top = `${scrollPercent * maxHandleTravel}px`;
      };

      const updateImageFromHandle = (clientY) => {
        const handleTrackHeight = scrollIndicator.clientHeight;
        const handleHeight = scrollHandle.clientHeight;
        const maxHandleTravel = handleTrackHeight - handleHeight;
        const maxScroll = getMaxScroll();

        const scrollIndicatorRect = scrollIndicator.getBoundingClientRect();
        const phoneMatrix = new DOMMatrix(window.getComputedStyle(phone).transform);
        const scale = phoneMatrix.m11;

        const localY = (clientY - scrollIndicatorRect.top) / scale;
        const relativeY = localY - handleHeight / 2;

        const handlePosition = Math.max(0, Math.min(relativeY, maxHandleTravel));
        const scrollPercent = handlePosition / maxHandleTravel;
        scrollPosition = -scrollPercent * maxScroll;

        scrollHandle.style.top = `${handlePosition}px`;
        screenshot.style.transform = `translateY(${scrollPosition}px)`;
      };

      const getLocalY = (clientY) => {
        const phoneRect = phone.getBoundingClientRect();
        const phoneMatrix = new DOMMatrix(window.getComputedStyle(phone).transform);
        const scale = phoneMatrix.m11;
        return (clientY - phoneRect.top) / scale;
      };

      const startImageDragging = (e) => {
        if (isHandleDragging) return;
        e.preventDefault();
        isDragging = true;
        isHandleDragging = false;
        startY = getLocalY(e.clientY);
        const transform = window.getComputedStyle(screenshot).transform;
        const matrix = new DOMMatrix(transform);
        scrollPosition = matrix.m42;
        screenshot.style.cursor = 'hand';
        scrollHandle.style.cursor = 'grabbing';
      };

      const startHandleDragging = (e) => {
        e.preventDefault();
        e.stopPropagation();
        isDragging = true;
        isHandleDragging = true;
        scrollHandle.style.cursor = 'grabbing';
        screenshot.style.cursor = 'grabbing';

        const transform = window.getComputedStyle(screenshot).transform;
        const matrix = new DOMMatrix(transform);
        scrollPosition = matrix.m42;

        const handleRect = scrollHandle.getBoundingClientRect();
        const phoneMatrix = new DOMMatrix(window.getComputedStyle(phone).transform);
        const scale = phoneMatrix.m11;
        startY = (e.clientY - handleRect.top) / scale;
      };

      const drag = (e) => {
        if (!isDragging) return;

        const maxScroll = getMaxScroll();
        if (maxScroll <= 0) return;

        if (isHandleDragging) {
          updateImageFromHandle(e.clientY);
        } else {
          const currentY = getLocalY(e.clientY);
          const deltaY = currentY - startY;
          startY = currentY;
          const newPosition = scrollPosition + deltaY;
          scrollPosition = Math.max(Math.min(newPosition, 0), -maxScroll);
          screenshot.style.transform = `translateY(${scrollPosition}px)`;
          updateScrollHandlePosition();
        }
      };

      const stopDragging = () => {
        isDragging = false;
        isHandleDragging = false;
        screenshot.style.cursor = `url("${circleCursor}") 20 20, auto`;
        scrollHandle.style.cursor = 'grab';
      };

      // Mouse events
      screenshot.addEventListener('mousedown', startImageDragging, { passive: false });
      scrollHandle.addEventListener('mousedown', startHandleDragging, { passive: false });
      document.addEventListener('mousemove', drag);
      document.addEventListener('mouseup', stopDragging);

      // Touch events
      screenshot.addEventListener('touchstart', (e) => startImageDragging(e.touches[0]), {
        passive: false,
      });
      scrollHandle.addEventListener(
        'touchstart',
        (e) => {
          startHandleDragging(e.touches[0]);
          e.preventDefault();
        },
        { passive: false }
      );
      document.addEventListener(
        'touchmove',
        (e) => {
          drag(e.touches[0]);
          e.preventDefault();
        },
        { passive: false }
      );
      document.addEventListener('touchend', stopDragging);

      // Initialize handle position
      if (screenshot.complete) {
        updateScrollHandlePosition();
      } else {
        screenshot.addEventListener('load', updateScrollHandlePosition);
      }

      // Cleanup function
      return () => {
        screenshot.removeEventListener('mousedown', startImageDragging);
        scrollHandle.removeEventListener('mousedown', startHandleDragging);
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDragging);
        screenshot.removeEventListener('touchstart', startImageDragging);
        scrollHandle.removeEventListener('touchstart', startHandleDragging);
        document.removeEventListener('touchmove', drag);
        document.removeEventListener('touchend', stopDragging);
        screenshot.removeEventListener('load', updateScrollHandlePosition);
      };
    };

    // Setup all screenshots
    const screenshots = document.querySelectorAll('.screenshot');
    const cleanupFunctions = Array.from(screenshots).map(setupScreenshot);

    // Cleanup function
    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div className="phone-wrapper" ref={wrapperRef}>
      <div className="phone" ref={phoneRef}>
        <div className="phone-back" ref={phoneBackRef}>
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
            <img class="screenshot" src={imageUrl} />
            <div class="scroll-indicator">
              <div class="scroll-handle"></div>
            </div>
            <div class="home-button"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDark;
