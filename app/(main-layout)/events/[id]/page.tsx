import { mockPerformances, mockExhibitions } from '@/data/mockEvent';

const Page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const mockEvents = [...mockPerformances, ...mockExhibitions];
  const event = mockEvents.find((event) => event.id === Number(id));

  return (
    <div>
      <div>{event?.title}</div>
      <div>{event?.place}</div>
      <div>{event?.startDate}</div>
      <div>{event?.endDate}</div>
    </div>
  );
};

export default Page;
