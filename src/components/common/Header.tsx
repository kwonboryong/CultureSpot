import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div className='flex items-center justify-between h-20'>
      <div className='ml-5 flex w-[25%] gap-4'>
        <div>햄버거</div>
        <img src='/assets/Logo.svg' className='h-9 w-60' />
      </div>

      <div className='w-[25%]'>
        <SearchBar />
      </div>

      <div className='mr-5 flex w-[25%] justify-end gap-4'>
        <div>알림</div>
        <div>드롭다운 메뉴</div>
      </div>
    </div>
  );
};

export default Header;
