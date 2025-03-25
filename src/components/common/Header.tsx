import Link from 'next/link';
import Icon from '@/icons/Icon';
import SearchBar from '@/components/common/SearchBar';
import Dropdown from '@/components/common/Dropdown';
import Avatar from 'boring-avatars';
import { useRouter } from 'next/navigation';
import { useRef, useEffect, useState } from 'react';
import NotificationPopup from '@/components/page/notification/NotificationPopup';
import { mockNotificationInfo } from '@/data/mockNotification';

type HeaderProps = {
  onToggleSidebar: () => void;
};

const Header = ({ onToggleSidebar }: HeaderProps) => {
  const profileCode = 1234;
  const router = useRouter();
  const [isNotificationPopupOpen, setIsNotificationPopupOpen] = useState(false);
  const notificationRef = useRef<HTMLButtonElement>(null);
  function handleLogout() {
    router.push('/');
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target as Node)
      ) {
        setIsNotificationPopupOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className='fixed left-0 top-0 flex h-20 w-full items-center justify-between bg-bg'>
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

      <div className='mr-7 flex flex-[1] items-center justify-end gap-3'>
        <div className='relative'>
          <button
            className='group flex h-[36px] w-[36px] items-center justify-center rounded-40 hover:bg-primary-main100'
            onClick={() => setIsNotificationPopupOpen((prev) => !prev)}
            ref={notificationRef}
          >
            <Icon
              name='NOTIFICATION'
              size={23}
              className='stroke-text-sub stroke-[2px] group-hover:stroke-primary'
            />
          </button>
          {isNotificationPopupOpen && (
            <NotificationPopup notificationInfo={mockNotificationInfo} />
          )}
        </div>
        <Dropdown
          type='link'
          buttonText={
            <Avatar name={String(profileCode)} variant='beam' size={36} />
          }
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
          hideButtonHover
          hideButtonPadding
        />
      </div>
    </header>
  );
};

export default Header;
