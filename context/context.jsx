import React, {
  createContext,
  useState,
  useRef,
  useEffect,
  useReducer,
  useContext,
} from "react";
import axios from "axios";
import Reducer from "../reducer/productreducer";
const CounterContext = createContext(null);

const API = "https://shopsphere360.onrender.com/api/trending/products";

const intitialstate = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  issingleLoading: false,
  singleproduct: {},// Change to featureProducts
};

export const CounterProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, intitialstate);

  const getproducts = async (url) => {
    dispatch({ type: "API_LOADING" });

    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "my_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getsingleproduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleproduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleproduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getproducts(API);
  }, []);

  const [count, setCount] = useState(0);
  const [open, setopen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState("");
  const listRef = useRef(null);

  

  const contextValue = {
    ...state,
    getsingleproduct,
    count,
    setCount,
    open,
    setopen,
    setSelectedIndex,

    selectedIndex,
  };

  return (
    <CounterContext.Provider value={contextValue}>
      {props.children}
    </CounterContext.Provider>
  );
};

export const useproductcontext = () => {
  return useContext(CounterContext);
};

export { CounterContext };
