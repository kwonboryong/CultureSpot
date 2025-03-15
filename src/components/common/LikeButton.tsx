'use client';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = () => {
    if (liked) {
      setCount((prev) => prev - 1);
    } else {
      setCount((prev) => prev + 1);
    }
    setLiked(!liked);
  };
  return (
    <button
      className='inline-block rounded-10 border px-2 py-1 hover:bg-bg-deep'
      onClick={toggleLike}
    >
      <div className='flex items-center gap-1.5'>
        <p className='text-text'>{count}</p>
        <FaHeart
          className={` ${liked ? 'text-primary' : 'text-text-disabled'}`}
        />
      </div>
    </button>
  );
};

export default LikeButton;
