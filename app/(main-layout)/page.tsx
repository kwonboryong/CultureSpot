import MainCarousel from '@/components/common/MainCarousel';
import { mockAdvertisements } from '@/data/mockAdvertisement';

const Home = () => {
  return (
    <div className='lg:p-[0px_34px_34px]'>
      <MainCarousel items={mockAdvertisements} />
    </div>
  );
};

export default Home;
