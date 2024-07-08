import React from 'react';
import { useLikedContext } from "../../../context/Liked_context";
import Product from './Product';

const Liked_list = () => {
  const { liked_items } = useLikedContext();
  console.log("Liked Items:", liked_items);

  if (!Array.isArray(liked_items) || liked_items.length === 0) {
    return <div>No liked items available</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 place-items-center duration-500 transition-all">
      {liked_items.map((ele) => (
        <Product key={ele.id}  {...ele} />
      ))}
    </div>
  );
};

export default Liked_list;
