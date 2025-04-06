import Link from 'next/link';
import Icon from '@/icons/Icon';
import SearchBar from '@/components/common/SearchBar';
import Dropdown from '@/components/common/Dropdown';
import Avatar from 'boring-avatars';
import { useRouter } from 'next/navigation';
import { useRef, useEffect, useState } from 'react';
import NotificationPopup from '@/components/page/notification/NotificationPopup';
import { mockNotificationInfo } from '@/data/mockNotification';
import HeaderLogo from '../HeaderLogo';

type HeaderProps = {
  onToggleSidebar: () => void;
};

const Header = ({ onToggleSidebar }: HeaderProps) => {
  const profileCode = 1234;
  const router = useRouter();
  const [isNotificationPopupOpen, setIsNotificationPopupOpen] = useState(false);
  const notificationRef = useRef<HTMLButtonElement>(null);
  const onClickLogout = () => {
    router.push('/');
  };

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target as Node)
      ) {
        setIsNotificationPopupOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <header className='fixed top-0 left-0 z-50 flex items-center w-full h-20 bg-bg'>
      <div className='flex w-[90px] flex-shrink-0 items-center justify-center'>
        <button
          onClick={onToggleSidebar}
          className='rounded-full p-[10px] hover:bg-black/10'
        >
          <Icon
            name='HAMBURGER_MENU'
            size={22}
            className='stroke-text-sub stroke-[2px]'
          />
        </button>
      </div>
      <div className='flex flex-[1] items-center justify-between gap-x-[15px] pr-[15px] lg:pr-[40px]'>
        <div className='flex-[4]'>
          <Link href={'/'}>
            <HeaderLogo />
          </Link>
        </div>

        <div className='flex flex-[3]'>
          <SearchBar className='min-w-[250px] max-w-[500px]' variant='header' />
        </div>

        <div className='flex flex-[4] items-center justify-end gap-3'>
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
              { label: '로그아웃', onClick: onClickLogout },
            ]}
            buttonWidth='fit'
            hideButtonBorder
            hideIcon
            hideButtonHover
            hideButtonPadding
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
