import Image from 'next/image';
import {
  EventCarouselContainer,
  EventCarouselHeader,
  EventCarousel,
} from '@/components/common/carousel/EventCarousel';
import GenreSearchButton from '@/components/common/button/GenreSearchButton';
import toKebabCase from '@/utils/toKebabCase';
import { mockCurrentUser } from '@/data/mockUser';
import { GROUPED_GENRES, GENRES_MAP, EVENT_TYPES_MAP } from '@/constants/event';
import { EventTypeEn } from '@/types/event';

interface EventSectionProps {
  eventType: EventTypeEn;
}

const EventSection = ({ eventType }: EventSectionProps) => {
  const { username } = mockCurrentUser;
  const filteredGenres = GROUPED_GENRES.filter(
    (group) => group.eventType === eventType
  );
  const eventTypeKo = EVENT_TYPES_MAP[eventType];

  return (
    <div className='pt-[20px]'>
      <div>
        <h3 className='font-paperlogy text-[22px] font-normal'>카테고리</h3>
        <div className='mt-[20px] flex gap-x-[20px]'>
          {filteredGenres.map(({ genre }) => (
            <GenreSearchButton key={genre} text={GENRES_MAP[genre]}>
              <Image
                width={40}
                height={40}
                src={`/assets/genre/genre-${toKebabCase(genre)}.svg`}
                alt={genre}
              />
            </GenreSearchButton>
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-y-[20px] pt-[60px]'>
        <EventCarouselContainer sortType='latest' initialEventType={eventType}>
          <EventCarouselHeader title={`최신 ${eventTypeKo}`} />
          <EventCarousel />
        </EventCarouselContainer>
        <EventCarouselContainer
          endPoint='recommended'
          initialEventType={eventType}
        >
          <EventCarouselHeader
            title={`${username}님이 좋아할 ${eventTypeKo}`}
          />
          <EventCarousel />
        </EventCarouselContainer>
        <EventCarouselContainer sortType='popular' initialEventType={eventType}>
          <EventCarouselHeader title={`실시간 인기 ${eventTypeKo}`} />
          <EventCarousel isRankVisible />
        </EventCarouselContainer>
        <EventCarouselContainer endPoint='picks' initialEventType={eventType}>
          <EventCarouselHeader title="MD's PICK!" />
          <EventCarousel />
        </EventCarouselContainer>
      </div>
    </div>
  );
};

export default EventSection;
