import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/common/Button';
import Textarea from '@/components/common/Textarea';
import { cn } from '@/lib/utils';

interface CommentEditFormProps {
  initialContent: string;
  resetTrigger: boolean;
  onClickCancel: () => void;
}

function CommentEditForm({
  initialContent,
  resetTrigger,
  onClickCancel,
}: CommentEditFormProps) {
  const [content, setContent] = useState(initialContent);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    setContent(initialContent);
    handleInput();
  }, [resetTrigger]);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

      if (textareaRef.current.scrollHeight > 120) {
        textareaRef.current.style.overflowY = 'auto';
      } else {
        textareaRef.current.style.overflowY = 'hidden';
      }
    }
  };

  return (
    <div className='flex items-end gap-x-2'>
      <Textarea
        ref={textareaRef}
        value={content}
        onChange={handleChange}
        onInput={handleInput}
        rows={1}
        className={cn(
          'h-[36px] max-h-[120px] min-h-[24px] flex-grow resize-none overflow-hidden p-2 text-sm'
        )}
        placeholder='댓글을 입력해주세요.'
      />
      <div className='flex gap-x-[4px]'>
        <Button
          size='sm'
          variant='secondary'
          children='취소'
          className='w-[60px] font-semibold'
          onClick={onClickCancel}
        />
        <Button
          children='등록'
          size='sm'
          className='box-border w-[60px] font-semibold'
        />
      </div>
    </div>
  );
}

export default CommentEditForm;
