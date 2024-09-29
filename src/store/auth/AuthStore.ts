import { create, StateCreator } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'

export type UserProps = {
    fullname: string,
    role: string,
    access_token: string,
    _id: string,
    email: string,
    address: string,
    dateOfBirth: string,
}

type AuthStoreSliceProps = {
    isAuth: boolean,
    user: UserProps,

    setIsAuth: (isAuth: boolean) => void,
    setUser: (user: UserProps) => void,
}

const createAuthSlice: StateCreator<AuthStoreSliceProps> = (set) => (
    {
        isAuth: false,
        user: {
            _id: '',
            fullname: '',
            role: '',
            email: '',
            address: '',
            dateOfBirth: '',
            access_token: '',
        },
        setIsAuth: (isAuth: boolean) => set(() => ({ isAuth })),
        setUser: (user: UserProps) => set(() => ({ user }))
    }
)

export const useAuthStore = create(
    devtools(
        persist<AuthStoreSliceProps>(
            (...a) => ({
                ...createAuthSlice(...a)
            }),
            {
                name: 'auth', storage: createJSONStorage(() => localStorage),
            }
        ),)
)