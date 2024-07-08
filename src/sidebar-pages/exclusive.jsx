import React from 'react';
import companydata from "../../companydata.json";
import Product from './exclusive/Productexclusive'
import { useFilterContext } from '../../context/filtercontest';

const Exclusive = () => {
const {filter_product}=useFilterContext();
console.log( filter_product);
if (!filter_product.length) {
  return <div>Loading...</div>;
}
  return (
    <div>
      
      
    <div className="text-red-600 text-center text-5xl">
     exclusive</div>    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center ">

{
filter_product.map ((ele) =>{
  return <Product className='' key={ele.id} {...ele}/>
} )
}

</div>
</div>
  );
};

export default Exclusive;
