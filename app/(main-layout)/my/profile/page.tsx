'use client';
import { Button } from 'src/components/Common/Button';
import Input from 'src/components/Common/Input';
import Icon from 'src/icons/Icon';
import GenreButton from './../../../../src/components/Common/GenreButton';
import AvatarProfile from 'src/components/Common/AvatarProfile';

// 상수 처리
const genres = [
  { type: '공연', name: '연극' },
  { type: '공연', name: '뮤지컬' },
  { type: '공연', name: '콘서트' },
  { type: '공연', name: '클래식' },
  { type: '공연', name: '무용' },
  { type: '공연', name: '전통 공연' },
  { type: '공연', name: '코미디' },
  { type: '전시', name: '미술 전시' },
  { type: '전시', name: '현대 미술' },
  { type: '전시', name: '과학/역사 전시' },
];

export default function Profile() {
  return (
    <div className='mx-auto flex flex-col items-center justify-center gap-3 p-5'>
      <p className='text-h3'>회원 정보 수정</p>

      <AvatarProfile />

      <form action='' className='flex flex-col gap-5'>
        <Input type='email' placeholder='기존 이메일 값' />
        <Input
          type='password'
          placeholder='비밀번호'
          icon={<Icon name='EYE' size={40} className='bg-black text-black' />}
        />
        <Input
          type='password'
          placeholder='비밀번호 확인'
          icon={<Icon name='EYE' size={40} className='bg-black text-black' />}
        />
        <Input type='text' icon='중복 확인' placeholder='닉네임' />

        <div className=''>
          <p>관심 장르 설정</p>
          {genres.map((genre, i) => (
            <GenreButton key={i} genre={genre.name} mode={'toggle'} />
          ))}
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
