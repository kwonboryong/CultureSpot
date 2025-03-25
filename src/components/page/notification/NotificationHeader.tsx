import Icon from 'src/icons/Icon';
import Link from 'next/link';

export default function NotificationHeader() {
  return (
    <header className='flex items-center justify-between p-[15px] pb-[5px]'>
      <div className='flex items-center gap-x-[6px] font-semibold'>
        <Icon
          name='NOTIFICATION'
          size={16}
          className='stroke-text stroke-[2px]'
        />
        알림
      </div>
      <Link
        href={'/notification'}
        className='group flex items-center gap-x-[6px] text-body2 hover:text-text-sub'
      >
        전체 보기
        <Icon
          name='ARROW_RIGHT'
          size={12}
          className='stroke-text stroke-[2px] group-hover:stroke-text-sub'
        />
      </Link>
    </header>
  );
}
