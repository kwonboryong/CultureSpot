import Link from 'next/link';
import { cn } from 'src/lib/utils';
import clsx from 'clsx';
import { Notification } from '@/types/notification';
import timeAgo from '@/utils/timeAgo';

export interface NotificationListItemProps extends Notification {
  messagePrefix: string;
  isPopup?: boolean;
}

const NotificationListItem = ({
  notificationId,
  eventId,
  eventType,
  eventCategory,
  eventTitle,
  notifiedAt,
  isRead,
  messagePrefix,
  isPopup = false,
}: NotificationListItemProps) => {
  const time = timeAgo(notifiedAt);

  return (
    <article
      className={cn(
        isPopup
          ? 'even:bg-bg-light'
          : 'border-b border-divider last:border-b-0',
        'bg-bg duration-100 hover:brightness-[0.98]'
      )}
    >
      <Link href={`/${eventType}/${eventId}`} className='even:bg-bg-light'>
        <div
          className={cn(
            isPopup ? 'px-[15px]' : 'px-[20px]',
            'flex items-center justify-between'
          )}
        >
          <div
            className={cn(
              isPopup ? 'py-[10px]' : 'py-[15px]',
              'flex items-center gap-x-[15px]'
            )}
          >
            <div
              className={cn(
                isRead ? 'bg-text-disabled' : 'bg-notification',
                'h-[7px] w-[7px] flex-shrink-0 rounded-full'
              )}
            ></div>
            <p className={cn(isRead ? 'text-text-sub' : 'text-text', 'flex')}>
              <span
                className={clsx(
                  isRead && 'text-text-sub',
                  isPopup && 'text-body2',
                  'whitespace-nowrap pr-[6px] font-semibold'
                )}
              >
                [{eventType}]
              </span>
              <span
                className={clsx(
                  !isRead && 'text-primary',
                  isPopup && 'text-body2',
                  'flex-grow truncate font-semibold'
                )}
              >
                {eventTitle}
              </span>
              <span className={cn(isPopup && 'text-body2', 'flex-shrink-0')}>
                {messagePrefix}
              </span>
            </p>
          </div>
          <time className={clsx('whitespace-nowrap text-body2 text-text-sub')}>
            {time}
          </time>
        </div>
      </Link>
    </article>
  );
};

export default NotificationListItem;
