const filterReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_FILTER_PRODUCTS':
      const Followers_countArr = action.payload.map((curelem) => parseInt(curelem.Followers_count, 10));
      const maxFollowers_count = Math.max(...Followers_countArr);
      const minFollowers_count = Math.min(...Followers_countArr);

      return {
        ...state,
        all_product: action.payload,
        filter_product: action.payload,
        filters: { ...state.filters, maxFollowers_count, minFollowers_count, Followers_count: maxFollowers_count }
      };

    case 'UPDATE_FILTER_VALUE':
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };

    case 'FILTER_PRODUCTS':
      let tempFilterProduct = [...state.all_product];
      const { category, Followers_count } = state.filters;

      if (category !== 'all') {
        tempFilterProduct = tempFilterProduct.filter(
          (product) => product.category.toString() === category
        );
      }
      if (Followers_count) {
        tempFilterProduct = tempFilterProduct.filter((curelem) => parseInt(curelem.Followers_count, 10) <= Followers_count);
        tempFilterProduct.sort((a, b) => b.Followers_count - a.Followers_count);
      }

      return {
        ...state,
        filter_product: tempFilterProduct,
      };

    default:
      return state;
  }
};

export default filterReducer;
