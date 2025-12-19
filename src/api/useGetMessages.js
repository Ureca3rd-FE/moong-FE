import { useEffect, useState } from 'react';
import api from '../hooks/api';
const getMessages = async (userId) => {
    return api.get(`/messages`, {
        params: { userId },
    });
};
export const useGetMessages = (userId) => {
    const [messages, setMessages] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!userId)
            return;
        const fetchMessages = async () => {
            setLoading(true);
            try {
                const response = await getMessages(userId);
                setMessages(response.data);
                setError(null);
            }
            catch (err) {
                setError(err.response?.data?.message || '메시지를 불러오는데 실패했습니다.');
            }
            finally {
                setLoading(false);
            }
        };
        fetchMessages();
    }, [userId]);
    return { messages, loading, error };
};
export default useGetMessages;
