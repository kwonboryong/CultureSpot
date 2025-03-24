'use client';
import { Comment } from '../../../types/comment';
import EditDeleteButton from '../../common/EditDeleteButton';
import { formatDate } from '../../../utils/formatDate';
import Avatar from 'boring-avatars';
import { mockCurrentUser } from '../../../data/mockUser';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const CommentEditForm = dynamic(() => import('./CommentEditForm'));

export default function CommentListItem({
  commentId,
  postId,
  content,
  userId,
  username,
  profileCode,
  createdAt,
  updatedAt,
}: Comment) {
  const [isEditing, setIsEditing] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(false);
  const time = formatDate(updatedAt || createdAt);
  const currentUserId = mockCurrentUser.userId;

  function onClickEdit() {
    setIsEditing(true);
    setResetTrigger((prev) => !prev);
    console.log(resetTrigger, 'outer');
  }
  function onClickDelete() {}

  return (
    <div className='flex w-full flex-col gap-y-[10px] border-b bg-bg px-[20px] py-[20px] transition last:border-b-0'>
      <div className='flex w-full items-start justify-between'>
        <div className='flex w-fit items-center gap-x-[8px]'>
          <Avatar size={30} variant='beam' name={String(profileCode)} />
          <p className='flex flex-col'>
            <span className='text-body2 font-semibold'>{username}</span>
            <time className='text-body2 text-text-sub'>{time}</time>
          </p>
        </div>
        {userId === currentUserId && (
          <EditDeleteButton
            onClickDelete={onClickDelete}
            onClickEdit={onClickEdit}
          />
        )}
      </div>
      <div>{content}</div>
      {userId === currentUserId && isEditing && (
        <CommentEditForm
          initialContent={content}
          resetTrigger={resetTrigger}
          onClickCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
}
