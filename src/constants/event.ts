import { GenreName } from '@/types/event';

export const eventTypes = {
  performance: '공연',
  exhibition: '전시',
} as const;

export const sortTypes = ['latest', 'popular', 'oldest'] as const;

export const genreNames = [
  '전시',
  '연극',
  '음악',
  '무용',
  '미술',
  '건축',
  '영상',
  '문학',
  '문화 정책',
  '축제',
  '기타',
] as const;

interface Genre {
  type: string;
  name: GenreName;
}

export const GENRES: Genre[] = [
  { type: '공연', name: '전시' },
  { type: '공연', name: '연극' },
  { type: '공연', name: '음악' },
  { type: '공연', name: '무용' },
  { type: '공연', name: '미술' },
  { type: '공연', name: '건축' },
  { type: '공연', name: '영상' },
  { type: '전시', name: '문학' },
  { type: '전시', name: '문화 정책' },
  { type: '전시', name: '축제' },
  { type: '전시', name: '기타' },
];
