import { useEffect, useState } from 'react';
import api from '../hooks/api';

interface MessageDetail {
  uuid: string;
  content: string;
  receivedUser: string;
  sendUser: string;
  themeId: number;
  open: boolean;
}

const getMessageDetail = async (messageId: string) => {
  return api.get(`/messages/${messageId}`);
};

export const useGetMessageDetail = (messageId: string | null) => {
  const [message, setMessage] = useState<MessageDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!messageId) {
      setMessage(null);
      return;
    }

    const fetchDetail = async () => {
      setLoading(true);
      try {
        const response = await getMessageDetail(messageId);
        setMessage(response.data);
        setError(null);
      } catch (err: any) {
        setError(
          err.response?.data?.message ||
            '메시지 상세 내용을 불러오지 못했습니다.',
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [messageId]);

  return { message, loading, error };
};

export default useGetMessageDetail;
