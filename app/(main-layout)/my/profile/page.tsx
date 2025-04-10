'use client';
import { useState } from 'react';
import { Button } from '@/components/common/button/Button';
import Input from '@/components/common/Input';
import ToggleButton from '@/components/common/button/ToggleButton';
import AvatarProfile from '@/components/common/AvatarProfile';
import { GENRES_EN, GENRES_MAP } from '@/constants/event';
import { GenreEn } from '@/types/event';
import { useModalStore } from '@/stores/useModalStore';

const Profile = () => {
  const { openModal } = useModalStore();

  const [nickname, setNickname] = useState('');
  const [selectedGenres, setSelectedGenres] = useState<GenreEn[]>([
    'exhibition',
    'theater',
    'dance',
  ]);

  // 중복 확인
  const onCheckDuplicate = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('중복 확인 아이콘 클릭');
  };

  // 장르 버튼 클릭 시 상태 업데이트
  const onGenreClick = (genre: GenreEn) => {
    setSelectedGenres((prev) => {
      const updatedGenres = prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre];

      console.log('선택된 장르: ', updatedGenres);
      return updatedGenres;
    });
  };

  return (
    <div className='mx-auto flex w-96 flex-col items-center justify-center gap-3 p-5'>
      <p className='text-h3'>회원 정보 수정</p>
      <AvatarProfile />

      <form action='' className='flex flex-col gap-5 p-3'>
        <Input
          type='email'
          placeholder='기존 이메일 값'
          readOnly
          onFocus={(e) => e.target.blur()}
        />
        <Input
          type='text'
          icon={
            <button type='button' onClick={onCheckDuplicate}>
              중복 확인
            </button>
          }
          placeholder='닉네임'
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        <div className='py-4'>
          <p className='pb-1'>관심 장르 설정</p>
          {GENRES_EN.map((genre, i) => (
            <ToggleButton
              key={i}
              text={GENRES_MAP[genre]}
              onClick={() => onGenreClick(genre)}
              isSelected={selectedGenres.includes(genre)}
            />
          ))}
        </div>
      </form>

      <div className='flex w-[95%] gap-3'>
        <Button
          variant='secondary'
          children='취소'
          type='button'
          className='flex-1'
          onClick={() => openModal('cancel')}
        />
        <Button children='수정 완료' type='submit' className='flex-1' />
      </div>

      <Button
        children='회원 탈퇴'
        variant='none'
        className='text-xs'
        onClick={() => openModal('withdraw')}
      />
    </div>
  );
};

export default Profile;
