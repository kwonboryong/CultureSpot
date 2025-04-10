'use client';

import Link from 'next/link';
import { GenreEn } from '@/types/event';
import { GENRES_MAP } from '@/constants/event';

interface GenreSearchButtonProps {
  children: React.ReactNode;
  genre: GenreEn;
}

const GenreSearchButton = ({ children, genre }: GenreSearchButtonProps) => {
  return (
    <Link
      href={`/search?genre=${genre}`}
      className='flex flex-col items-center justify-center gap-y-[10px]'
    >
      <div className='flex h-[70px] w-[100px] items-center justify-center rounded-10 bg-bg-light hover:bg-bg-deep'>
        {children}
      </div>
      <div className='text-body2 font-semibold'>{GENRES_MAP[genre]}</div>
    </Link>
  );
};

export default GenreSearchButton;
