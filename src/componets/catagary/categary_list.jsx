import React from 'react';
import Categary_card from '../catagary/categary_card';
import { useFilterContext } from '../../../context/filtercontest';

const Categary_list = () => {
  const { filter_product } = useFilterContext();
  
  return ( <div className="">
    <div className='flex overflow-hidden pt-9'>
      <Categary_card products={filter_product} /> {/* Ensure products prop is passed */}
    </div></div>
  );
};

export default Categary_list;
