import { useState, useRef } from 'react';
import { Button } from '@/components/common/Button';
import Textarea from '@/components/common/Textarea';
import { cn } from '@/lib/utils';

const CommentPostForm = () => {
  const [content, setContent] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

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
    <div className='flex items-end gap-x-2 px-[20px] pb-[20px]'>
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
          children='등록'
          size='sm'
          className='box-border font-semibold'
        />
      </div>
    </div>
  );
};

export default CommentPostForm;
