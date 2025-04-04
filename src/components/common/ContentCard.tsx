'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/common/Card';
import Icon from '@/icons/Icon';
import Link from 'next/link';

interface ContentProps {
  index: number;
  id: number;
  src?: string;
  title: string;
  place: string;
  date: string;
  isRankVisible?: boolean;
}

const ContentCard = ({
  index,
  id,
  src,
  title,
  place,
  date,
  isRankVisible = false,
}: ContentProps) => {
  const [liked, setLiked] = useState(false);
  const [cardWidth, setCardWidth] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const onClickLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLiked((prev) => !prev);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateWidth = () => {
        if (cardRef.current) {
          setCardWidth(cardRef.current.offsetWidth);
        }
      };

      updateWidth();
      window.addEventListener('resize', updateWidth);

      return () => {
        window.removeEventListener('resize', updateWidth);
      };
    }
  }, []);

  return (
    <Card ref={cardRef} className='transition-all duration-300'>
      <Link href={`/events/${id}`}>
        <CardHeader>
          <div className='group relative overflow-hidden rounded-10'>
            <img
              src={src || '/assets/logo-icon.svg'}
              className='aspect-[3/4] w-full rounded-10 transition-transform duration-300 group-hover:scale-110'
              alt='공연 이미지'
            />
            {isRankVisible && (
              <div className='absolute bottom-0 left-0 h-1/3 w-full rounded-10 bg-gradient-to-t from-black/60 to-transparent'></div>
            )}
            <button
              onClick={onClickLike}
              className='absolute bottom-2 right-2 text-xl transition-transform hover:scale-110'
            >
              {liked ? (
                <Icon
                  name='LIKE'
                  size={cardWidth && cardWidth > 150 ? 22 : 18}
                  className='fill-primary stroke-none'
                />
              ) : (
                <Icon
                  name='LIKE'
                  size={cardWidth && cardWidth > 150 ? 22 : 18}
                  className='stroke-border hover:stroke-primary'
                />
              )}
            </button>
            {isRankVisible && cardWidth && (
              <div
                className='absolute font-semibold text-white'
                style={{
                  fontSize: cardWidth * 0.2,
                  bottom: 0,
                  left: cardWidth * 0.06,
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                }}
              >
                {index + 1}
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className='h-[140px]'>
          <CardTitle className='line-clamp-2'>{title}</CardTitle>
          <p className='line-clamp-2 text-sm text-text'>{place}</p>
          <p className='line-clamp-2 text-caption text-text-sub'>{date}</p>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ContentCard;
