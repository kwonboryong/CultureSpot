import { InputHTMLAttributes } from 'react';
import { cn } from 'src/lib/utils';
// import { IoSearchOutline } from 'react-icons/io5';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchBar = ({ ...props }: SearchInputProps) => {
  return (
    <div className='relative w-full rounded-lg'>
      <input
        type='text'
        className={cn(
          'flex h-10 w-full rounded-2xl bg-bg-light px-4 py-1 pr-16 text-sm transition-colors placeholder:text-text-disabled focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
        )}
        {...props}
      />

      <div className='absolute text-xs transform -translate-y-1/2 cursor-pointer right-3 top-1/2'>
        돋보기
      </div>
    </div>
  );
};

export default SearchBar;
