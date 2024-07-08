import React, { useState, useEffect } from "react";
import { useFilterContext } from "../../context/filtercontest";
import Product from '../sidebar-pages/allbrands/Product';
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const ProductList = () => {
  const { filter_product } = useFilterContext();
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const initialProductsToShow = 19; // Number of products to show initially

  const productsToShow = showAllProducts ? filter_product : filter_product.slice(0, initialProductsToShow);

  const toggleShowAllProducts = () => {
    setShowAllProducts(!showAllProducts);
  };

  // Function to detect scroll position

  // Add event listener on component mount
 

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mx-auto place-items-center">
        <AnimatePresence>
          {productsToShow.map((ele) => (
            <motion.div
              key={ele['Instagram ID']}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: hasScrolledDown ? 50 : -50 }} // Adjust exit animation based on scroll
              transition={{ duration: 0.3 }}
              className=""
            >
              <Product className='glass mx-auto w-full' {...ele} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="text-center mt-4">
        <button
          onClick={toggleShowAllProducts}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 mb-8"
        >
          {showAllProducts ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>
    </div>
  );
};

export default ProductList;
