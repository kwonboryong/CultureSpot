'use client';

import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const eventType = searchParams.get('eventType');
  const sortType = searchParams.get('sortType');

  return (
    <div>
      <h1>Search Page</h1>
      <h2>
        event type:
        <span className='bg-yellow-300'>{eventType ?? '없음'}</span>
      </h2>
      <h2>sort type:{sortType ?? '없음'}</h2>
    </div>
  );
}
