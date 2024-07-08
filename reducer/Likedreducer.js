const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADDED_TO_LIKED':
      let { id, product } = action.payload;
      let likedProduct = {
        id: id,
        name: product.Full_name,
        images: product.image_link,
      };
      return {
        ...state,
        liked_items: [...(Array.isArray(state.liked_items) ? state.liked_items : []), likedProduct],
      };

    case 'REMOVED_FROM_LIKED':
      return {
        ...state,
        liked_items: (Array.isArray(state.liked_items) ? state.liked_items : []).filter(item => item.id !== action.payload.id),
      };

    case 'SET_LIKED_ITEMS':
      return {
        ...state,
        liked_items: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
