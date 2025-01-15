import { authAPI } from "./api";

interface LoginResponse {
  error: boolean;
  user?: {
    id: number;
    name: string;
    token: string;
  };
  message?: string;
}

export const login = async (
  user: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await authAPI.post("/signIn", { user, password });
    return response.data;
  } catch (error: unknown) {
    return {
      error: true,
      message: error.response?.data?.message || "Something went wrong",
    };
  }
};
