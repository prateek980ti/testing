// src/api/auth.ts
import useApi from "../hooks/useApi";

export const loginUser = (email: string, password: string) => {
  return useApi.post<{ access_token: string }>("/auth/login", {
    email,
    password,
  });
};

export const forgotPassword = (email: string) => {
  return useApi.post<{ message: string }>("/auth/forgot-password", {
    email,
  });
};

export const resetUserPassword = (email: string, otp: string, newPassword: string) => {
  return useApi.post<{ message: string; success: boolean }>("/auth/reset-password", {
    email,
    otp,
    newPassword,
  });
};
