interface Message {
    uuid: string;
    themeId: number;
    nickname: string;
}
export declare const useGetMessages: (userId: number) => {
    messages: Message[] | null;
    loading: boolean;
    error: string | null;
};
export default useGetMessages;
