'use client';
import { useState } from 'react';
import { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import Icon from '@/icons/Icon';
import { useRouter } from 'next/navigation';

const searchBarVariants = cva(
  'flex h-9 w-full pl-4 pr-10 py-1 text-sm transition-colors focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
  {
    variants: {
      variant: {
        header: 'bg-bg-light rounded-3xl',
        community: 'bg-white rounded-5 border border-border h-8',
        detail: 'bg-primary-main100 rounded-3xl pl-14',
      },
    },
    defaultVariants: {
      variant: 'header',
    },
  }
);

interface SearchInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof searchBarVariants> {}

const SearchBar = ({ variant, className, ...props }: SearchInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const isDetail = variant === 'detail';

  const handleSearchClick = () => {
    if (inputValue.trim()) {
      router.push(`/search?query=${encodeURIComponent(inputValue)}`);
    }
  };

  return (
    <div className={cn('relative w-full', className)}>
      <button
        type='button'
        className={cn(
          'absolute top-1/2 flex -translate-y-1/2 cursor-pointer text-xs',
          isDetail ? 'left-3' : 'right-3'
        )}
        onClick={handleSearchClick}
      >
        <Icon
          name='SEARCH'
          size={18}
          className={cn(
            'stroke-[2px]',
            isDetail ? 'stroke-primary' : 'stroke-text-sub'
          )}
        />
        {isDetail && (
          <div className='h-4.5 ml-2.5 border-l border-primary-main500' />
        )}
      </button>

      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={cn(searchBarVariants({ variant }))}
        {...props}
      />

      {isDetail && inputValue && (
        <button
          type='button'
          className='absolute -translate-y-1/2 right-3 top-1/2 text-primary'
          onClick={() => setInputValue('')}
        >
          <Icon name='CLOSE' size={13} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
