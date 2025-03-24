import { EventSummary } from '@/types/event';

export interface Notification extends EventSummary {
  notificationId: number;
  eventType: string;
  eventCategory: string;
  eventTitle: string;
  notifiedAt: string;
  isRead: boolean;
}

export interface NotificationInfo {
  unreadCount: number;
  notifications: Notification[];
}
