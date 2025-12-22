import { useState } from 'react';
import api from '../hooks/api';

interface SignupRequest {
  nickname: string;
  password: string;
}

interface SignupResponse {
  status: string;
  message: string;
}

const signupApi = async (credentials: SignupRequest) => {
  console.log('===== 회원가입 API 호출=====');
  console.log('전송 데이터:', credentials);
  console.log(
    '닉네임:',
    credentials.nickname,
    '/ 길이:',
    credentials.nickname.length,
  );
  console.log(
    '비밀번호:',
    credentials.password,
    '/ 길이:',
    credentials.password.length,
  );
  console.log('비밀번호 타입:', typeof credentials.password);
  return api.post<SignupResponse>('/user/signup', credentials);
};

/* const { signup, loading, error } = useSignup();
 */
export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signup = async (credentials: SignupRequest): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      console.log('useSignup - 받은 credentials:', credentials);
      const response = await signupApi(credentials);
      console.log('회원가입 성공:', response.data);
      return true;
    } catch (err: any) {
      console.error('회원가입 실패:', err);
      console.error('응답 데이터:', err.response?.data);
      console.error('상태 코드:', err.response?.status);

      const errorMessage =
        err.response?.data?.message || '회원가입에 실패했습니다.';
      setError(errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error };
};

export default useSignup;
