import { create, StateCreator } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'

export type UserProps = {
    fullname: string,
    role: string,
    accessToken: string,
    _id: string,
    email: string
    address: string,
    dateOfBirth: string,
    courses?: []
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
            email: '',
            role: '',
            address: '',
            dateOfBirth: '',
            accessToken: '',
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