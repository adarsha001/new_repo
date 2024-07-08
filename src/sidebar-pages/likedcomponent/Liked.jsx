import React from "react";

import Product from "../likedcomponent/Product";

import Liked_list from "./Liked_list";

const Liked = () => {

 // Check if liked_items are correctly logged

  return (
    <div>
      <div className="gradient-text pb-4 text-center text-5xl roboto-mono-ak">LIKED</div>
     <Liked_list/>
    </div>
  );
};

export default Liked;

