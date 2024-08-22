
// import { axiosPrivate } from "@configs/axios";
// import { useEffect } from "react";
// import useRefreshToken from "./useRefreshToken";
// import useAuth from "./useAuth";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "@redux/authSlice";

// const useAxiosPrivate = () => {
//     const refresh = useRefreshToken();
//     const { user, isLogin } = useAuth()
//     const dispatch = useDispatch();
//     useEffect(() => {
//         const requestIntercept = axiosPrivate.interceptors.request.use(
//             config => {
//                 if (!config.headers['Authorization']) {
//                     config.headers['Authorization'] = `Bearer ${user?.access_token}`;
//                 }
//                 return config;
//             },
//             error => Promise.reject(error)
//         )

//         const responseIntercept = axiosPrivate.interceptors.response.use(
//             response => response,
//             async (error) => {
//                 const prevRequest = error?.config;
//                 if ((error?.response?.status === 403 || error?.response?.status === 401) && !prevRequest?.sent) {
//                     if (user) {
//                         prevRequest.sent = true;
//                         const refreshUser = await refresh();
//                         console.log(refreshUser);
//                         prevRequest.headers['Authorization'] = `Bearer ${refreshUser?.access_token}`;
//                         dispatch(loginSuccess(refreshUser))
//                         return axiosPrivate(prevRequest);
//                     }
//                 }

//                 return Promise.reject(error)
//             }
//         )
//         return () => {
//             axiosPrivate.interceptors.response.eject(requestIntercept);
//             axiosPrivate.interceptors.response.eject(responseIntercept);
//         }
//     }, [user, refresh,isLogin,dispatch])

//     return axiosPrivate;
// }
// export default useAxiosPrivate;