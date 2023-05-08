import { ROUTES } from "~/routes";
import { getCookie, removeCookie, setCookie } from "./cookie";
import history from "./history";

export const getFileName = (path: string) => {
  const index = path.lastIndexOf("/");
  return path.substring(index + 1);
};

interface IHandleLogin {
  accessToken?: string;
  expiresOn?: Date | null;
  callbackUrl?: string;
  userId?: string;
  userRole?: any;
}

export const handleLogin = ({
  accessToken,
  expiresOn,
  callbackUrl,
  userId,
  userRole,
}: IHandleLogin) => {
  if (typeof window === "undefined" || !accessToken) return;
  const expires = expiresOn ? +new Date(expiresOn) : 9999;
  setCookie("token", accessToken, {
    expires,
  });
  if (userId) {
    setCookie("userId", userId, { expires });
  }

};

export const handleLogout = (callbackUrl = ROUTES.Home) => {
  removeCookie("token");
  removeCookie("userId");
  removeCookie("refreshToken");
  localStorage.clear();
  if (callbackUrl) {
    history.push(callbackUrl);
  }
};

export const formatter = (price: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price);
}
