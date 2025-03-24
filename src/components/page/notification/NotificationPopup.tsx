import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { NotificationInfo } from '@/types/notification';
import NotificationListItem from '@/components/page/notification/NotificationListItem';
import NotificationHeader from '@/components/page/notification/NotificationHeader';
import NotificationListToolbar from '@/components/page/notification/NotificationListToolbar';

type NotificationPopupProps = {
  notificationInfo: NotificationInfo;
} & HTMLAttributes<HTMLDivElement>;

export default function NotificationPopup({
  notificationInfo,
  className,
  ...rest
}: NotificationPopupProps) {
  const { unreadCount, notifications } = notificationInfo;
  return (
    <div
      className={cn(
        'absolute right-0 top-[50px] z-[200] h-[350px] w-[410px] overflow-x-hidden overflow-y-scroll rounded-10 border bg-bg shadow-lg',
        className
      )}
      {...rest}
    >
      <NotificationHeader />
      <NotificationListToolbar unreadCount={unreadCount} isPopup />
      {!notifications.length ? (
        <div className='flex h-full w-full items-center justify-center'>
          <div>관심 장르를 등록하고 새 소식을 받아보세요.</div>
        </div>
      ) : (
        notifications?.map((item) => (
          <NotificationListItem
            key={item.notificationId}
            {...item}
            messagePrefix='의 새 소식'
            isPopup
          />
        ))
      )}
    </div>
  );
}
