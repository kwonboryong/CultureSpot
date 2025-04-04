'use client';
import { useState } from 'react';
import { Button } from '@/components/common/Button';
import Input from '@/components/common/Input';
import Icon from '@/icons/Icon';
import ToggleButton from '@/components/common/ToggleButton';
import AvatarProfile from '@/components/common/AvatarProfile';
import { GENRES } from '@/constants/event';
import { GenreName } from '@/types/event';
import { useModalStore } from '@/stores/useModalStore';

const Profile = () => {
  const { openModal } = useModalStore();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [nickname, setNickname] = useState('');
  const [selectedGenres, setSelectedGenres] = useState<GenreName[]>([
    '전시',
    '연극',
    '무용',
  ]);

  // 비밀번호 아이콘 핸들러
  const togglePasswordVisibility = (type: 'password' | 'confirmPassword') => {
    if (type === 'password') {
      setShowPassword((prev) => !prev);
      console.log('비밀번호 아이콘 클릭');
    } else {
      setShowConfirmPassword((prev) => !prev);
      console.log('비밀번호 확인 아이콘 클릭');
    }
  };

  // 중복 확인
  const onCheckDuplicate = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('중복 확인 아이콘 클릭');
  };

  // 장르 버튼 클릭 시 상태 업데이트
  const onGenreClick = (genre: GenreName) => {
    setSelectedGenres((prev) => {
      const updatedGenres = prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre];

      console.log('선택된 장르: ', updatedGenres);
      return updatedGenres;
    });
  };

  return (
    <div className='mx-auto flex w-[30%] flex-col items-center justify-center gap-3 p-5'>
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
              onClick={() => togglePasswordVisibility('password')}
              className='flex cursor-pointer'
            >
              <Icon
                name={showPassword ? 'EYE' : 'EYE_SLASHED'}
                size={20}
                className='stroke-text-sub stroke-[2px]'
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
              onClick={() => togglePasswordVisibility('confirmPassword')}
              className='flex cursor-pointer'
            >
              <Icon
                name={showConfirmPassword ? 'EYE' : 'EYE_SLASHED'}
                size={20}
                className='stroke-text-sub stroke-[2px]'
              />
            </button>
          }
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

        <div className='pt-2'>
          <p className='pb-1'>관심 장르 설정</p>
          {GENRES.map((genre, i) => (
            <ToggleButton
              key={i}
              text={genre.name}
              onClick={() => onGenreClick(genre.name)}
              isSelected={selectedGenres.includes(genre.name)}
            />
          ))}
        </div>
      </form>

      <div className='flex w-full gap-3'>
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
