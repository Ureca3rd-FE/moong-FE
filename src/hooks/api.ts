/* eslint-disable no-underscore-dangle */
import axios, { AxiosHeaders, type InternalAxiosRequestConfig } from 'axios';

// API URL
const BASE_URL = '/api';

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Request 인터셉터: 모든 요청에 Authorization 헤더를 추가
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem('accessToken');

    // 기존 headers를 기반으로 AxiosHeaders 객체 생성
    const newHeaders = new AxiosHeaders(config.headers || {});

    if (accessToken) {
      newHeaders.set('Authorization', `Bearer ${accessToken}`);
    }

    // config 객체를 직접 변경하지 않고, 새 객체를 만들어 반환
    const modifiedConfig = { ...config, headers: newHeaders };

    return modifiedConfig;
  },
  (error) => Promise.reject(error),
);

// Response 인터셉터: 401 Unauthorized 에러 처리
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      console.error(
        '인증 실패: 401 Unauthorized. Access Token이 만료되었거나 유효하지 않습니다.',
      );

      localStorage.removeItem('accessToken');
      window.location.href = '/login';

      // 요청 실패 처리
      return Promise.reject(error);
    }

    return Promise.reject(error);
  },
);

export default api;
