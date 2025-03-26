'use client';
import ListToolbar from '@/components/common/ListToolbar';
import Dropdown from '@/components/common/Dropdown';

interface PostListToolbarProps {
  postCount: number;
}

const PostListToolbar = ({ postCount }: PostListToolbarProps) => {
  return (
    <div className='border-b'>
      <ListToolbar hideBorder>
        <div className='flex items-center gap-x-[8px] text-body2 font-semibold text-text-sub'>
          전체 {postCount.toLocaleString()}개
        </div>
        <div>
          <Dropdown
            type='select'
            buttonWidth='sm'
            buttonHeight='sm'
            menuWidth='sm'
            menuHeight='sm'
            fontSize='sm'
            menuItems={[
              { label: '최신순', onClick: () => {} },
              { label: '댓글많은순', onClick: () => {} },
              { label: '좋아요순', onClick: () => {} },
              { label: '과거순', onClick: () => {} },
            ]}
          />
        </div>
      </ListToolbar>
    </div>
  );
};

export default PostListToolbar;
