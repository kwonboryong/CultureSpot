import { PUBLIC_API_ENDPOINTS } from '@/api/publicEndpoints';

// 요청 URL이 Access Token 없이 접근 가능한 API인지 확인(비로그인 O)
export const isPublicEndpoint = (url: string | undefined): boolean => {
  if (!url) return false;

  return PUBLIC_API_ENDPOINTS.some((publicUrl) => url.startsWith(publicUrl));
};
