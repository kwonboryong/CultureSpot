import Link from 'next/link';
import Icon from '@/icons/Icon';
import { PostSummary } from '@/types/post';
import { timeAgo } from '@/utils/timeAgo';
import Avatar from 'boring-avatars';

interface PostListItemProps extends PostSummary {
  checkbox?: boolean;
}

export default function PostListItem({
  postId,
  title,
  content,
  author,
  hits,
  likeCount,
  commentCount,
  createdAt,
  updatedAt,
  checkbox = false,
}: PostListItemProps) {
  const time = timeAgo(updatedAt || createdAt);

  return (
    <div className='flex items-center border-b border-divider bg-bg transition last:border-b-0 hover:brightness-[0.98]'>
      {checkbox && <input type='checkbox' className='cursor-pointer' />}
      <Link
        href={`/post/${postId}`}
        className='flex w-full flex-col gap-y-[10px] px-[20px] py-[20px]'
      >
        <p className='font-semibold truncate'>{title}</p>
        <p className='overflow-hidden text-ellipsis text-nowrap text-body2 text-text-sub'>
          {content}
        </p>
        <div className='flex items-center justify-between w-full pt-2 text-body2'>
          <p className='flex items-center gap-x-[6px]'>
            <Avatar
              name={String(author.profileCode)}
              variant='beam'
              size={20}
            />
            <span>{author.username}</span>
            <span>·</span>
            <time className='text-text-sub'>{time}</time>
          </p>
          <div className='flex items-center gap-x-[10px] text-text-sub'>
            <div className='flex items-center gap-x-[6px]'>
              <Icon
                name='EYE'
                size={14}
                className='stroke-text-sub stroke-[2px]'
              />
              {hits}
            </div>
            <div className='flex items-center gap-x-[6px]'>
              <Icon
                name='LIKE'
                size={14}
                className='stroke-text-sub stroke-[2px]'
              />
              {likeCount}
            </div>
            <div className='flex items-center gap-x-[6px]'>
              <Icon
                name='COMMENT'
                size={14}
                className='stroke-text-sub stroke-[2px]'
              />
              {commentCount}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
