// import React, { useEffect, useState } from 'react';
// import data from '../data.json';

// const Slider = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     setProducts(data.products);
//   }, []);

//   return (
//     <div className='flex justify-center z-10 gap-3 w-full border h-auto border-gray-400 py-4 px-8'>
//     {products.map((product, i) => (
//       <div key={i} className='relative overflow-hidden object-fill z-0 transition-transform duration-300 transform hover:scale-110 sm:hover:scale-125'>
//         <img className='object-fill w-32 h-20 z-0' src={product.image} alt={product.name} />
//       </div>
//     ))}
//   </div>
  
//   );
// };

// export default Slider;
