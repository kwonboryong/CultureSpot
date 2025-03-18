import Link from 'next/link';
import Icon from '../../icons/Icon';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';
import { useRouter } from 'next/navigation';

type HeaderProps = {
  onToggleSidebar: () => void;
};

const Header = ({ onToggleSidebar }: HeaderProps) => {
  const userName = 'user';
  const router = useRouter();
  function handleLogout() {
    router.push('/');
  }

  return (
    <header className='fixed left-0 top-0 flex h-20 w-full items-center justify-between'>
      <div className='flex-[3]'>
        <div className='mx-[34px] flex w-[280px] gap-10'>
          <button onClick={onToggleSidebar}>
            <Icon
              name='HAMBURGER_MENU'
              size={22}
              className='stroke-text-sub stroke-[2px]'
            />
          </button>

          <Link href={'/'}>
            <img
              src='/assets/logo.svg'
              className='h-9 w-60 cursor-pointer'
              alt='logo'
            />
          </Link>
        </div>
      </div>

      <div className='flex flex-[4]'>
        <SearchBar className='min-w-[300px] flex-[1]' />
        <div className='flex-[1]'></div>
      </div>

      <div className='mr-7 flex flex-[1] justify-end gap-4'>
        <button>
          <Icon
            name='NOTIFICATION'
            size={23}
            className='stroke-text-sub stroke-[2px]'
          />
        </button>
        <Dropdown
          type='link'
          buttonText={userName + ' 님'}
          menuItems={[
            {
              label: '마이페이지',
              onClick: () => router.push('/my/dashboard'),
            },
            { label: '로그아웃', onClick: handleLogout },
          ]}
          buttonWidth='fit'
          hideButtonBorder
          hideIcon
        />
      </div>
    </header>
  );
};

export default Header;
