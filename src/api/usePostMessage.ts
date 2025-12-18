import { useState } from "react";
import api from '../hooks/api';

interface MessageCreateRequest {
    themeId: number;
    message: string;
    receivedNickname: string;
    senderNickname: string;
}

export const usePostMessage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const sendMessage = async (data: MessageCreateRequest) => {
    setLoading(true);
    setError(null);

    try{
        const response = await api.post('/api/messages', data);

        return response.data;
        } catch (err: any) {
        const errorMessage = err.response?.data?.message || '메세지 전송 중 오류가 발생했습니다.';

    setError(errorMessage);
        throw new Error(errorMessage);
        } finally{
    setLoading(false);
        }
    }; 

    return {sendMessage, loading, error};
}