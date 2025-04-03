'use client';

import { useState, useEffect } from 'react';
import formatDuration from '@/utils/formatDuration';
import ContentCard from '@/components/common/ContentCard';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/common/Carousel';

interface EventCarouselProps {
  isRankVisible?: boolean;
  events: {
    id: number;
    title: string;
    place: string;
    startDate: string;
    endDate: string;
    imageUrl: string;
  }[];
}

const EventCarousel = ({
  isRankVisible = false,
  events,
}: EventCarouselProps) => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

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

export default EventCarousel;
