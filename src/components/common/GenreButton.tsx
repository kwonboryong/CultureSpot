'use client';
import { useState } from 'react';
import Icon from '../Icons/Icon';

interface GenreButtonProps {
  genre: string;
  mode: 'toggle' | 'removable';
  onRemove?: (genre: string) => void;
}

const GenreButton = ({ genre, mode, onRemove }: GenreButtonProps) => {
  const [selected, setSelected] = useState(false);

  // A 모드: 선택/해제 토글
  const handleClick = () => {
    if (mode === 'toggle') {
      setSelected((prev) => !prev);
    }
  };

  return (
    <button
      onClick={mode === 'toggle' ? handleClick : undefined}
      className={`m-1 rounded-10 border border-border px-2.5 py-1.5 text-body2 ${selected ? 'bg-primary text-white hover:bg-primary-hover' : 'bg-white text-text hover:bg-primary-main100'} `}
    >
      <div className='flex items-center'>
        {genre}
        {mode === 'removable' && (
          <span onClick={() => onRemove?.(genre)}>
            <Icon name='CLOSE' size={8} className='ml-2' />
          </span>
        )}
      </div>
    </button>
  );
};

export default GenreButton;
