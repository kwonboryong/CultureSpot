import { Button } from 'src/components/common/Button';

export default function Home() {
  return (
    <div className='flex flex-col gap-3'>
      <Button variant='secondary' children='Google로 로그인' size={'lg'} />
      <Button variant='kakao' children='카카오로 로그인' size={'lg'} />
    </div>
  );
}
