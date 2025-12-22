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
export declare const useUserInfo: (id?: string) => {
    userInfo: UserInfo | null;
    loading: boolean;
    error: string | null;
};
export default useUserInfo;
