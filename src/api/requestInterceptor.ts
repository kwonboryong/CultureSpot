import { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { isPublicEndpoint } from '@/lib/isPublicEndpoint';

// 요청 인터셉터 (API 요청 전 실행)
export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  const accessToken = localStorage.getItem('AccessToken');

  if (!config.url) return config;

  // PUBLIC_API_ENDPOINTS에 포함되지 않은 API만 Authorization 헤더 추가
  if (accessToken && !isPublicEndpoint(config.url)) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
};

export const requestRejectInterceptor = (error: AxiosError) => {
  return Promise.reject(error);
};
