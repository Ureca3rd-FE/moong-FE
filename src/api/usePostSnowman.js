import { useState } from "react";
import api from "../hooks/api";
const postSnowmanApi = async (userId) => {
    const response = await api.post('/snowman', null, {
        params: { userId }
    });
    return response.data;
};
export const usePostSnowman = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const makesnowman = async (userId) => {
        setLoading(true);
        setError(null);
        try {
            const response = await postSnowmanApi(userId);
            console.log('눈사람생성 성공', response.message);
            return true;
        }
        catch (err) {
            const errorMessage = err?.response?.data.message || '눈사람 생성에 실패했습니다.';
            setError(errorMessage);
            return false;
        }
        finally {
            setLoading(false);
        }
    };
    return { makesnowman, loading, error };
};
export default usePostSnowman;
