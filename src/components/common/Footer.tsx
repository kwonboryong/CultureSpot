import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { SiConfluence } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className='mt-5 flex h-40 w-full select-none items-center bg-bg-light px-10'>
      <div className='flex w-full flex-row items-center justify-between'>
        <div>
          <Link href='/' className='flex items-center gap-2'>
            <img
              src='/assets/logo.svg'
              className='w-40'
              alt='CultureSpot 로고 아이콘'
            />
          </Link>

          <p className='pt-1 text-body2 text-text-sub'>
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
          <a href='mailto:culturespot.team@gmail.com'>
            <FiMail size={26} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
