import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaCheck, FaTimes } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useTrendingContext } from "../../context/trendingcontext";

const ProductList = () => {
  const { products, incrementValue, loading } = useTrendingContext();
  const [showAll, setShowAll] = useState(false);
  const initialProductsToShow = 30; // Number of products to show initially
  const [fadeIn, setFadeIn] = useState(false); // State for managing fade-in effect

  const productsToShow = showAll ? products : products.slice(0, initialProductsToShow);

  const handleInnerClick = (event) => {
    event.stopPropagation();
    console.log("Inner clicked");
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    // After loading is complete, trigger fade-in effect
    if (!loading) {
      setFadeIn(true);
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
      </div>
    );
  }

  return (
    <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-center text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-200 to-yellow-500 roboto-mono-ak pb-4">Trending</div>
      <div className="grid text-white  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-2 lg:grid-cols-5 xl:grid-cols-6 place-items-center gap-4">
        {productsToShow.map((product) => (
          <div
            key={product.id}
            className="group hover:bg-black relative mx-1 my-1 glass w-full flex flex-col justify-between sm:w-[98%] transition-all duration-500 p-4 rounded-lg"
          >
            <NavLink
              to={`/singleproduct/${product.id}`}
              onClick={() => incrementValue(product.id)}
              className="flex flex-col h-full justify-between"
            >
              <div className="flex flex-col items-center">
                <div className="relative w-full text-center">
                  <div className="absolute inset-0 bg-white transform -skew-x-12 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h3 className="relative z-10 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-200 p-2">
                    {product.Full_name}
                  </h3>
                </div>
                <img
                  src={product.image_link}
                  className="w-[140px] pt-3   sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto mx-auto mb-2"
                  alt={product.Full_name}
                />
                <div className="flex justify-center items-center mb-2">
                  Account verified:
                  {product.Is_Verified === "Yes" ? (
                    <FaCheck style={{ color: 'green' }} />
                  ) : (
                    <FaTimes style={{ color: 'red' }} />
                  )}
                </div>
                <div className="mb-2">{product.value}</div>
                <p className="line-clamp-2 mb-2">
                  Instagram Followers: {product.Followers_count}
                </p>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 mb-2" onClick={handleInnerClick}>
                <a
                  href={product.External_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website link
                </a>
              </button>
            </NavLink>
          </div>
        ))}
      </div>
      <div className="text-center flex justify-center mt-4">
        <button onClick={toggleShowAll} className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 mb-8 flex items-center justify-center">
          {showAll ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>
    </div>
  );
};

export default ProductList;
