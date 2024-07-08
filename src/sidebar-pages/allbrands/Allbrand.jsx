import React, { useState } from "react";
import { useproductcontext } from "../../../context/context";
import Product from "./Product";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "../../../varients"; // Ensure fadeIn function is imported correctly
import LoadingPage from "../../pages.jsx/LoadingPage";

const Allbrand = () => {
  const { isLoading, products: allProducts } = useproductcontext();
  const [showAllProducts, setShowAllProducts] = useState(false);
  const initialProductsToShow = 30;

  if (isLoading) {
    return <div><LoadingPage/></div>;
  }

  if (!allProducts.length) {
    return <div>No products available</div>;
  }

  const productsToShow = showAllProducts
    ? allProducts
    : allProducts.slice(0, initialProductsToShow);

  const toggleShowAllProducts = () => {
    setShowAllProducts(!showAllProducts);
  };

  return (
    <motion.div initial="hidden" animate="show" variants={fadeIn("up", 0.2)} className="overflow-hidden">
      <motion.div variants={fadeIn("up", 0.2)} className="gradient-text text-center text-5xl pb-4 roboto-mono-ak">
        ALL-BRANDS
      </motion.div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 place-items-center">
        {productsToShow.map((ele) => (
          <motion.div
            key={ele['Instagram ID']}
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full sm:w-72 md:w-80 lg:w-96 xl:w-96"
          >
            <Product {...ele} />
          </motion.div>
        ))}
      </div>
      <motion.div variants={fadeIn("up", 0.2)} className="text-center mt-4">
        <motion.button
          onClick={toggleShowAllProducts}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 mb-8"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {showAllProducts ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Allbrand;
