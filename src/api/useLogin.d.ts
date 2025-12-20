interface LoginRequest {
    nickname: string;
    password: string;
}
interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiredAt: number;
    refreshTokenExpiredAt: number;
    userId: number;
    first: boolean;
}
export declare const useLogin: () => {
    login: (credentials: LoginRequest) => Promise<LoginResponse | null>;
    loading: boolean;
    error: string | null;
};
export default useLogin;
