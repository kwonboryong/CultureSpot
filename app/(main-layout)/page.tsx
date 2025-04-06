import MainCarousel from '@/components/common/carousel/MainCarousel';
import { mockAdvertisements } from '@/data/mockAdvertisement';
import {
  EventCarouselContainer,
  EventCarouselHeader,
  EventCarousel,
} from '@/components/common/carousel/EventCarousel';
import { mockCurrentUser } from '@/data/mockUser';

const Home = () => {
  const { username } = mockCurrentUser;
  return (
    <div>
      <MainCarousel items={mockAdvertisements} />
      <div className='flex flex-col gap-y-[20px] pt-[60px]'>
        <EventCarouselContainer
          sortType='latest'
          initialEventType='performance'
        >
          <EventCarouselHeader title='최신 공연' />
          <EventCarousel />
        </EventCarouselContainer>
        <EventCarouselContainer sortType='latest' initialEventType='exhibition'>
          <EventCarouselHeader title='최신 전시' />
          <EventCarousel />
        </EventCarouselContainer>
        <EventCarouselContainer
          endPoint='recommended'
          initialEventType='performance'
        >
          <EventCarouselHeader
            title={`${username}님이 좋아할 이벤트`}
            isEventTypeVisible
          />
          <EventCarousel />
        </EventCarouselContainer>
        <EventCarouselContainer
          sortType='popular'
          initialEventType='performance'
        >
          <EventCarouselHeader title='실시간 인기 이벤트' isEventTypeVisible />
          <EventCarousel isRankVisible />
        </EventCarouselContainer>
        <EventCarouselContainer endPoint='picks' initialEventType='performance'>
          <EventCarouselHeader title="MD's PICK!" isEventTypeVisible />
          <EventCarousel />
        </EventCarouselContainer>
      </div>
    </div>
  );
};

export default Home;
