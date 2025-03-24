'use client';
import { useState } from 'react';
import Icon from '@/icons/Icon';

interface GenreButtonProps {
  genre: string;
  mode: 'toggle' | 'removable' | 'black-toggle';
  onRemove?: (genre: string) => void;
  onClick: () => void;
}

const GenreButton = ({ genre, mode, onRemove, onClick }: GenreButtonProps) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    if (mode === 'toggle' || mode === 'black-toggle') {
      setSelected((prev) => !prev);
      onClick();
    }
  };

  const modeStyles: Record<string, string> = {
    removable: 'bg-primary text-white font-semibold hover:bg-primary-hover',
    toggle: selected
      ? 'border-none bg-primary text-white font-semibold hover:bg-primary-hover'
      : 'border border-border bg-white text-text hover:bg-primary-main100',
    'black-toggle': selected
      ? 'border-none bg-black text-white font-semibold hover:bg-gray-800'
      : 'border border-border bg-white text-text hover:bg-gray-300',
  };

  return (
    <button
      type='button'
      onClick={handleClick}
      className={`m-1 rounded-10 px-2.5 py-1.5 text-caption ${modeStyles[mode]}`}
    >
      <div className='flex items-center'>
        {genre}
        {mode === 'removable' && (
          <span onClick={() => onRemove?.(genre)}>
            <Icon
              name='CLOSE'
              size={8}
              className='ml-2 stroke-white stroke-[3]'
            />
          </span>
        )}
      </div>
    </button>
  );
};

export default GenreButton;
