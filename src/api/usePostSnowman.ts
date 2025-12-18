import { useState, useEffect } from "react";
import api from "../hooks/api";
import { data } from "react-router-dom";

interface SnowmanResponse {
    message : string;
}

const postSnowmanApi = async (userId: number): Promise<SnowmanResponse> => {
    const response = await api.post<SnowmanResponse>('/snowman', null, {
        params: { userId }
    });
    return response.data;
};

export const usePostSnowman = () => {
    const [error, setError] = useState <string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);


    const makesnowman = async (userId : number) : Promise<boolean> => {
        setLoading(true);
        setError(null);
        try{
            const response = await postSnowmanApi(userId);
            console.log('눈사람생성 성공', response.message);
            return true;
        }catch (err : any) {
            const errorMessage = err?.response?.data.message || '눈사람 생성에 실패했습니다.';
            setError(errorMessage);
            return false;
        }finally{
            setLoading(false);
        }
    };
    return {makesnowman,loading, error};
}
export default usePostSnowman;
