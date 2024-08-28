import axios from 'axios';


const axiosPublic = axios.create({
    baseURL:'https://openlab.com.vn',
    withCredentials:true
})


export const axiosPrivate = axios.create({
    baseURL:'',
    withCredentials:true
})

export default axiosPublic;