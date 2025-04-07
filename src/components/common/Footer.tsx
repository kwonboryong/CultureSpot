import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { SiConfluence } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className='flex items-center w-full h-48 px-4 select-none'>
      <div className='flex flex-row items-center justify-between w-full'>
        <div>
          <Link href='/' className='flex items-center gap-2'>
            <img
              src='/assets/logo-icon.svg'
              className='w-6'
              alt='CultureSpot 로고 아이콘'
            />
            <p className='text-[18px] font-semibold'>Culture Spot</p>
          </Link>

          <p className='text-body2 text-text-sub'>
            문화 행사 정보 제공 및 커뮤니티 기반 소통 플랫폼
          </p>
          <p className='pt-2 text-caption text-text-disabled'>
            © 2025 Culture Spot. All rights reserved.
          </p>
        </div>
        <div className='flex gap-4'>
          <a href='https://github.com/culturespot' target='_blank'>
            <FaGithub size={25} />
          </a>
          <a
            href='https://chopinoff.atlassian.net/wiki/spaces/CU/pages'
            target='_blank'
          >
            <SiConfluence size={25} />
          </a>
          <a href='mailto:임시@gmail.com'>
            <FiMail size={26} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
