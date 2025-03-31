// src/components/TextSlider.js
import React, { useEffect, useRef } from 'react';
import './TextSlider.css'; 

const TextSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let clone1 = slider.innerHTML;
    let clone2 = slider.innerHTML;
    slider.innerHTML += clone1 + clone2;
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full bg-[#f1d06b]">
      <div
        ref={sliderRef}
        className="flex text-lg animate-marquee"
      >
        <span className="text-[#36180d] font-bold mx-4">tequeño queso</span>
        <span className="text-[#36180d] font-bold mx-4">queso y jamon</span>
        <span className="text-[#36180d] font-bold mx-4">tequeños</span>
      </div>
    </div>
  );
};

export default TextSlider;
