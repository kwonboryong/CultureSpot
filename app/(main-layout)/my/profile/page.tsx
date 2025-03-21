'use client';
import { useState } from 'react';
import { Button } from 'src/components/Common/Button';
import Input from 'src/components/Common/Input';
import Icon from 'src/icons/Icon';
import GenreButton from './../../../../src/components/Common/GenreButton';
import AvatarProfile from 'src/components/Common/AvatarProfile';
import CommonModal from 'src/components/modal/CommonModal';

// 장르 상수 처리
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
  // 모달
  const [modalVariant, setModalVariant] = useState<
    'cancel' | 'withdraw' | null
  >(null);

  const openModal = (variant: 'cancel' | 'withdraw') =>
    setModalVariant(variant);
  const closeModal = () => setModalVariant(null);

  // 비밀번호 보이기 / 숨기기
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [nickname, setNickname] = useState('');

  // 중복 확인
  const handleCheckDuplicate = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('중복 확인 아이콘 클릭');
  };

  // 선택된 장르 저장
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  // 장르 버튼 클릭 시 상태 업데이트
  const handleGenreClick = (genre: string) => {
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
              onClick={() => {
                setShowPassword(!showPassword);

                console.log('비밀번호 아이콘 클릭: ', showPassword);
              }}
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
              onClick={() => {
                setShowConfirmPassword(!showConfirmPassword);
                console.log('비밀번호 확인 아이콘 클릭: ', showConfirmPassword);
              }}
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

        <Input
          type='text'
          icon={
            <button type='button' onClick={handleCheckDuplicate}>
              중복 확인
            </button>
          }
          placeholder='닉네임'
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        <div className='pt-2'>
          <p className='pb-1'>관심 장르 설정</p>
          {genres.map((genre, i) => (
            <GenreButton
              key={i}
              genre={genre.name}
              mode={'toggle'}
              onClick={() => handleGenreClick(genre.name)}
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

      {modalVariant && (
        <CommonModal
          variant={modalVariant}
          open={!!modalVariant}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
