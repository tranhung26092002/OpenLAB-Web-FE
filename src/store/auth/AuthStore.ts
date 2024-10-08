import { create, StateCreator } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'

export type UserProps = {
    fullname: string,
    role: string,
    token: string,
    id: string,
    address: string,
    date_of_birth: string,
}

type AuthStoreSliceProps = {
    isAuth: boolean,
    user: UserProps,

    setIsAuth: (isAuth: boolean) => void,
    setUser: (user: UserProps) => void,
}

const createAuthSlice: StateCreator<AuthStoreSliceProps> = (set) => (
    {
        isAuth: true,
        user: {
            id: '',
            fullname: '',
            role: '',
            address: '',
            date_of_birth: '',
            token: '',
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