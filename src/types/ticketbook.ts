import { EventSummary, EventPreview } from '@/types/event';

export interface TicketbookPreview extends EventSummary {
  rating: number;
  ticketbookId: number;
  ticketbookTitle: string;
  ticketbookContent: string;
  ticketbookCreatedAt: string;
  ticketbookUpdatedAt: string;
}

export interface TicketbookDetail extends EventSummary {
  place: string;
  posterUrl: string;
  rating: number;
  visitedStartDate: string;
  visitedEndDate: string;
  ticketbookId: number;
  ticketbookTitle: string;
  ticketbookContent: string;
  ticketbookCreatedAt: string;
  ticketbookUpdatedAt: string;
}
