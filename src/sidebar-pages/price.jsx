import React from "react";
import { useFilterContext } from "../../context/filtercontest";
import ProductList from "./productlist";

const Price = () => {
  const {
    filters: { maxFollowers_count, Followers_count, minFollowers_count },
    updateFilterValue1,
  } = useFilterContext();

  // Define your linear gradient colors
  const gradientColors = "from-blue-400 to-purple-500";

  return (
    <>
      <div className="text-white gradient-text text-center text-5xl roboto-mono-ak ">FOLLOWERS</div>
      <div className="mt-8">
        <div className="flex justify-center">
          <p className="text-center text-xl mb-4 p-4 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg">
            Followers Count: <span className="font-bold">{Followers_count}</span>
          </p>
        </div>
        <input
          type="range"
          className={`block w-full navbar bg-gradient-to-r ${gradientColors} appearance-none h-3 rounded-lg outline-none transition-all duration-300`}
          min={minFollowers_count}
          name="Followers_count"
          max={maxFollowers_count}
          value={Followers_count}
          onChange={updateFilterValue1}
        />
        <div className="mt-4">
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default Price;
