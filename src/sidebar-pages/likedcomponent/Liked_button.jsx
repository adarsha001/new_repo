import React from 'react';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import { useLikedContext } from '../../../context/Liked_context';

const LikeButton = ({ product }) => {
  const { liked_items, addLiked, removeLiked } = useLikedContext();
  
  // Ensure liked_items is an array
  const isLiked = Array.isArray(liked_items) && liked_items.some(item => item.id === product.id);

  const handleLike = () => {
    if (isLiked) {
      removeLiked(product.id);
    } else {
      addLiked(product.id, product);
    }
  };

  return (
    <div className='' onClick={handleLike}>
      {isLiked ? <HiHeart className='size-7' color="red" /> : <HiOutlineHeart className='size-7' />}
    </div>
  );
};

export default LikeButton;
