import React from 'react';
import { useFilterContext } from '../../../context/filtercontest';
import { NavLink } from 'react-router-dom';

const Category = () => {
  const { all_product, updateFilterValue } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newVal = data.map((item) => item[property]);
    
    return ['all', ...new Set(newVal)];
  };

  const categoryOnlyData = getUniqueData(all_product, 'category');
  // const list = [
  //   {
  //     name: "Product 8",
  //     image: "/images/edVjxLfiSI-2UCxP0fBVpA-removebg-preview.jpg",
  //     video: "/images/Neon street figure lighting night video - motion green screen - music background video effects hd.mp4",
  //   },
  //   {
  //     name: "Product 8",
  //     image: "images/vDJxVjPdTJKPm55Ahu9wSQ-removebg-preview.jpg",
  //     video: "/images/Neon street figure lighting night video - motion green screen - music background video effects hd.mp4",
  //   },
  // ]

  return (<>
        {/* <div className="category- w-[100%] justify-center flex flex-col md:h-[20vh] pb-5 h-[35vh] lg:h-[250px]">
        <div className=" text-center ">Categary</div>
        <div className="gap-2 md:gap-5 items-center flex flex-col justify-center mx-auto w-[90px] lg:w-[300px] md:flex-row">
    {list.map((item, index) => (
      <div key={index} className="">
        <div className="relative border-[2px] md:w-[100px] lg:w-[200px] hover:scale-110 transition-all pb-3 duration-300 ease-in-out">
          <video
            className="absolute z-0 top-0 left-0 w-full opacity-0 hover:opacity-40 h-full object-cover"
            autoPlay
            loop
            playsInline
          >
            <source src={item.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img src={item.image} className="z-[1]" alt="" />
        </div>
      </div>
    ))}
  </div> */}
  
      {/* </div> */}
    <div className="p-4">
      {categoryOnlyData.map((category, index) => (
       <NavLink to={"/category"}>
        <button
          className="m-4  glass pr-4 pl-4 hover:bg-white transition-all duration-300"
          key={index}
          type="button"
          name="category"
          value={category}
          onClick={updateFilterValue}
        >
          {category}
        </button>
        </NavLink>))}
    </div></>
  );
};

export default Category;
