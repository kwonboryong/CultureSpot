import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { isPublicEndpoint } from '@/lib/isPublicEndpoint';

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

// 정상 응답 처리
export const responseInterceptor = (response: AxiosResponse) => response;

// 401 에러 (토큰 만료) 처리
export const responseRejectInterceptor = async (error: AxiosError) => {
  const originalRequest = error.config as CustomAxiosRequestConfig;

  if (
    error.response?.status === 401 &&
    originalRequest &&
    !originalRequest._retry
  ) {
    // 토큰이 필요 없는 API에서는 그냥 에러 반환
    if (isPublicEndpoint(originalRequest.url ?? '')) {
      return Promise.reject(error);
    }

    // 무한 루프 방지
    originalRequest._retry = true;

    // AccessToken 제거하고 로그인 페이지로 이동
    localStorage.removeItem('AccessToken');

    window.location.href = '/login';

    return Promise.reject(error);
  }

  return Promise.reject(error);
};
