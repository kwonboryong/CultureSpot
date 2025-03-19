import Avatar from 'boring-avatars';
import { cn } from './../../lib/utils';
import Link from 'next/link';
import Icon from 'src/icons/Icon';

type SidebarProfileProps = {
  isCollapsed: boolean;
};

export default function SidebarProfile({ isCollapsed }: SidebarProfileProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-y-[12px]',
        isCollapsed ? 'h-[60px]' : 'h-[180px]'
      )}
    >
      <Link href={'/my/profile'} className='relative'>
        <Avatar name={'user'} variant='beam' size={isCollapsed ? 30 : 100} />
        <div
          className={cn(
            'group absolute bottom-0 right-0 flex h-[30px] w-[30px] items-center justify-center rounded-20 bg-bg-dark hover:bg-gray-500',
            isCollapsed && 'opacity-0 hover:opacity-50'
          )}
        >
          <Icon
            name='EDIT'
            size={16}
            className='fill-bg-dark stroke-white stroke-[2px] group-hover:fill-gray-500'
          />
        </div>
      </Link>
      {!isCollapsed && <p className='text-h3'>user</p>}
    </div>
  );
}
