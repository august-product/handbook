export type AuthUser = {
  id?: string | number;
  handbook_user_id?: string | number;
  name?: string;
  email?: string;
  [key: string]: unknown;
};

const TOKEN_KEY = "ah_token";
const USER_KEY = "ah_user";

type AuthPayload = {
  token?: string;
  access_token?: string;
  authToken?: string;
  user?: AuthUser;
  [key: string]: unknown;
};

const getTokenFromPayload = (payload: AuthPayload): string | undefined => {
  if (typeof payload.token === "string") return payload.token;
  if (typeof payload.access_token === "string") return payload.access_token;
  if (typeof payload.authToken === "string") return payload.authToken;
  return undefined;
};

export const setAuth = (payload: AuthPayload) => {
  if (typeof window === "undefined") return;
  const token = getTokenFromPayload(payload);
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  }
  if (payload.user) {
    localStorage.setItem(USER_KEY, JSON.stringify(payload.user));
    return;
  }
  const fallbackUser: AuthUser = {};
  if ("id" in payload) fallbackUser.id = payload.id as AuthUser["id"];
  if ("handbook_user_id" in payload) {
    fallbackUser.handbook_user_id = payload.handbook_user_id as AuthUser["handbook_user_id"];
  }
  if ("name" in payload) fallbackUser.name = payload.name as string | undefined;
  if ("email" in payload) fallbackUser.email = payload.email as string | undefined;
  if (Object.keys(fallbackUser).length > 0) {
    localStorage.setItem(USER_KEY, JSON.stringify(fallbackUser));
  }
};

export const getToken = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
};

export const getUser = (): AuthUser | null => {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
};

export const setUser = (user: AuthUser) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const clearAuth = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

export const isLoggedIn = () => Boolean(getToken());

export const getUserId = (user: AuthUser | null) => {
  if (!user) return null;
  return user.handbook_user_id ?? user.id ?? null;
};
