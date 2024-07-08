// LikedContext.jsx
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducer/Likedreducer';
import { usejwt } from '../context/jwt'; // Adjust the import path as needed

const LikedContext = createContext();

const getLikedData = () => {
  let newLikedData = localStorage.getItem(`likeditems`);
  if (newLikedData) {
    try {
      return JSON.parse(newLikedData);
    } catch (error) {
      console.error('Failed to parse liked items from localStorage:', error);
      return [];
    }
  } else {
    return [];
  }
};

const LikedProvider = ({ children }) => {
  const { user, isloggedin } = usejwt();
  const [state, dispatch] = useReducer(reducer, { liked_items: getLikedData() });

  useEffect(() => {
    if (isloggedin && user) {
      // Here, you can fetch user-specific liked items if needed
      // For simplicity, we assume liked items are stored per user in localStorage
      const userLikedItems = getLikedData(user.id);
      dispatch({ type: 'SET_LIKED_ITEMS', payload: userLikedItems });
    }
  }, [isloggedin, user]);

  const addLiked = (id, product) => {
    dispatch({ type: 'ADDED_TO_LIKED', payload: { id, product } });
  };

  const removeLiked = (id) => {
    dispatch({ type: 'REMOVED_FROM_LIKED', payload: { id } });
  };

  useEffect(() => {
    localStorage.setItem(`likeditems`, JSON.stringify(state.liked_items));
  }, [state.liked_items]);

  return (
    <LikedContext.Provider value={{ ...state, addLiked, removeLiked }}>
      {children}
    </LikedContext.Provider>
  );
};

export const useLikedContext = () => {
  return useContext(LikedContext);
};

export { LikedProvider };
