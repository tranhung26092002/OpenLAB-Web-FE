import http from "~/configs/fetch-api";

export const handleLogin = (email: string, password: string) => {
  return http.post("auth/login", { email, password });
};

export const handleSignUp = (
  email: string,
  password: string,
  confirmPassword: string
) => {
  return http.post("auth/sign-up", {                                                                                                                                                                      
    email,
    password,
    confirmPassword,
  });
};
export const handleLogout = () => {
  return http.get("auth/logout");
};
