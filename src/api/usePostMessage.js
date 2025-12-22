import { useState } from 'react';
import api from '../hooks/api';
export const usePostMessage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const sendMessage = async (data) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.post('/messages', data);
            return response.data;
        }
        catch (err) {
            const errorMessage = err.response?.data?.message || '메세지 전송 중 오류가 발생했습니다.';
            setError(errorMessage);
            throw new Error(errorMessage);
        }
        finally {
            setLoading(false);
        }
    };
    return { sendMessage, loading, error };
};
