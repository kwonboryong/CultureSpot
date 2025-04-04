const SOCIAL_LOGIN_TYPES = ['kakao', 'google'];

// Access Token 없이 접근 가능한 API 엔드포인트(로그인 X)
export const PUBLIC_API_ENDPOINTS = [
  '/api/events',
  '/api/events/picks',
  '/api/events/',
  '/api/posts',
  '/api/posts/',
  ...SOCIAL_LOGIN_TYPES.flatMap((type) => [`/oauth2/authorization/${type}	`]),
];
