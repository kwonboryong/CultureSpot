import CommentListToolbar from '@/components/page/community/CommentListToolbar';
import CommentListItem from '@/components/page/community/CommentListItem';

const Page = () => {
  return (
    <div>
      <h1>게시글 상세 페이지</h1>

      <CommentListToolbar commentCount={0} />
      <CommentListItem
        commentId={0}
        postId={0}
        content={''}
        userId={0}
        username={''}
        profileCode={0}
        createdAt={''}
        updatedAt={''}
      />
    </div>
  );
};

export default Page;
