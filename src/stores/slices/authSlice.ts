// import { createSlice } from "@reduxjs/toolkit";

// export type userType = {
//     _id?: string,
//     email?: string,
//     password?: string,
//     fullname?: string,
//     address?: string,
//     dateOfBirth?: string,
//     role?: string,
//     deleted?: boolean,
//     createdAt?: string,
//     updatedAt?: string,
//     __v?: number,
//     access_token: string | null
// }


// const authSlice = createSlice({
//     name: 'auth',
//     initialState: {
//         login: {
//             currentUser: null as userType | null,
//             isFetching: false,
//             error: false
//         },
//         isLogin: false,
//         logout: {
//             isFetching: false,
//             error: false
//         }
//     },
//     reducers: {
//         loginStart: (state) => {
//             state.login.isFetching = true;
//         },
//         loginSuccess: (state, action) => {
//             state.login.isFetching = false;
//             state.login.currentUser = action.payload;
//             state.isLogin = true;
//             state.login.error = false;
//         },
//         loginFailed: (state) => {
//             state.login.isFetching = false;
//             state.login.error = true;
//         },
//         logOutStart: (state) => {
//             state.logout.isFetching = true;
//         },
//         logoutSuccess: (state) => {
//             state.logout.isFetching = false;
//             state.login.currentUser = null;
//             state.isLogin = false;
//             state.logout.error = false;
//         },
//         logoutFailed: (state) => {
//             state.logout.error = true;
//         }
//     }
// })
// export const {
//     loginStart, loginSuccess, loginFailed, logOutStart, logoutSuccess, logoutFailed
// } = authSlice.actions;

// export default authSlice.reducer;