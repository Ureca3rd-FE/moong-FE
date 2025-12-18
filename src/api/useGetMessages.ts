import { useEffect, useState } from 'react';
import api from '../hooks/api';

interface Message {
  uuid: string;
  themeId: number;
  nickname: string;
}

const getMessages = async (userId: number) => {
  return api.get(`/messages`, {
    params: { userId },
  });
};

export const useGetMessages = (userId: number) => {
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!userId) return;

    const fetchMessages = async () => {
      setLoading(true);
      try {
        const response = await getMessages(userId);
        setMessages(response.data);
        setError(null);
      } catch (err: any) {
        setError(
          err.response?.data?.message || '메시지를 불러오는데 실패했습니다.',
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [userId]);

  return { messages, loading, error };
};

export default useGetMessages;
