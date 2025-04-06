import { ICON_PATHS } from 'src/icons/iconsPaths';

type IconName = keyof typeof ICON_PATHS;

export type SidebarItem = {
  iconName: IconName;
  label: string;
  url: string;
};

export const GENERAL_SIDEBAR_ITEMS: SidebarItem[] = [
  { iconName: 'HOME', label: '홈', url: '/' },
  { iconName: 'PERFORMANCE', label: '공연 정보', url: '/performance' },
  { iconName: 'EXHIBITION', label: '전시 정보', url: '/exhibition' },
  { iconName: 'COMMUNITY', label: '커뮤니티', url: '/community' },
];

export const MYPAGE_SIDEBAR_ITEMS: SidebarItem[] = [
  { iconName: 'DASHBOARD', label: '대시보드', url: '/my/dashboard' },
  { iconName: 'POST', label: '게시글', url: '/my/posts' },
  { iconName: 'LIKE', label: '좋아요', url: '/my/likes' },
  { iconName: 'TICKET', label: '티켓북', url: '/my/ticketbook' },
];
