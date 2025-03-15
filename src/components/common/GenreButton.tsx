'use client';
import { useState } from 'react';
import Icon from '../Icons/Icon';

interface GenreButtonProps {
  genre: string;
  mode: 'toggle' | 'removable' | 'black-toggle';
  onRemove?: (genre: string) => void;
}

const GenreButton = ({ genre, mode, onRemove }: GenreButtonProps) => {
  const [selected, setSelected] = useState(false);

  // A 모드: 선택/해제 토글
  const handleClick = () => {
    if (mode === 'toggle' || mode === 'black-toggle') {
      setSelected((prev) => !prev);
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
      onClick={handleClick}
      className={`m-1 rounded-10 px-2.5 py-1.5 text-body2 ${modeStyles[mode]}`}
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
