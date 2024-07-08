const filterReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };

    case 'INCREMENT_VALUE':
      const updatedProducts = state.products.map((product) =>
        product.id === action.payload ? { ...product, value: (product.value || 0) + 1 } : product
      );
      updatedProducts.sort((a, b) => (b.value || 0) - (a.value || 0));
      return {
        ...state,
        products: updatedProducts,
      };

    default:
      return state;
  }
};

export default filterReducer;
