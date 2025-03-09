'use client';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className='inline-block rounded-10 border p-2 hover:bg-bg-deep'>
      <div className='flex items-center gap-2'>
        <p className=''>카운트</p>
        <FaHeart className='text-primary' />
      </div>
    </div>
  );
};

export default LikeButton;
