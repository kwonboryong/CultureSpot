'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './Card';
import { CiHeart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';

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
            className='w-40 h-56 rounded-10'
            alt='공연 이미지'
          />

          <button
            onClick={() => setLiked(!liked)}
            className='absolute text-xl transition-transform bottom-2 right-2 hover:scale-110'
          >
            {liked ? (
              <FaHeart className='text-[#21C6BD]' />
            ) : (
              <CiHeart className='hover:text-[#rgba(33, 198, 189, 0.5)] text-border' />
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
