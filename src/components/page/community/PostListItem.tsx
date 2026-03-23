import Link from 'next/link';
import Icon from '@/icons/Icon';
import { PostSummary } from '@/types/post';
import timeAgo from '@/utils/timeAgo';
import Avatar from 'boring-avatars';

interface PostListItemProps extends PostSummary {
  checkbox?: boolean;
}

const PostListItem = ({
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
}: PostListItemProps) => {
  const time = timeAgo(updatedAt || createdAt);

  return (
    <div className='flex items-center border-b border-divider bg-bg transition last:border-b-0 hover:brightness-[0.98]'>
      {checkbox && <input type='checkbox' className='cursor-pointer' />}

      <Link
        href={`/community/${postId}`}
        className='flex w-full flex-col px-[20px] py-[16px]'
      >
        <div className='flex items-center'>
          <div className='flex-1 min-w-0'>
            <div className='flex items-center min-w-0 gap-x-1'>
              <p className='font-semibold truncate'>{title}</p>
              <span className='ml-5 font-medium shrink-0 text-body2'>
                {author.username}
              </span>
              <span className='shrink-0 text-text-sub'>·</span>
              <time className='shrink-0 text-body2 text-text-sub'>{time}</time>
            </div>

            <div className='mt-[5px] flex items-center justify-between'>
              <p className='flex-1 min-w-0 overflow-hidden text-ellipsis text-nowrap text-body2 text-text-sub'>
                {content}
              </p>

              <div className='flex shrink-0 items-center gap-x-[10px] text-body2 text-text-sub'>
                <div className='flex items-center gap-x-[4px]'>
                  <Icon
                    name='EYE'
                    size={14}
                    className='stroke-text-sub stroke-[2px]'
                  />
                  <span>{hits}</span>
                </div>

                <div className='flex items-center gap-x-[4px]'>
                  <Icon
                    name='LIKE'
                    size={14}
                    className='stroke-text-sub stroke-[2px]'
                  />
                  <span>{likeCount}</span>
                </div>

                <div className='flex items-center gap-x-[4px]'>
                  <Icon
                    name='COMMENT'
                    size={14}
                    className='stroke-text-sub stroke-[2px]'
                  />
                  <span>{commentCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostListItem;
