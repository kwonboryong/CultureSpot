import { Button } from '@/components/common/button/Button';

const Login = () => {
  return (
    <div className='flex flex-col gap-3'>
      <Button variant='secondary' size='lg'>
        Google로 로그인
      </Button>
      <Button variant='kakao' size='lg'>
        카카오로 로그인
      </Button>
    </div>
  );
};

export default Login;
