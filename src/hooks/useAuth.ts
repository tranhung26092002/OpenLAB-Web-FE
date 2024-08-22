// import { RootState } from "@redux/store";
// import { useSelector } from "react-redux";
// import { userType } from "@redux/authSlice";
// import { useCallback } from "react";
// const useAuth = () => {
//     const isLogin = useSelector((state: RootState) => state.auth.isLogin);
//     const user: userType | null = useSelector((state: RootState) => state.auth.login.currentUser);
//     useCallback(() => {
//         return { isLogin, user }
//     }, [isLogin, user])
//     return {
//         isLogin, user
//     }
// }
// export default useAuth;