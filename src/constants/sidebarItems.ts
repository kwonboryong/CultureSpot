import { ICON_PATHS } from './iconsPaths';

type IconName = keyof typeof ICON_PATHS;

export type SidebarItem = {
  iconName: IconName;
  label: string;
  url: string;
};

export const GENERAL_SIDEBAR_ITEMS: SidebarItem[] = [
  { iconName: 'PERFORMANCE', label: '공연 정보', url: '/' },
  { iconName: 'EXHIBITION', label: '전시 정보', url: '/' },
  { iconName: 'COMMUNITY', label: '커뮤니티', url: '/' },
];

export const MYPAGE_SIDEBAR_ITEMS: SidebarItem[] = [
  { iconName: 'DASHBOARD', label: '대시보드', url: '/' },
  { iconName: 'POST', label: '게시글', url: '/' },
  { iconName: 'LIKE', label: '좋아요', url: '/' },
  { iconName: 'TICKET', label: '티켓북', url: '/' },
];
