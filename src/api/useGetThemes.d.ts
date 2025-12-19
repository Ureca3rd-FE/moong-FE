interface theme {
    themeId: number;
    name: string;
    imgUrl: string;
}
export declare const useGetThemes: () => {
    themes: theme[] | null;
    loading: boolean;
    error: string | null;
};
export default useGetThemes;
