import { GroupedGenre } from '@/types/event';
import createMapping from '@/utils/createMapping';

export const EVENT_TYPES_EN = ['performance', 'exhibition'] as const;
export const EVENT_TYPES_KO = ['공연', '전시'] as const;
export const EVENT_TYPES_MAP = createMapping(EVENT_TYPES_EN, EVENT_TYPES_KO);

export const EVENT_SORT_TYPES_EN = ['latest', 'popular', 'exhibition'] as const;
export const EVENT_SORT_TYPES_KO = ['최신순', '인기많은순', '과거순'] as const;
export const EVENT_SORT_TYPES_MAP = createMapping(
  EVENT_SORT_TYPES_EN,
  EVENT_SORT_TYPES_KO
);

export const GENRES_EN = [
  'exhibition',
  'theater',
  'music',
  'dance',
  'fineArts',
  'architecture',
  'visualMedia',
  'literature',
  'culturalPolicy',
  'festival',
  'others',
] as const;

export const GENRES_KO = [
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

export const GENRES_MAP = createMapping(GENRES_EN, GENRES_KO);

export const GROUPED_GENRES: GroupedGenre[] = [
  { eventType: 'performance', genre: 'theater' },
  { eventType: 'performance', genre: 'music' },
  { eventType: 'performance', genre: 'dance' },
  { eventType: 'performance', genre: 'festival' },
  { eventType: 'exhibition', genre: 'exhibition' },
  { eventType: 'exhibition', genre: 'fineArts' },
  { eventType: 'exhibition', genre: 'architecture' },
  { eventType: 'exhibition', genre: 'visualMedia' },
  { eventType: 'exhibition', genre: 'literature' },
  { eventType: 'exhibition', genre: 'culturalPolicy' },
  { eventType: 'exhibition', genre: 'others' },
];
