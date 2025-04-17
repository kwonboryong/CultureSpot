import { Button } from '@/components/common/button/Button';
import GoogleLoginButton from '@/components/common/button/GoogleLoginButton';

const Login = () => {
  return (
    <div className='flex flex-col gap-3'>
      <Button variant='google' size='lg'>
        <GoogleLoginButton />
      </Button>

      <Button variant='kakao' size='lg'>
        <img src='/assets/ui/kakao_login.svg' alt='카카오 로그인 버튼' />
      </Button>
    </div>
  );
};

export default Login;
