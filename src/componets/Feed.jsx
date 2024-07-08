import React from "react";
import Slider from "react-slick";
import { useContext } from "react";
import { CounterContext } from "../../context/context";

function AutoPlay() {
  const counterState = useContext(CounterContext);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    {
      image: "./banner/Buy_2_get_1_free_1.webp",
      text: "https://prabhubhakti.com/",
    },
    {
      image: "./banner/PrintedTees-Banner-Desktop-260424-03.webp",
      text: "https://www.mydesignation.com/",
    },
    { image: "./banner/yall-banner-3.webp", text: "https://yall.co.in/" },
    {
      image: "./banner/2875820240630120141.webp",
      text: "https://www.thesouledstore.com/",
    },
    {
      image: "./banner/linen_cf63df7e-2d5f-4a70-8d74-eda3253a8389_1200x.webp",
      text: "https://thehouseofrare.com/",
    },
    { image: "banner/MONSTER-MURPHY.webp", text: "https://wrogn.com/" },
  ];

  const handleInnerClick = (event) => {
    event.stopPropagation();
    console.log("Inner clicked");
  };

  return (
  
      <div
        className={`mx-auto min:w-full  h-[25vh] sm:h-[34vh] md:h-[65vh] lg:h-[77vh] ${
          counterState.open ? "w-[50vw]" : "w-[82vw]"
        } ${counterState.open ? "sm:w-[70vw]" : "sm:w-[90vw]"} ${
          counterState.open ? "md:w-[80vw]" : "md:w-[95vw]"
        } pt-1 z-40 pb-8 pl-2 overflow-x-hidden glass`}
      >
        <div className="slider-container">
          <Slider {...settings}>
            {slides.map((slide, i) => (
              <div key={i}>
                <div className="relative">
                  <a
                    href={slide.text}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    onClick={handleInnerClick}
                  >
                    <img
                      className=" object-contain sm:object-fill p-1 w-full h-[18vh] sm:h-[27vh] md:h-[58vh] lg:h-[70vh]"
                      src={slide.image}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
   
  );
}

export default AutoPlay;

