// src/components/TextSlider.js
import React, { useEffect, useRef } from 'react';
import './TextSlider.css'; // Importar el archivo CSS

const TextSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let clone1 = slider.innerHTML;
    let clone2 = slider.innerHTML;
    slider.innerHTML += clone1 + clone2;
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full bg-gray-200">
      <div
        ref={sliderRef}
        className="flex text-lg animate-marquee"
      >
        <span className="text-black font-bold mx-4">tequeño queso</span>
        <span className="text-black font-bold mx-4">queso y jamon</span>
        <span className="text-black font-bold mx-4">tequeños</span>
        {/* Agrega más spans si es necesario */}
      </div>
    </div>
  );
};

export default TextSlider;
