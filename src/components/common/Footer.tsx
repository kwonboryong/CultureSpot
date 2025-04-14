import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { SiConfluence } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className='flex items-center w-full h-40 px-10 select-none mt-7 bg-bg-light'>
      <div className='flex flex-row items-center justify-between w-full'>
        <div>
          <Link href='/' className='flex items-center gap-2'>
            <img
              src='/assets/logos/logo.svg'
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

        <nav aria-label='CultureSpot 팀 소셜 미디어 링크'>
          <ul className='flex gap-4'>
            <li>
              <a
                href='https://github.com/culturespot'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='CultureSpot 팀 GitHub'
              >
                <FaGithub size={25} />
              </a>
            </li>
            <li>
              <a
                href='https://chopinoff.atlassian.net/wiki/spaces/CU/pages'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='CultureSpot 팀 Confluence'
              >
                <SiConfluence size={25} />
              </a>
            </li>
            <li>
              <a
                href='mailto:culturespot.team@gmail.com'
                aria-label='CultureSpot 팀 Email'
              >
                <FiMail size={26} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
