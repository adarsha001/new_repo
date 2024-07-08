import React from 'react'
import { useFilterContext } from '../../../context/filtercontest'
import Product from './Product'

const Cat = () => {
  const { filter_product } = useFilterContext();
  
  return (
    <div>
      <div className="text-red-600  text-center text-5xl">Category</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center">
        {filter_product.map((ele) => (
          <Product key={ele.id} {...ele} />
        ))}
      </div>
    </div>
  )
}

export default Cat;