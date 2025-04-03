'use client';

import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay';
import { Advertisement } from '@/types/advertisement';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/common/Carousel';

interface MainCarouselProps {
  items: Advertisement[];
}

const MainCarousel = ({ items }: MainCarouselProps) => {
  return (
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
      className='overflow-hidden lg:rounded-20'
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
  );
};

export default MainCarousel;
