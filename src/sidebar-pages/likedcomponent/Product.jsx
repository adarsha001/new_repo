import { NavLink } from "react-router-dom";
import React from "react";
import LikeButton from '../likedcomponent/Liked_button';
import { useTrendingContext  } from '../../../context/trendingcontext'

const Product = (ele) => {
  const { id, name,Biography, images, External_url } = ele;

  const { incrementValue } = useTrendingContext ();

  return (
    <div className="mx-1 my-1 glass w-full text-white  flex justify-center  sm:w-[98%] transition-all duration-500 hover:bg-green-200">
      <NavLink
        to={`/singleproduct/${id}`}
        className={`transition-all duration-500 `}
        onClick={(e) => { 
          incrementValue(id);
          e.stopPropagation();
        }}
      >
        <div>
          <img
            src={images}
            className="w-[140px] flex justify-center items-center  sm:w-[200px] md:w-[250px] lg:w-[300px]  overflow-hidden mx-auto"
            alt={name}
          />
          <div className="text-center font-bold">
            <h1>
              <button className="">{name}</button>
            </h1>
          </div>
    
        
        </div>
      </NavLink>
      <div className="text-center">
        <LikeButton product={ele} />
      </div>
    </div>
  );
};

export default Product;
