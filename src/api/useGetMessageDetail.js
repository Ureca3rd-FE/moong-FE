import { useEffect, useState } from 'react';
import api from '../hooks/api';
const getMessageDetail = async (messageId) => {
    return api.get(`/messages/${messageId}`);
};
export const useGetMessageDetail = (messageId) => {
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
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
            }
            catch (err) {
                setError(err.response?.data?.message ||
                    '메시지 상세 내용을 불러오지 못했습니다.');
            }
            finally {
                setLoading(false);
            }
        };
        fetchDetail();
    }, [messageId]);
    return { message, loading, error };
};
export default useGetMessageDetail;
