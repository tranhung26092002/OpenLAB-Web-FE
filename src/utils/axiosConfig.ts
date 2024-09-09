import axios from 'axios';
const axiosPublic = axios.create({
    baseURL: 'https://openlab.com.vn',
})

export const axiosPrivate = axios.create({
    baseURL: 'https://openlab.com.vn',
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
})

axiosPublic.interceptors.response.use(
    (response) => response.data,
    (error) => { return Promise.reject(error) }
)

export default axiosPublic;