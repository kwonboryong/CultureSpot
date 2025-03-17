'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './Card';
import Icon from 'src/icons/Icon';

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
            src={src || '/assets/Logo Icon.svg'}
            className='h-56 w-40 rounded-10'
            alt='공연 이미지'
          />

          <button
            onClick={() => setLiked(!liked)}
            className='absolute bottom-2 right-2 text-xl transition-transform hover:scale-110'
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
        <p className='text-body2 text-text-sub'>{date}</p>
      </CardContent>
    </Card>
  );
};

export default ContentCard;
