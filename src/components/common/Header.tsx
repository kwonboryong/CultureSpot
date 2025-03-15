import Link from 'next/link';
import Icon from '../Icons/Icon';
import SearchBar from './SearchBar';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  return (
    <header className='flex items-center justify-between h-20'>
      <div className='ml-7 flex w-[25%] gap-10'>
        <button>
          <RxHamburgerMenu className='w-5 h-5' />
        </button>

        <Link href={'/'}>
          <img
            src='/assets/Logo.svg'
            className='cursor-pointer h-9 w-60'
            alt='Logo'
          />
        </Link>
      </div>

      <div className='w-[25%]'>
        <SearchBar />
      </div>

      <div className='mr-7 flex w-[25%] justify-end gap-4'>
        <button>
          <Icon name='NOTIFICATION' size={23} />
        </button>
        <div>드롭다운</div>
      </div>
    </header>
  );
};

export default Header;
