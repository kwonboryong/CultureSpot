import {
  EVENT_TYPES_EN,
  EVENT_TYPES_KO,
  EVENT_SORT_TYPES_EN,
  EVENT_SORT_TYPES_KO,
  GENRES_EN,
  GENRES_KO,
} from '@/constants/event';

export type EventTypeEn = (typeof EVENT_TYPES_EN)[number];
export type EventTypeKo = (typeof EVENT_TYPES_KO)[number];

export type EventSortTypeEn = (typeof EVENT_SORT_TYPES_EN)[number];
export type EventSortTypeKo = (typeof EVENT_SORT_TYPES_KO)[number];

export type GenreEn = (typeof GENRES_EN)[number];
export type GenreKo = (typeof GENRES_KO)[number];

export interface GroupedGenre {
  eventType: EventTypeEn;
  genre: GenreEn;
}

export interface EventSummary {
  eventId: number;
  eventTitle: string;
  eventType: string;
  eventCategory: string;
}

export interface EventPreview extends EventSummary {
  place: string;
  eventStartDate: string;
  eventEndDate: string;
  posterUrl: string;
}

export interface EventDetail extends EventPreview {
  address: string;
  gpsX: string;
  gpsY: string;
  eventDescription: string;
  eventUrl: string;
}
