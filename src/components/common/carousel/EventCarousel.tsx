'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactElement,
  Dispatch,
  SetStateAction,
} from 'react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/common/carousel/Carousel';
import formatDuration from '@/utils/formatDuration';
import ContentCard from '@/components/common/ContentCard';
import ToggleButton from '@/components/common/button/ToggleButton';
import Link from 'next/link';
import Icon from '@/icons/Icon';
import { EventTypeKey, SortType } from '@/types/event';
import { mockPerformances, mockExhibitions } from '@/data/mockEvent';

type EndPoint = 'recommended' | 'picks';

interface EventContextType {
  eventType: EventTypeKey;
  setEventType: Dispatch<SetStateAction<EventTypeKey>>;
  sortType?: SortType;
  endPoint?: EndPoint;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error(
      'useEventContext must be used within EventCarouselContainer'
    );
  }
  return context;
};

interface EventCarouselContainerProps {
  children: ReactElement[];
  initialEventType: EventTypeKey;
  sortType?: SortType;
  endPoint?: EndPoint;
}

const EventCarouselContainer = ({
  children,
  initialEventType,
  sortType,
  endPoint,
}: EventCarouselContainerProps) => {
  const [eventType, setEventType] = useState<EventTypeKey>(initialEventType);

  return (
    <EventContext.Provider
      value={{ eventType, setEventType, sortType, endPoint }}
    >
      <div className='flex flex-col gap-y-[20px]'>{children}</div>
    </EventContext.Provider>
  );
};

interface EventCarouselHeaderProps {
  title: string;
  isEventTypeVisible?: boolean;
}

const EventCarouselHeader = ({
  title,
  isEventTypeVisible = false,
}: EventCarouselHeaderProps) => {
  const { eventType, setEventType, sortType, endPoint } = useEventContext();
  const Container = sortType ? (Link as React.ElementType) : 'div';

  return (
    <div className='flex items-center justify-between'>
      <Container
        {...(sortType
          ? {
              href: `/search?eventType=${eventType}&sortType=${sortType}`,
            }
          : {})}
        className='flex items-center gap-x-2'
      >
        <h2 className='font-paperlogy font-normal'>{title}</h2>
        {sortType && (
          <Icon size={20} name='ARROW_RIGHT' className='stroke-[2px]' />
        )}
      </Container>
      {isEventTypeVisible && (
        <div>
          <ToggleButton
            text='공연'
            iconName='PERFORMANCE'
            isSelected={eventType === 'performance'}
            onClick={() => setEventType('performance')}
          />
          <ToggleButton
            text='전시'
            iconName='EXHIBITION'
            isSelected={eventType === 'exhibition'}
            onClick={() => setEventType('exhibition')}
          />
        </div>
      )}
    </div>
  );
};

interface EventCarouselProps {
  isRankVisible?: boolean;
}

interface Event {
  id: number;
  title: string;
  place: string;
  startDate: string;
  endDate: string;
  imageUrl: string;
}

const EventCarousel = ({ isRankVisible = false }: EventCarouselProps) => {
  const [events, setEvents] = useState<Event[]>([]);
  const { eventType, sortType, endPoint } = useEventContext();
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    if (eventType === 'performance') {
      setEvents(mockPerformances);
    } else {
      setEvents(mockExhibitions);
    }
  }, [eventType]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setWindowWidth(window.innerWidth);
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
        dragFree: windowWidth && windowWidth > 1024 ? false : true,
        slidesToScroll: windowWidth && windowWidth > 1024 ? 6 : 1,
      }}
    >
      <CarouselContent
        className={cn(
          '-ml-3',
          windowWidth && windowWidth < 1024 && 'overflow-visible'
        )}
      >
        {events.map(
          ({ title, place, startDate, endDate, imageUrl, id }, index) => (
            <CarouselItem
              key={id}
              className='max-w-[150px] flex-none pl-3 lg:max-w-none lg:flex-grow lg:basis-1/6'
            >
              <ContentCard
                index={index}
                id={id}
                title={title}
                place={place}
                date={formatDuration(startDate, endDate)}
                src={imageUrl}
                isRankVisible={isRankVisible}
              />
            </CarouselItem>
          )
        )}
      </CarouselContent>
      {windowWidth && windowWidth > 1024 && (
        <CarouselPrevious className='-translate-y-[70px]' />
      )}
      {windowWidth && windowWidth > 1024 && (
        <CarouselNext className='-translate-y-[70px]' />
      )}
    </Carousel>
  );
};

export { EventCarouselContainer, EventCarouselHeader, EventCarousel };
