'use client';

import Icon from '@/icons/Icon';

interface RemovableButtonProps {
  text: string;
  onRemove: (text: string) => void;
}

const RemovableButton = ({ text, onRemove }: RemovableButtonProps) => {
  return (
    <button
      type='button'
      className={`m-1 rounded-10 bg-primary px-2.5 py-1.5 text-body2 font-semibold text-text-sub text-white`}
    >
      <div className='flex items-center'>
        {text}
        <span onClick={() => onRemove(text)}>
          <Icon
            name='CLOSE'
            size={9}
            className='ml-2 stroke-white stroke-[3px]'
          />
        </span>
      </div>
    </button>
  );
};

export default RemovableButton;
