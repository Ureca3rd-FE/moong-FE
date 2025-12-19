import { useEffect, useState } from "react";
import api from "../hooks/api";
const getUserInfo = async () => {
    return api.get('/member/homeinfo');
};
export const useUserInfo = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const fetchUserInfo = async () => {
        console.log('fetchUseerInfo시작');
        setLoading(true);
        setError(null);
        try {
            const response = await getUserInfo();
            console.log('API응답 : ', response.data);
            setUserInfo(response.data);
            setError(null);
        }
        catch (err) {
            console.log('api에러 :', err);
            console.log('응답에러 : ', err.response);
            const errorMessage = err.response?.data?.message || '사용자 정보 불러오기 실패';
            setError(errorMessage);
        }
        finally {
            setLoading(false);
            console.log('fetchUserInfo완료');
        }
    };
    useEffect(() => {
        fetchUserInfo();
    }, []);
    const refetch = () => {
        fetchUserInfo();
    };
    return { userInfo, loading, error, refetch };
};
export default useUserInfo;
