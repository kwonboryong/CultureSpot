import { cn } from '@/lib/utils';
import ListToolbar from '@/components/common/ListToolbar';
import { Button } from '@/components/common/Button';

interface NotificationListToolbarProps {
  unreadCount: number;
  isPopup?: boolean;
}

export default function NotificationListToolbar({
  unreadCount,
  isPopup = false,
}: NotificationListToolbarProps) {
  return (
    <ListToolbar
      className={cn('sticky left-0 top-0 z-10 bg-bg pr-[6px] text-body2')}
      size={isPopup ? 'sm' : 'lg'}
    >
      <div className='font-semibold text-text-sub'>
        읽지 않은 알림
        <span className='text-primary'> {unreadCount}</span>개
      </div>

      <Button
        className='border-0 py-0'
        variant='secondary'
        children={
          <>
            <div
              className={cn(
                unreadCount ? 'bg-notification' : 'bg-text-disabled',
                'h-[7px] w-[7px] flex-shrink-0 rounded-full'
              )}
            ></div>
            <div className='text-text-sub'>모두 읽음 표시</div>
          </>
        }
      />
    </ListToolbar>
  );
}
