'use client';

import { useState, useRef, useEffect } from 'react';
import EditDeleteButton from 'src/components/common/EditDeleteButton';
import { cn } from 'src/lib/utils';
import Rating from 'src/components/page/ticketbook/Rating';
import styles from './TicketbookDetail.module.css';
import Avatar from 'boring-avatars';
import { TicketbookDetail } from '@/types/ticketbook';
import Link from 'next/link';
import formatDate from '@/utils/formatDate';
import { mockCurrentUser } from '@/data/mockUser';
import Icon from '@/icons/Icon';

const TicketbookDetail = ({
  ticketbookId,
  eventTitle,
  eventId,
  eventType,
  place,
  posterUrl,
  visitedStartDate,
  visitedEndDate,
  rating,
  ticketbookTitle,
  ticketbookContent,
  ticketbookCreatedAt,
  ticketbookUpdatedAt,
}: TicketbookDetail) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  const { username } = mockCurrentUser;
  const onClickEdit = () => {};
  const onClickDelete = () => {};
  const onClickFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (divRef.current) {
        setWidth(divRef.current.offsetWidth);
      }
    });

    if (divRef.current) {
      resizeObserver.observe(divRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className='pointer-events-auto -z-10 flex items-center justify-center'>
      <div
        ref={divRef}
        className={cn(
          isFlipped ? styles.rotateY180 : styles.rotateY0,
          styles.card,
          'relative inline-grid aspect-[2.3/1] w-full max-w-[800px] duration-300'
        )}
      >
        <div
          className={cn(
            'absolute inset-0 flex flex-row rounded-5 shadow-[0_35px_60px_-5px_rgba(0,0,0,0.2)]'
          )}
        >
          <button
            className='absolute text-body2 text-text-sub hover:text-primary'
            style={{ top: width * 0.02, right: width * 0.02 }}
            onClick={onClickFlip}
          >
            리뷰 보기
          </button>
          <div className='relative flex flex-[3] flex-col overflow-hidden rounded-l-5 bg-bg'>
            <div className='relative h-full'>
              <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center overflow-hidden pb-[50px]'>
                <Avatar
                  name={String(eventId)}
                  square
                  variant='marble'
                  colors={[
                    '#b699e8',
                    '#86ec9e',
                    '#74bce8',
                    '#ed91a4',
                    '#f3b086',
                    '#f1cd7b',
                  ]}
                />
              </div>
              <div className='jusitfy-center absolute flex h-full w-full items-end overflow-hidden pb-[50px] opacity-30'>
                <img
                  src='/assets/logo-icon.svg'
                  alt='logo-icon'
                  className='absolute bottom-[-10%] left-[30%] w-[80%] brightness-[500%] filter'
                />
              </div>
              <div
                className='absolute left-0 top-0 flex h-full w-full flex-col justify-end'
                style={{
                  padding: `${width * 0.02}px ${width * 0.03}px`,
                  gap: width * 0.02,
                }}
              >
                <Link href={`/${eventType}/${eventId}`} className='w-fit'>
                  <h1
                    className='inline whitespace-pre-wrap font-paperlogy duration-150 hover:bg-bg-dark hover:bg-opacity-20'
                    style={{
                      fontSize: width * 0.04,
                    }}
                  >
                    {`${eventTitle}` + `🔗`}
                  </h1>
                </Link>
                <div
                  className='flex flex-col'
                  style={{ fontSize: width * 0.02, gap: width * 0.01 }}
                >
                  <div className='gap-y-10px items-ratinigt flex flex-[1] gap-x-[10px]'>
                    <div className='flex flex-[1] flex-col gap-x-[6px]'>
                      <p>Date</p>
                      <p className='font-semibold'>
                        {formatDate(visitedStartDate).slice(0, 10)}
                        {visitedStartDate !== visitedEndDate &&
                          ` - ${formatDate(visitedEndDate).slice(0, 10)}`}
                      </p>
                    </div>
                    <div className='flex flex-[1] flex-col gap-x-[6px]'>
                      <p>Place</p>
                      <p className='font-semibold'>{place}</p>
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <p>Name</p>
                    <p className='font-semibold'>{username}</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='flex justify-between'
              style={{ padding: `${width * 0.02}px ${width * 0.03}px` }}
            >
              <img src='/assets/logo.svg' alt='logo' width={width * 0.15} />
              <p style={{ fontSize: width * 0.015 }}>CUL-{ticketbookId}</p>
            </div>
          </div>

          <div
            className='flex flex-[1] flex-col justify-between rounded-r-5 border-l-[2px] border-dashed border-divider bg-bg'
            style={{ padding: width * 0.02 }}
          >
            <div>
              <div
                className='font-paperlogy font-semibold'
                style={{
                  fontSize: width * 0.02,
                  paddingTop: width * 0.04,
                  paddingBottom: width * 0.02,
                }}
              >
                {eventTitle}
              </div>
              <div
                className='items-ratinigt flex'
                style={{
                  fontSize: width * 0.015,
                  gap: width * 0.006,
                  paddingBottom: width * 0.01,
                }}
              >
                <p>Date</p>
                <p>|</p>
                <p>
                  {formatDate(visitedStartDate).slice(0, 10)}
                  {visitedStartDate !== visitedEndDate &&
                    ` - ${formatDate(visitedEndDate).slice(0, 10)}`}
                </p>
              </div>
              <div
                className='items-ratinigt flex'
                style={{
                  fontSize: width * 0.015,
                  gap: width * 0.006,
                  paddingBottom: width * 0.01,
                }}
              >
                <p>Place</p>
                <p>|</p>
                <p>{place}</p>
              </div>
              <div
                className='items-ratinigt flex'
                style={{
                  fontSize: width * 0.015,
                  gap: width * 0.006,
                  paddingBottom: width * 0.01,
                }}
              >
                <p>Name</p>
                <p>|</p>
                <p>{username}</p>
              </div>
            </div>
            <div className='flex items-end justify-between'>
              <img src='/assets/logo.svg' alt='logo' width={width * 0.15} />
              <img
                src='/assets/ticketbook-qr-code.png'
                width={width * 0.07}
                alt='qr-code'
              />
            </div>
          </div>
        </div>

        <div
          className={cn(
            'absolute inset-0 flex flex-row rounded-5 bg-bg-light shadow-[0_35px_60px_-5px_rgba(0,0,0,0.2)]',
            styles.back
          )}
        >
          <button
            className='absolute text-body2 text-text-sub hover:text-primary'
            style={{ top: width * 0.02, right: width * 0.03 }}
            onClick={onClickFlip}
          >
            티켓 보기
          </button>
          <div
            className='flex flex-[1] flex-col justify-between rounded-l-5 border-r-[2px] border-dashed border-divider bg-bg'
            style={{ padding: width * 0.02, gap: width * 0.03 }}
          >
            <div className='h-full w-full overflow-hidden rounded-5 bg-primary'>
              <img src={posterUrl} className='h-full w-full object-cover' />
            </div>

            <img src='/assets/logo.svg' alt='logo' width={width * 0.15} />
          </div>

          <div
            className='h- inset-0 flex h-[100%] flex-[3] flex-col overflow-hidden rounded-r-5'
            style={{
              padding: `${width * 0.02}px ${width * 0.03}px`,
              gap: width * 0.015,
            }}
          >
            <Rating size={width * 0.02} fixedRate={rating} />
            <div
              className='flex flex-shrink-0 items-center justify-between'
              style={{ fontSize: width * 0.02 }}
            >
              <Link
                href={`/${eventType}/${eventId}`}
                className='flex items-center gap-x-[4px] hover:text-text-sub'
              >
                {eventTitle} <Icon name='ARROW_RIGHT' size={width * 0.02} />
              </Link>
              <EditDeleteButton
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
              />
            </div>
            <div
              className='relative flex flex-col'
              style={{ fontSize: width * 0.02, gap: width * 0.02 }}
            >
              <h3
                className={cn('overflow-hidden whitespace-nowrap')}
                style={{ fontSize: width * 0.025 }}
              >
                {ticketbookTitle}
              </h3>
              <p
                className='scrollbar-hidden aspect-[3.2/1] overflow-y-scroll'
                style={{ fontSize: width * 0.02 }}
              >
                {ticketbookContent}
              </p>
            </div>
            <div
              className='mt-auto flex items-center justify-end gap-x-[10px] text-text-sub'
              style={{ fontSize: width * 0.015 }}
            >
              <div>작성 {formatDate(ticketbookCreatedAt)}</div>
              {ticketbookUpdatedAt && (
                <div>수정 {formatDate(ticketbookUpdatedAt)}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketbookDetail;
