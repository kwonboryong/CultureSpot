'use client';

import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay';
import { useState, useEffect } from 'react';
import { Advertisement } from '@/types/advertisement';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from '@/components/common/carousel/Carousel';
import { cn } from '@/lib/utils';

interface MainCarouselProps {
  items: Advertisement[];
}

const MainCarousel = ({ items }: MainCarouselProps) => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    onSelect();

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <div className='relative'>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
          slidesToScroll: 1,
          duration: 15,
        }}
        plugins={[
          Autoplay({
            delay: 3500,
          }),
        ]}
        setApi={setApi}
        className='overflow-hidden rounded-10 lg:rounded-20'
      >
        <CarouselContent>
          {items.map(({ id, description, linkUrl, imageUrl }) => (
            <CarouselItem key={id} className='flex aspect-[3/1] max-h-[500px]'>
              <Link className='h-full w-full' href={linkUrl}>
                <img
                  className='h-full w-full object-cover'
                  src={imageUrl}
                  alt={description}
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className='absolute bottom-4 right-0 hidden w-full justify-center gap-2 lg:flex'>
        {items.map(({ id, imageUrl, description }, index) => (
          <button
            key={id}
            onMouseOver={() => api?.scrollTo(index)}
            className={cn(
              'shrink-0 overflow-hidden rounded-md border-2 transition-all duration-200',
              selectedIndex === index
                ? 'border-white opacity-100'
                : 'border-transparent opacity-50 hover:opacity-80'
            )}
            aria-label={`Go to slide ${index + 1}`}
          >
            <img
              src={imageUrl}
              alt={description}
              className='h-10 w-10 object-cover'
            />
          </button>
        ))}
      </div>

      <div className='absolute bottom-4 right-0 -translate-x-1/2 rounded-full bg-black/40 px-3 py-1 text-caption text-white lg:hidden'>
        <span className='font-semibold'>{selectedIndex + 1}</span> /{' '}
        {items.length}
      </div>
    </div>
  );
};

export default MainCarousel;
