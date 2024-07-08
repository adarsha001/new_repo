import Singleproduct from "../src/pages.jsx/Singleproduct";

const Productreducer = (state, action) => {
  switch (action.type) {
    case "API_LOADING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "my_API_DATA":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: action.payload.filter(product => product.featureproducts )// Filter feature products
  
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        issingleLoading: true,
        isError: false,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        issingleLoading: false,
        singleproduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        isError: true,
        ...state,
        issingleLoading: false,
      };
    default:
      return state;
  }
};

export default Productreducer;
