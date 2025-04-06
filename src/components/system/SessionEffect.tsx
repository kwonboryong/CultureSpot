'use client';

import { useEffect } from 'react';
import { useSessionStore } from '@/stores/sessionStore';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const SessionEffect = () => {
  const { sessionExpired, resetSession } = useSessionStore();
  const router = useRouter();

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (sessionExpired) {
      toast.error('세션이 만료되었습니다. 다시 로그인해 주세요.');

      timeoutId = setTimeout(() => {
        router.push('/login');

        resetSession();
      }, 1500);
    }

    return () => clearTimeout(timeoutId);
  }, [sessionExpired]);

  return null;
};

export default SessionEffect;
