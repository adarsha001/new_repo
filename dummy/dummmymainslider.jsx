import React, { useState } from "react";

const Mainslider = () => {
  const slides = [
    { image: "./images/saveee.jpeg" },
    { image: "./images/saveee.jpeg" },
    { image: "./images/saveee.jpeg" },
   
  ];

  return (
    <div className="m-auto max-w-[2000px] h-[780px] w-full py-16 px-4  overflow-hidden">
      <div
        style={{ background: `url(${slides[0].image})` }}
        className="flex w-full h-full bg-center bg-cover duration-500"
      >
        {slides.map((slide, i) => (
          <div key={i} className="">
            <img
              className="w-[1440px] h-[780px]"
              src={slide.image}
              alt={`Slide ${i}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mainslider;