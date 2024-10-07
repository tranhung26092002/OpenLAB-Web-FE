import http from "~/configs/fetch-api";

export const handleLogin = (phone_number: string, password: string) => {
    return http.post('users/login', { phone_number, password })
}
export const handleLogout = () => {
    return http.get('auth/logout')
}