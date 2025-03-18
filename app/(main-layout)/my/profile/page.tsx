'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from 'src/components/Common/Button';

interface ProfileForm {
  password: string;
  nickname: string;
}

export default function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileForm>({
    defaultValues: {
      password: '',
      nickname: '',
    },
  });

  const onSubmit: SubmitHandler<ProfileForm> = (data) =>
    console.log('폼 데이터:', data);

  return (
    <div className='max-w-md p-4 mx-auto border rounded-lg'>
      <p className='text-xl font-bold'>회원 정보 수정</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-4 mt-4'
      >
        {/* 이메일 입력 */}
        <label className='flex flex-col'>
          이메일:
          <input
            type='email'
            {...register('password', {
              required: '이메일을 입력하세요.',
              pattern: {
                value: /^\S+@\S+$/,
                message: '올바른 이메일을 입력하세요.',
              },
            })}
            className='p-2 border rounded'
          />
          {errors.password && (
            <p className='text-red-500'>{errors.password.message}</p>
          )}
        </label>

        <label className='flex flex-col'>
          소개:
          <textarea
            {...register('nickname')}
            className='p-2 border rounded resize-none'
          />
        </label>
        <div className='flex'>
          <Button variant='secondary' children='취소' type='submit' />
          <Button children='수정 완료' type='submit' />
        </div>
        <Button variant='none' className=''>
          회원 탈퇴
        </Button>
      </form>
    </div>
  );
}
