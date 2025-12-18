import { useState } from "react";
import api from "../hooks/api";

interface LoginRequest {
    nickname: string;
    password: string;
}

interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiredAt: string;
    refreshTokenExpiredAt: string;
}

const loginApi = async (credentials: LoginRequest) => {
    return api.post<LoginResponse>('/api/member/login', credentials); 
};

/* const { login, loading, error } = useLogin();
 */
export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = async (credentials: LoginRequest): Promise<LoginResponse | null> => {
        setLoading(true);
        setError(null);

        try {
            const response = await loginApi(credentials);

            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            localStorage.setItem('accessTokenExpiredAt', response.data.accessTokenExpiredAt);
            localStorage.setItem('refreshTokenExpiredAt', response.data.refreshTokenExpiredAt);
            
            return response.data;
        } catch (err: any) {
            const errorMessage = 
                err.response?.data?.message || '로그인 실패. 닉네임과 비밀번호를 확인해주세요.'; 
            setError(errorMessage);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { login, loading, error };
};

export default useLogin;