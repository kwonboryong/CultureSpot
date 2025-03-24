'use client';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/common/Card';
import Icon from '@/icons/Icon';

interface ContentProps {
  src?: string;
  title: string;
  place: string;
  date: string;
}

const ContentCard = ({ src, title, place, date }: ContentProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <Card>
      <CardHeader>
        <div className='relative'>
          <img
            src={src || '/assets/logo-icon.svg'}
            className='w-40 h-56 rounded-10'
            alt='공연 이미지'
          />

          <button
            onClick={() => setLiked(!liked)}
            className='absolute text-xl transition-transform bottom-2 right-2 hover:scale-110'
          >
            {liked ? (
              <Icon
                name='LIKE'
                size={18}
                className='fill-primary stroke-none'
              />
            ) : (
              <Icon
                name='LIKE'
                size={18}
                className='stroke-border hover:stroke-primary'
              />
            )}
          </button>
        </div>

        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className='text-sm text-text'>{place}</p>
        <p className='text-caption text-text-sub'>{date}</p>
      </CardContent>
    </Card>
  );
};

export default ContentCard;
