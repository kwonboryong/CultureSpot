import Link from 'next/link';
import Icon from '../../icons/Icon';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className='flex h-20 items-center justify-between'>
      <div className='ml-7 flex w-[25%] gap-10'>
        <button>
          <Icon
            name='HAMBURGER_MENU'
            size={22}
            className='stroke-text-sub stroke-[2px]'
          />
        </button>

        <Link href={'/'}>
          <img
            src='/assets/Logo.svg'
            className='h-9 w-60 cursor-pointer'
            alt='Logo'
          />
        </Link>
      </div>

      <div className='w-[25%]'>
        <SearchBar />
      </div>

      <div className='mr-7 flex w-[25%] justify-end gap-4'>
        <button>
          <Icon
            name='NOTIFICATION'
            size={23}
            className='stroke-text-sub stroke-[2px]'
          />
        </button>
        <div>드롭다운</div>
      </div>
    </header>
  );
};

export default Header;
