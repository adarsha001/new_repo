  import React, { useState } from 'react';
  import { NavLink } from 'react-router-dom';
  import { useLikedContext } from "../../../context/Liked_context";
  const Product = ({ id, name, category, rating, images, link }) => {
    const [activeLink, setActiveLink] = useState(null);
    const { addLiked } = useLikedContext();
    const handleClick = (productId) => {
      setActiveLink(productId);
    };

    return (
      <div className='mx-1 my-1 glass bg-green-400 w-full flex justify-center sm:w-[98%] transition-all duration-500 hover:bg-green-200'>
        <NavLink
          to={`/singleproduct/${id}`}
          className={`${
            activeLink === id ? 'bg-red-700' : ''
          } transition-all duration-500`}
          onClick={() => handleClick(id)}
        >
          <div>
            <img src={images} className='w-[240px] sm:w-[300px] md:w-[400px] lg:w-[500px] overflow-hidden' alt="" />
            <div className='text-center font-bold'>
              <h1>
                <button className='bg-slate-500 rounded-md'>{name}</button>
              </h1>
            </div>
            <div className='text-center'>{category}</div>
            <div className='text-center'>{rating}</div>
            <div className='text-center'>
              <NavLink to={link}>
                <button  onClick={() => addLiked(id, product)}>click me</button>
              </NavLink>
            </div>
            <div>liked</div>
          </div>
        </NavLink>
      </div>
    );
  };

  export default Product;
