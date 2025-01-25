import { create, StateCreator } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

export type UserProps = {
  fullname: string;
  role: string;
  accessToken: string;
  _id: string;
  email: string;
  address?: string;
  image?: string;
  dateOfBirth?: string;
  courses?: Array<string>;
};

type AuthStoreSliceProps = {
  isAuth: boolean;
  user: UserProps;
  isLoading: boolean;
  setIsAuth: (isAuth: boolean) => void;
  setUser: (user: UserProps) => void;
  setLoading: (isLoading: boolean) => void;
  setCourses: (courses: Array<string>) => void;
};

const createAuthSlice: StateCreator<AuthStoreSliceProps> = (set) => ({
  isAuth: false,
  isLoading: true,
  user: {
    _id: "",
    fullname: "",
    email: "",
    role: "",
    address: "",
    dateOfBirth: "",
    accessToken: "",
    courses: [],
  },
  setIsAuth: (isAuth: boolean) => set(() => ({ isAuth })),
  setCourses: (courses: Array<string>) =>
    set((state) => ({ user: { ...state.user, courses } })),
  setUser: (user: UserProps) => set(() => ({ user })),
  setLoading: (isLoading: boolean) => set(() => ({ isLoading })),
});

export const useAuthStore = create(
  devtools(
    persist<AuthStoreSliceProps>(
      (...a) => ({
        ...createAuthSlice(...a),
      }),
      {
        name: "auth",
        storage: createJSONStorage(() => localStorage),
        onRehydrateStorage: () => (state) => {
          if (state) {
            state.setLoading(false);
          }
        },
      }
    )
  )
);
