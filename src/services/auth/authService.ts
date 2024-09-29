import http from "~/configs/fetch-api";

export const handleLogin = (email: string, password: string) => {
    return http.post('auth/login', { email, password })
}
export const handleLogout = () => {
    return http.get('auth/logout')
}