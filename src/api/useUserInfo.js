import { useEffect, useState } from 'react';
import api from '../hooks/api';
export const useUserInfo = (id) => {
    const [userInfo, setUserInfo] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!id) {
            setLoading(false);
            return;
        }
        const fetchUserInfo = async () => {
            setLoading(true);
            setError(null);
            try {
                // api.ts에서 baseURL이 '/api'이므로 실제 경로는 '/api/user/9'가 됩니다.
                const response = await api.get(`/user/${id}`);
                console.log('✅ [Step 5] API 응답 성공:', response.data);
                setUserInfo(response.data);
            }
            catch (err) {
                console.error('❌ [Step 6] API 호출 실패:', err);
                setError(err.response?.data?.message || '사용자 정보를 불러올 수 없습니다.');
            }
            finally {
                setLoading(false);
                console.log('🏁 [Step 7] 로딩 종료.');
            }
        };
        fetchUserInfo();
    }, [id]);
    return { userInfo, loading, error };
};
export default useUserInfo;
