type Props = {
  searchParams: {
    eventType?: string;
    sortType?: string;
  };
};

const Page = ({ searchParams }: Props) => {
  const { eventType, sortType } = searchParams;

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
};

export default Page;
