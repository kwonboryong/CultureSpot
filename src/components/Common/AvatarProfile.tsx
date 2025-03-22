import Avatar from 'boring-avatars';
import { cn } from '../../lib/utils';
import Icon from 'src/icons/Icon';

const AvatarProfile = () => (
  <div className={'flex flex-col items-center justify-center gap-y-[12px]'}>
    <div className='relative'>
      <Avatar name={'user'} variant='beam' size={100} />
      <div
        className={cn(
          'group absolute bottom-0 right-0 flex h-[30px] w-[30px] items-center justify-center rounded-20 bg-bg-dark hover:bg-gray-500'
        )}
      >
        <Icon
          name='RESET'
          size={16}
          className='cursor-pointer fill-bg-dark stroke-white stroke-[2px] group-hover:fill-gray-500'
        />
      </div>
    </div>
  </div>
);

export default AvatarProfile;
