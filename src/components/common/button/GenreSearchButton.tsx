'use client';

import { ICON_PATHS } from '@/icons/iconsPaths';

interface GenreSearchButtonProps {
  children: React.ReactNode;
  text: string;
}

const GenreSearchButton = ({ children, text }: GenreSearchButtonProps) => {
  return (
    <button className='flex flex-col items-center justify-center gap-y-[10px]'>
      <div className='flex h-[70px] w-[100px] items-center justify-center rounded-10 bg-bg-light hover:bg-bg-deep'>
        {children}
      </div>
      <div className='text-body2 font-semibold'>{text}</div>
    </button>
  );
};

export default GenreSearchButton;
