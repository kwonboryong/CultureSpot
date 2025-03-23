'use client';

type OnClickFunctions = {
  onClickEdit: () => void;
  onClickDelete: () => void;
};

export default function EditDeleteButton({
  onClickEdit,
  onClickDelete,
}: OnClickFunctions) {
  return (
    <div className='flex items-center gap-x-[6px] text-body2 text-text-sub'>
      <span className='cursor-pointer hover:text-text' onClick={onClickEdit}>
        수정
      </span>
      <span className='cursor-pointer hover:text-text' onClick={onClickDelete}>
        삭제
      </span>
    </div>
  );
}
