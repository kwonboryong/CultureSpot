'use client';

import { useState } from 'react';
import Icon from 'src/icons/Icon';
import { cn } from 'src/lib/utils';

export default function Rating({
  size,
  fixedRate,
}: {
  size: number;
  fixedRate?: number;
}) {
  const starArr = [1, 2, 3, 4, 5];
  const [hover, setHover] = useState(0);
  const [starNum, setStarNum] = useState(fixedRate || 0);

  function onClickStar(idx: number) {
    !fixedRate && setStarNum(idx);
  }
  function onHoverStar(idx: number) {
    !fixedRate && starNum === 0 && setHover(idx);
  }
  function onLeaveStar() {
    !fixedRate && setHover(0);
  }

  return (
    <div className='flex w-fit items-center justify-center gap-x-[4px]'>
      {starArr.map((idx) => (
        <Icon
          name='STAR'
          size={size}
          key={idx}
          onClick={() => onClickStar(idx)}
          onMouseEnter={() => onHoverStar(idx)}
          onMouseLeave={() => onLeaveStar()}
          className={cn(
            fixedRate && 'pointer-events-none',
            idx <= (hover || starNum)
              ? 'fill-yellow-400 stroke-yellow-400'
              : 'fill-bg-deep stroke-bg-deep',
            'cursor-pointer'
          )}
        />
      ))}
    </div>
  );
}
