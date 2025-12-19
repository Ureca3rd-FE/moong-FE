interface MessageCreateRequest {
    themeId: number;
    message: string;
    receivedNickname: string;
    senderNickname: string;
}
export declare const usePostMessage: () => {
    sendMessage: (data: MessageCreateRequest) => Promise<any>;
    loading: boolean;
    error: string | null;
};
export {};
