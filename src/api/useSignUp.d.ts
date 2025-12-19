interface SignupRequest {
    nickname: string;
    password: string;
}
export declare const useSignup: () => {
    signup: (credentials: SignupRequest) => Promise<boolean>;
    loading: boolean;
    error: string | null;
};
export default useSignup;
