import axios from 'axios';
const axiosPublic = axios.create({
    baseURL: process.env.BASE_URL,
})

export const axiosPrivate = axios.create({
    baseURL: process.env.BASE_URL,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
})

axiosPublic.interceptors.response.use(
    (response) => {return response.data},
    (error) => { return Promise.reject(error) }
)

export default axiosPublic;