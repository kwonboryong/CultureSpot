import { InputHTMLAttributes } from 'react';
import { cn } from 'src/lib/utils';
import { IoIosSearch } from 'react-icons/io';
import Icon from 'src/icons/Icon';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchBar = ({ ...props }: SearchInputProps) => {
  return (
    <div className={cn('relative w-full rounded-lg', props.className)}>
      <input
        type='text'
        className={cn(
          'flex h-9 w-full rounded-3xl bg-bg-light px-4 py-1 pr-16 text-sm transition-colors placeholder:text-text-disabled focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
        )}
      />

      <div className='absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer text-xs'>
        <Icon
          name='SEARCH'
          size={18}
          className='stroke-text-sub stroke-[2px]'
        />
      </div>
    </div>
  );
};

export default SearchBar;
