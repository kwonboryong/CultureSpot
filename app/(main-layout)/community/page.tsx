'use client';

import PostListToolbar from '@/components/page/community/PostListToolbar';
import PostListItem from '@/components/page/community/PostListItem';
import SearchBar from '@/components/common/SearchBar';
import { Button } from '@/components/common/button/Button';

// 임시 유저 데이터
const User = {
  userId: 123,
  username: '권보령',
  profileCode: 123,
};

const Page = () => {
  return (
    <div className='px-10 pt-5'>
      <h3 className='select-none font-paperlogy text-[22px] font-normal'>
        커뮤니티
      </h3>
      <div className='flex'>
        <div className='ml-auto select-none'>
          <SearchBar variant='community' />
        </div>
      </div>
      <div className='mt-2'>
        <PostListToolbar postCount={0} />
      </div>

      <main>
        <PostListItem
          postId={0}
          title={'게시글 제목임'}
          content={'내용임'}
          author={User}
          hits={0}
          likeCount={0}
          commentCount={0}
          createdAt={'123'}
        />
        <PostListItem
          postId={0}
          title={'게시글 제목임'}
          content={'내용임'}
          author={User}
          hits={0}
          likeCount={0}
          commentCount={0}
          createdAt={'123'}
        />
        <PostListItem
          postId={0}
          title={'게시글 제목임'}
          content={'내용임'}
          author={User}
          hits={0}
          likeCount={0}
          commentCount={0}
          createdAt={'123'}
        />
        <PostListItem
          postId={0}
          title={'게시글 제목임'}
          content={'내용임'}
          author={User}
          hits={0}
          likeCount={0}
          commentCount={0}
          createdAt={'123'}
        />
        <PostListItem
          postId={0}
          title={'게시글 제목임'}
          content={'내용임'}
          author={User}
          hits={0}
          likeCount={0}
          commentCount={0}
          createdAt={'123'}
        />
      </main>
      <div className='flex justify-end mt-5'>
        <Button>글쓰기</Button>
      </div>
    </div>
  );
};

export default Page;
