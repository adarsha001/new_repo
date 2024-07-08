import React, { useEffect, useState } from "react";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const Category = () => {
  const [categories, setcategories] = useState([]);
  const [slides, setslides] = useState(0);

  const fetchCategory = async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    setcategories(data);
    console.log(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const nextslide = () => {
    setslides((slides + 1) % categories.length);
  };

  const prevslide = () => {
    setslides((slides - 1 + categories.length) % categories.length);
  };

  return (
    <>
      <div className=" flex max-w-[1200px] mx-auto z-20">
        <div className=" flex items-center my-5 justify-between ">
          <div className="text-[20px] font-bold">category</div>
          <div className=" sm:block">
            <div
              className="w-[30px] h-[30px] bg-gray-700 rounded-3xl mx -3 text-white flex justify-center items-center"
              onClick={prevslide}
            >
              <FaLongArrowAltLeft />
            </div>
            <div
              className="w-[30px] h-[30px] bg-gray-700 rounded-3xl mx-3 text-white flex justify-center items-center "
              onClick={nextslide}
            >
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
      </div>
      <div className="flex border border-red-500 mt-3 mx-4 overflow-hidden z-0 justify-center">
        <div className="flex justify-center ">
          {categories.map((cat, i) => (
            <div
              key={i}
              style={{
                transform: `translateX(-${(i - slides) * 100}%)`,
                transition: "transform 0.5s ease",
              }}
              className="w-[150px] z-0 p-2 shrink-0 duration-500"
            >
              <img src={cat.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
<div className="category-">
<div className=" flex jus">Categary</div>
<div className= "mx-auto flex gap-2 md:gap-5 w-[100px]  ">
  {list.map((item, index) => (
    <div key={index} className="product-item  " style={{transform:`translate(90%)`}}>
      <div className="product-wrapper border-[2px]  z-[1] hover:scale-110 transition-all duration-300 ease-in-out shadow-xl shadow-black">
        <video
          className="absolute top-0 z-0  opacity-0 hover:opacity-50 object-cover"
          autoPlay
          loop
          playsInline
        >
          <source src={item.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img src={item.image} className="" alt="" />
      </div>
    </div>
  ))} 
</div>
</div>