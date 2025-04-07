import { FaGithub } from 'react-icons/fa';
import { SiConfluence } from 'react-icons/si';
const Footer = () => {
  return (
    <footer className='flex items-center w-full h-48'>
      <div className='flex flex-row items-center justify-between w-full px-5'>
        <div>
          <div className='flex items-center gap-2'>
            <img
              src='/assets/logo-icon.svg'
              className='w-6'
              alt='CultureSpot 로고 아이콘'
            />
            <p className='font-semibold text-body1'>Culture Spot</p>
          </div>
          <p className='text-body2 text-text-sub'>
            문화 행사 정보 제공 및 커뮤니티 기반 소통 플랫폼
          </p>

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
          </div>
        </div>
        <nav className='flex flex-col pr-11'>
          <a href='/'>Home</a>
          <a href='/about'>Shows</a>
          <a href='/faq'>Exhibits</a>
          <a href='/faq'>Community</a>
        </nav>
      </div>

      {/* <div>
        <p>© 2025 Culture Spot. 사이드 프로젝트 용도입니다.</p>
      </div> */}
    </footer>
  );
};

export default Footer;
