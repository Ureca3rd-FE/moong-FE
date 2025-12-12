import { useEffect, useState } from 'react';
import api from '../hooks/api';

interface theme {
  themeId: number;
  name: string;
  imgUrl: string;
}

/* 해당 데이터를 불러오는 곳에서
 * const { themes,loading, error } = useGetThemes();
 * 이렇게 불러와서 사용하면 됩니다!
 */

const getTheme = async () => {
  return api.get(`/themes`);
};

export const useGetThemes = () => {
  const [themes, setThemes] = useState<theme[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTheme = async () => {
      setLoading(true);

      try {
        const response = await getTheme();
        setThemes(response.data.data);
        setError(null);
      } catch (err: any) {
        setError(err.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTheme();
  }, []);

  return { themes, loading, error };
};

export default useGetThemes;
