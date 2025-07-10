import React, { useRef, useState, useEffect } from 'react';
import './Laptop.css';

export default function Laptop({ imageUrl, width = '600px' }) {
  const [isDragging, setIsDragging] = useState(false);
  const [isHandleDragging, setIsHandleDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef(null);
  const screenshotRef = useRef(null);
  const scrollHandleRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  const getMaxScroll = () => {
    if (!screenshotRef.current || !containerRef.current) return 0;
    return screenshotRef.current.height - containerRef.current.clientHeight;
  };

  const updateScrollHandlePosition = () => {
    const maxScroll = getMaxScroll();
    if (maxScroll <= 0 || !scrollHandleRef.current || !scrollIndicatorRef.current) return;

    const scrollPercent = -scrollPosition / maxScroll;
    const handleTrackHeight = scrollIndicatorRef.current.clientHeight;
    const handleHeight = scrollHandleRef.current.clientHeight;
    const maxHandleTravel = handleTrackHeight - handleHeight;

    scrollHandleRef.current.style.top = `${scrollPercent * maxHandleTravel}px`;
  };

  const updateImageFromHandle = (clientY) => {
    if (!scrollHandleRef.current || !scrollIndicatorRef.current || !screenshotRef.current) return;

    const handleTrackHeight = scrollIndicatorRef.current.clientHeight;
    const handleHeight = scrollHandleRef.current.clientHeight;
    const maxHandleTravel = handleTrackHeight - handleHeight;
    const maxScroll = getMaxScroll();

    const scrollIndicatorRect = scrollIndicatorRef.current.getBoundingClientRect();
    const relativeY = clientY - scrollIndicatorRect.top - handleHeight / 2;
    const handlePosition = Math.max(0, Math.min(relativeY, maxHandleTravel));
    const scrollPercent = handlePosition / maxHandleTravel;
    const newScrollPosition = -scrollPercent * maxScroll;

    setScrollPosition(newScrollPosition);
    scrollHandleRef.current.style.top = `${handlePosition}px`;
    screenshotRef.current.style.transform = `translateY(${newScrollPosition}px)`;
  };

  const startImageDragging = (e) => {
    setIsDragging(true);
    setIsHandleDragging(false);
    setStartY(e.clientY - scrollPosition);
    if (screenshotRef.current) screenshotRef.current.style.cursor = 'grabbing';
    if (scrollHandleRef.current) scrollHandleRef.current.style.cursor = 'grabbing';
  };

  const startHandleDragging = (e) => {
    setIsDragging(true);
    setIsHandleDragging(true);
    if (scrollHandleRef.current) scrollHandleRef.current.style.cursor = 'grabbing';
    e.stopPropagation();
    updateImageFromHandle(e.clientY);
  };

  const drag = (e) => {
    if (!isDragging) return;

    const maxScroll = getMaxScroll();
    if (maxScroll <= 0) return;

    if (isHandleDragging) {
      updateImageFromHandle(e.clientY);
    } else {
      const newScrollPosition = e.clientY - startY;
      const boundedScrollPosition = Math.max(Math.min(newScrollPosition, 0), -maxScroll);
      setScrollPosition(boundedScrollPosition);
      if (screenshotRef.current) {
        screenshotRef.current.style.transform = `translateY(${boundedScrollPosition}px)`;
      }
      updateScrollHandlePosition();
    }
  };

  const stopDragging = () => {
    setIsDragging(false);
    setIsHandleDragging(false);
    if (screenshotRef.current) screenshotRef.current.style.cursor = 'grab';
    if (scrollHandleRef.current) scrollHandleRef.current.style.cursor = 'grab';
  };

  useEffect(() => {
    const handleMouseMove = (e) => drag(e);
    const handleMouseUp = () => stopDragging();
    const handleTouchMove = (e) => drag(e.touches[0]);
    const handleTouchEnd = () => stopDragging();

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, isHandleDragging, startY, scrollPosition]);

  useEffect(() => {
    if (screenshotRef.current) {
      screenshotRef.current.style.cursor = 'grab';
    }
    if (scrollHandleRef.current) {
      scrollHandleRef.current.style.cursor = 'grab';
    }
  }, []);

  useEffect(() => {
    if (screenshotRef.current?.complete) {
      updateScrollHandlePosition();
    } else {
      screenshotRef.current?.addEventListener('load', updateScrollHandlePosition);
      return () => {
        screenshotRef.current?.removeEventListener('load', updateScrollHandlePosition);
      };
    }
  }, []);
  return (
    <div className="laptop" ref={containerRef} style={{ width }}>
      <div className="content">
        <img
          ref={screenshotRef}
          src={imageUrl}
          alt="Device screenshot"
          className="screenshot"
          onMouseDown={startImageDragging}
          onTouchStart={(e) => startImageDragging(e.touches[0])}
        />
        <div className="scroll-indicator" ref={scrollIndicatorRef}>
          <div
            ref={scrollHandleRef}
            className="scroll-handle"
            style={{cursor: "grab", top: "0px"}}
            onMouseDown={startHandleDragging}
            onTouchStart={(e) => {
              startHandleDragging(e.touches[0]);
              e.preventDefault();
            }}
          />
        </div>
      </div>
      <div className="btm"></div>
    </div>
  );
}
