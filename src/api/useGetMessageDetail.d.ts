interface MessageDetail {
    uuid: string;
    content: string;
    receivedUser: string;
    sendUser: string;
    themeId: number;
    open: boolean;
}
export declare const useGetMessageDetail: (messageId: string | null) => {
    message: MessageDetail | null;
    loading: boolean;
    error: string | null;
};
export default useGetMessageDetail;
