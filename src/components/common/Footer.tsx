const Footer = () => {
  return (
    <footer className='flex items-center w-full h-48'>
      <div className='flex flex-row items-center justify-between w-full px-10'>
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
        </div>

        <div className='flex gap-4'>
          <a href='https://github.com/culturespot' target='_blank'>
            GitHub
          </a>
          <a
            href='https://chopinoff.atlassian.net/wiki/spaces/CU/pages'
            target='_blank'
          >
            Confluence
          </a>
          <a href='/contact' target='_blank'>
            Contact
          </a>
        </div>
      </div>

      {/* <div>
        <p>© 2025 Culture Spot. 사이드 프로젝트 용도입니다.</p>
      </div> */}
    </footer>
  );
};

export default Footer;
