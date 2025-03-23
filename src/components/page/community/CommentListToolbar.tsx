'use client';
import ListToolbar from './../../common/ListToolbar';
import Dropdown from './../../common/Dropdown';
import CommentPostForm from './CommentPostForm';

interface CommentListToolbarProps {
  commentCount: number;
}

export default function CommentListToolbar({
  commentCount,
}: CommentListToolbarProps) {
  return (
    <div className='border-b'>
      <ListToolbar hideBorder>
        <div className='flex items-center gap-x-[8px]'>
          댓글
          <span className='font-semibold text-primary'>{commentCount}</span>
        </div>
        <div></div>
      </ListToolbar>
      <CommentPostForm />
    </div>
  );
}
