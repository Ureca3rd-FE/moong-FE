import { useEffect, useState } from "react";
import api from "../hooks/api";

interface UserInfo {
    nickname : string,
    ingredient : {
        snow : number,
        rock : number,
        carrot : number,
        branch : number,
        muffler : number
    };
}

const getUserInfo = async() => {
    return api.get<UserInfo>('/api/member/homeinfo');
};

export const useUserInfo =() => {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchUserInfo = async() => {
        setLoading(true);
        setError(null);

        try{
            const response = await getUserInfo();
            setUserInfo(response.data);
            setError(null);
        } catch (err : any){
            const errorMessage = 
                err.response?.data?.message || '사용자 정보 불러오기 실패';
            setError(errorMessage);
        }finally{
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchUserInfo();
    },[]);
    const refetch = () => {
        fetchUserInfo();
    };

    return {userInfo, loading, error, refetch};
}
export default useUserInfo;