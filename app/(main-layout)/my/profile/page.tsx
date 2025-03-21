'use client';
import { useState } from 'react';
import { Button } from 'src/components/Common/Button';
import Input from 'src/components/Common/Input';
import Icon from 'src/icons/Icon';
import GenreButton from './../../../../src/components/Common/GenreButton';
import AvatarProfile from 'src/components/Common/AvatarProfile';

// 상수 처리
const genres = [
  { type: '공연', name: '전시' },
  { type: '공연', name: '연극' },
  { type: '공연', name: '음악' },
  { type: '공연', name: '무용' },
  { type: '공연', name: '미술' },
  { type: '공연', name: '건축' },
  { type: '공연', name: '영상' },
  { type: '전시', name: '문학' },
  { type: '전시', name: '문화 정책' },
  { type: '전시', name: '축제' },
  { type: '전시', name: '기타' },
];

export default function Profile() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className='mx-auto flex w-[50%] flex-col items-center justify-center gap-3 p-5'>
      {/* w-[30%]  */}
      <p className='text-h3'>회원 정보 수정</p>
      <AvatarProfile />

      <form action='' className='flex flex-col gap-5 p-2'>
        <Input
          type='email'
          placeholder='기존 이메일 값'
          readOnly
          onFocus={(e) => e.target.blur()}
        />
        <Input
          type='password'
          placeholder='비밀번호'
          icon={
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='cursor-pointer'
            >
              <Icon
                name={showPassword ? 'EYE' : 'EYE_SLASHED'}
                size={20}
                className='stroke-text-sub'
              />
            </button>
          }
        />
        <Input
          type='password'
          placeholder='비밀번호 확인'
          icon={
            <button
              type='button'
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className='cursor-pointer'
            >
              <Icon
                name={showConfirmPassword ? 'EYE' : 'EYE_SLASHED'}
                size={20}
                className='stroke-text-sub'
              />
            </button>
          }
        />

        <Input type='text' icon='중복 확인' placeholder='닉네임' />

        <div className='pt-2'>
          <p className='pb-1'>관심 장르 설정</p>
          {genres.map((genre, i) => (
            <GenreButton key={i} genre={genre.name} mode={'toggle'} />
          ))}
        </div>
      </form>

      <div className='flex w-full gap-3'>
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
