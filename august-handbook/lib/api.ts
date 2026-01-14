import { getToken } from "./auth";

type ApiError = {
  message: string;
  status?: number;
};

const getErrorMessage = async (res: Response) => {
  try {
    const data = (await res.json()) as { message?: string; error?: string };
    return data.message || data.error || "Something went wrong. Please try again.";
  } catch {
    return "Something went wrong. Please try again.";
  }
};

export const apiRequest = async <T>(
  url: string,
  options: RequestInit = {}
): Promise<T> => {
  const token = getToken();
  const headers = new Headers(options.headers || {});
  if (!headers.has("Content-Type") && options.body) {
    headers.set("Content-Type", "application/json");
  }
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const res = await fetch(url, { ...options, headers });
  if (!res.ok) {
    const message = await getErrorMessage(res);
    const error: ApiError = { message, status: res.status };
    throw error;
  }
  return (await res.json()) as T;
};
