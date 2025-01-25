// import axiosPublic from "~/configs/axiosConfig";
// type UserService = {
//     login: {
//         email: string;
//         password: string;
//     };
//     signup: {
//         email: string;
//         password: string;

//     };
// };

// export const handleLogin = ({ email, password }: UserService["login"]) => {
//     return axiosPublic.post('/api/auth/login', { email, password })
// }

import http from "~/configs/fetch-api";
export const handleRefreshToken = async() => {
    return http.get('auth/refresh')
}
export const handleGetAllUsers = () => {
    return http.get('/users')
}