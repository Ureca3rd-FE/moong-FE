import { useEffect, useState } from 'react';
import api from '../hooks/api';
interface UserInfo {
  nickname: string;
  ingredient: {
    snow: number;
    rock: number;
    carrot: number;
    branch: number;
    muffler: number;
  };
}

export const useUserInfo = (id?: string) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchUserInfo = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await api.get<UserInfo>(`/user/${id}`);
        setUserInfo(response.data);
      } catch (err: any) {
        setError(
          err.response?.data?.message || '사용자 정보를 불러올 수 없습니다.',
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [id]);

  return { userInfo, loading, error };
};

export default useUserInfo;
