/* eslint-disable no-underscore-dangle */
import axios, { AxiosHeaders } from 'axios';
const BASE_URL = '/api';
const api = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});
// Request 인터셉터
api.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('accessToken');
    const newHeaders = new AxiosHeaders(config.headers || {});
    // 토큰이 있을 때만 헤더에 추가 (없어도 요청은 보냄)
    if (accessToken) {
        newHeaders.set('Authorization', `Bearer ${accessToken}`);
    }
    return { ...config, headers: newHeaders };
}, (error) => Promise.reject(error));
// Response 인터셉터
api.interceptors.response.use((response) => response, async (error) => {
    const { config, response } = error;
    // 401 Unauthorized 에러 발생 시
    if (response?.status === 401) {
        // ✅ [중요] 토큰 없이도 접근 가능한 '화이트리스트' 경로 설정
        // URL에 /user/ 가 포함된 경우(타인 홈 조회 등)는 로그인을 강제하지 않음
        const publicPaths = ['/user/'];
        const isPublicPath = publicPaths.some((path) => config.url.includes(path));
        if (isPublicPath) {
            console.warn('인증이 필요한 페이지가 아니므로 리다이렉트하지 않습니다.');
            return Promise.reject(error);
        }
        // 그 외의 일반적인 인증 필요 페이지에서 401 발생 시에만 로그인 이동
        console.error('인증 실패: 로그인 페이지로 이동합니다.');
        localStorage.removeItem('accessToken');
        // 현재 페이지가 로그인 페이지가 아닐 때만 리다이렉트 (무한 루프 방지)
        if (window.location.pathname !== '/login') {
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
    return Promise.reject(error);
});
export default api;
