import { useAuthStore } from "~/store/auth/AuthStore";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
const fetcher = async (
  url: string,
  accessToken: string,
  options?: RequestInit
) => {
  const res = await fetch(url, {
    ...options,
    credentials: "include",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });
  const payload: Response = await res.json();
  const data = {
    status: res.status,
    payload,
  };
  return data;
};

export const useFetchApi = async (url: string, options?: RequestInit) => {
  const { user, setUser, setIsAuth } = useAuthStore();
  const router = useRouter();
  const fetchData = async () => {
    const { accessToken } = user;
    const baseUrl = process.env.NEXT_PUBLIC_ENDPOINT;
    const fullUrl = url.startsWith("/")
      ? `${baseUrl}${url}`
      : `${baseUrl}/${url}`;
    if (accessToken) {
      const validateJwt = jwtDecode(accessToken);
      const expToken = validateJwt.exp as number;
      const timestampNow = new Date().getTime();
      console.log(
        expToken,
        timestampNow / 1000,
        expToken < timestampNow / 1000
      );

      if (expToken < timestampNow / 1000) {
        const refresh = await fetch(`${baseUrl}/auth/refresh`, {
          credentials: "include",
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }).then((res) => res.json());
        if (refresh.statusCode === 401 && refresh.message === "Unauthorized") {
          await fetch(`${baseUrl}/auth/logout`, {
            credentials: "include",
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }).then(async (res) => {
            if (res.ok && res.status === 200) {
              const resetUser = {
                _id: "",
                fullname: "",
                role: "",
                email: "",
                address: "",
                dateOfBirth: "",
                accessToken: "",
                courses: [],
              };
              setIsAuth(false);
              setUser(resetUser);
              router.replace("/auth");
            }
          });
          return;
        } else if (refresh.accessToken) {
          const newUser = {
            ...user,
            accessToken: refresh.accessToken,
          };
          setUser(newUser);
          const data = await fetcher(fullUrl, refresh.accessToken, options);
          return data;
        }
      } else {
        const data = await fetcher(fullUrl, accessToken, options);
        return data;
      }
    }
  };
  return fetchData;
};
