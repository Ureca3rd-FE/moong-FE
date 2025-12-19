import { useState } from "react";
import api from "../hooks/api";
const loginApi = async (credentials) => {
    return api.post('/member/login', credentials);
};
/* const { login, loading, error } = useLogin();
 */
export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const login = async (credentials) => {
        setLoading(true);
        setError(null);
        try {
            const response = await loginApi(credentials);
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            localStorage.setItem('accessTokenExpiredAt', response.data.accessTokenExpiredAt);
            localStorage.setItem('refreshTokenExpiredAt', response.data.refreshTokenExpiredAt);
            localStorage.setItem('userId', String(response.data.userId));
            return response.data;
        }
        catch (err) {
            const errorMessage = err.response?.data?.message || '로그인 실패. 닉네임과 비밀번호를 확인해주세요.';
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
