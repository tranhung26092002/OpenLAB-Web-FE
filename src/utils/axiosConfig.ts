import axios from 'axios';
const axiosPublic = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
})

export const axiosPrivate = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
})

axiosPublic.interceptors.response.use(
    (response) => response.data,
    (error) => { return Promise.reject(error) }
)

export default axiosPublic;