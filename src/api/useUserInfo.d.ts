interface UserInfo {
    nickname: string;
    ingredient: {
        snow: number;
        rock: number;
        carrot: number;
        branch: number;
        muffler: number;
    };
}
export declare const useUserInfo: () => {
    userInfo: UserInfo | null;
    loading: boolean;
    error: string | null;
    refetch: () => void;
};
export default useUserInfo;
