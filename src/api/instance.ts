import axios from 'axios';
import {
  requestInterceptor,
  requestRejectInterceptor,
} from './requestInterceptor';
import {
  responseInterceptor,
  responseRejectInterceptor,
} from './responseInterceptor';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
  withCredentials: true,
});

// 인터셉터
instance.interceptors.request.use(requestInterceptor, requestRejectInterceptor);
instance.interceptors.response.use(
  responseInterceptor,
  responseRejectInterceptor
);

export default instance;
