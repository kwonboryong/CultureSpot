'use client';
import { useState } from 'react';
import Icon from 'src/icons/Icon';
import { cn } from 'src/lib/utils';

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
        <Icon
          name='LIKE'
          size={18}
          className={cn(
            liked ? 'fill-primary' : 'fill-text-disabled',
            'stroke-none'
          )}
        />
      </div>
    </button>
  );
};

export default LikeButton;
