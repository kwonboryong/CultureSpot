'use client';
import ListToolbar from '@/components/common/ListToolbar';
import Dropdown from '@/components/common/Dropdown';
import CommentPostForm from '@/components/page/community/CommentPostForm';

interface CommentListToolbarProps {
  commentCount: number;
}

const CommentListToolbar = ({ commentCount }: CommentListToolbarProps) => {
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
};

export default CommentListToolbar;
