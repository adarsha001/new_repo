import React, { createContext, useContext, useReducer, useEffect } from "react";
import { useproductcontext } from "./context";
import filterReducer from "../reducer/filterreducer";

const FilterContext = createContext();

const initialState = {
  filter_product: [],
  all_product: [],
  filters: {
    text: "",
    rating: 0,
    category: "all",
    maxFollowers_count: 0,
    Followers_count: 0,
    minFollowers_count: 0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useproductcontext();
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const updateFilterValue1 = (event) => {
    const name = event.target.name;
    const value = parseInt(event.target.value, 10); // Ensure the value is a number
    dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [state.filters]);

  useEffect(() => {
    if (products.length > 0) {
      dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, updateFilterValue1 }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
