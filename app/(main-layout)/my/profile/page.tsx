'use client';
import { Button } from 'src/components/Common/Button';
import Input from 'src/components/Common/Input';
import Icon from 'src/icons/Icon';

export default function Profile() {
  return (
    <div className='flex flex-col items-center justify-center gap-3 p-5 mx-auto'>
      <p className='text-h3'>회원 정보 수정</p>

      <form action='' className='flex flex-col gap-5'>
        <Input type='email' placeholder='기존 이메일 값' />
        <Input
          type='password'
          placeholder='비밀번호'
          icon={<Icon name='EYE' size={40} className='text-black bg-black' />}
        />
        <Input
          type='password'
          placeholder='비밀번호 확인'
          icon={<Icon name='EYE' size={40} className='text-black bg-black' />}
        />
        <Input type='text' icon='중복 확인' placeholder='닉네임' />

        <div className='bg-teal-300'>
          <p>관심 장르 설정</p>
        </div>
      </form>

      <div className='flex gap-3'>
        <Button
          variant='secondary'
          children='취소'
          type='submit'
          className='flex-1'
        />
        <Button children='수정 완료' type='submit' className='flex-1' />
      </div>
      <Button variant='none' className='text-xs'>
        회원 탈퇴
      </Button>
    </div>
  );
}
