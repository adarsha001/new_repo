// trendingcontext.js

import React, { createContext, useContext, useEffect, useState } from 'react';

const TrendingContext = createContext();

export const useTrendingContext = () => useContext(TrendingContext);

export const TrendingProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    fetch('https://shopsphere360.onrender.com/api/trending/products')
      .then((response) => response.json())
      .then((data) => {
        // Sort products by value (descending order)
        const sortedProducts = data.sort((a, b) => b.value - a.value);
        setProducts(sortedProducts);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  const incrementValue = async (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, value: product.value + 1 } : product
    );
    setProducts(updatedProducts);

    const updatedProduct = updatedProducts.find((product) => product.id === id);

    try {
      await fetch(`https://shopsphere360.onrender.com/api/trending/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <TrendingContext.Provider value={{ products, incrementValue, loading }}>
      {children}
    </TrendingContext.Provider>
  );
};
