import { genreNames } from '@/constants/event';
import { eventTypes, sortTypes } from './../constants/event';

export type EventTypeKey = keyof typeof eventTypes;
export type EventTypeValue = (typeof eventTypes)[keyof typeof eventTypes];

export type SortType = (typeof sortTypes)[number];

export type GenreName = (typeof genreNames)[number];

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
