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
