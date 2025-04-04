'use client';
import clsx from 'clsx';
import { ICON_PATHS } from '@/icons/iconsPaths';
import Icon from '@/icons/Icon';

type IconName = keyof typeof ICON_PATHS;

interface ToggleButtonProps {
  text: string;
  color?: 'default' | 'black';
  iconName?: IconName;
  isSelected: boolean;
  onClick: () => void;
}

const ToggleButton = ({
  text,
  color = 'default',
  iconName,
  onClick,
  isSelected,
}: ToggleButtonProps) => {
  const modeStyles: Record<string, string> = {
    default: isSelected
      ? 'border border-primary bg-primary text-white font-semibold hover:border-primary-hover hover:bg-primary-hover'
      : 'border border-border bg-white text-text hover:bg-primary-main100',
    black: isSelected
      ? 'border border-black hover:border-gray-800 bg-black text-white font-semibold hover:bg-gray-800'
      : 'border border-border bg-white text-text hover:bg-gray-300',
  };

  return (
    <button
      type='button'
      onClick={onClick}
      className={`m-1 rounded-10 px-2.5 py-1.5 text-body2 text-text-sub ${modeStyles[color]}`}
    >
      <div className='flex items-center'>
        {iconName && (
          <Icon
            name={iconName}
            size={18}
            className={clsx(
              'mr-1.5 stroke-[2px]',
              isSelected ? 'stroke-white' : 'stroke-text-sub'
            )}
          />
        )}
        {text}
      </div>
    </button>
  );
};

export default ToggleButton;
