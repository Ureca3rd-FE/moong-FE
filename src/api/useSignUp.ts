import { useState } from "react";
import api from "../hooks/api";

interface SignupRequest {
    nickname: string;
    password: string;
}

interface SignupResponse {
    status: string;
    message: string;
}

const signupApi = async (credentials: SignupRequest) => {
    return api.post<SignupResponse>('/api/member/signup', credentials);
};

/* const { signup, loading, error } = useSignup();
 */
export const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const signup = async (credentials: SignupRequest): Promise<SignupResponse | null> => {
        setLoading(true);
        setError(null);

        try {
            const response = await signupApi(credentials);
            return response.data;
        } catch (err: any) {
            const errorMessage = 
                err.response?.data?.message || '회원가입에 실패했습니다.';
            setError(errorMessage);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { signup, loading, error };
};

export default useSignup;