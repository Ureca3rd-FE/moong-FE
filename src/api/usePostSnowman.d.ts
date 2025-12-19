export declare const usePostSnowman: () => {
    makesnowman: (userId: number) => Promise<boolean>;
    loading: boolean;
    error: string | null;
};
export default usePostSnowman;
