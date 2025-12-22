import { useState } from 'react';
import api from '../hooks/api';
export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const login = async (credentials) => {
        setLoading(true);
        setError(null);
        try {
            // API 호출 시 제네릭 사용
            const response = await api.post('/user/login', credentials);
            const data = response.data;
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            localStorage.setItem('accessTokenExpiredAt', String(data.accessTokenExpiredAt));
            localStorage.setItem('refreshTokenExpiredAt', String(data.refreshTokenExpiredAt));
            localStorage.setItem('userId', String(data.userId));
            return data;
        }
        catch (err) {
            const errorMessage = err.response?.data?.message ||
                '로그인 실패. 닉네임과 비밀번호를 확인해주세요.';
            setError(errorMessage);
            return null;
        }
        finally {
            setLoading(false);
        }
    };
    return { login, loading, error };
};
export default useLogin;
