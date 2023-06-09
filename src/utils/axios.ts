import Axios, { AxiosError, AxiosResponse } from 'axios';
import Cookies from 'js-cookie'
import history from './history';
import { ROUTES } from '~/routes';


const axiosInstance = Axios.create({
  timeout: 3 * 60 * 1000,
  baseURL: 'localhost:3000', // TODO: change to real url
});

axiosInstance.interceptors.request.use(
  (config: any) => {
  const token = Cookies.get('token');
  if (config) {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      }
    };
  }
  return config;
},
  (error) => Promise.reject(error)
);

// let id: NodeJS.Timeout;

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const data: any = error.response?.data;
    if (data?.errorCode === '403' && data?.message !== 'Required admin permission') {
      // handleLogout(ROUTES.Login)
    }
  }
);

export const sendGet = (url: string, params?: object) => axiosInstance.get(url, { params }).then((res) => res.data);
export const sendPost = (url: string, params?: object, queryParams?: object) => axiosInstance.post(url, params, { params: queryParams }).then((res) => res.data);
export const sendPut = (url: string, params?: object) => axiosInstance.put(url, params).then((res) => res.data);
export const sendPatch = (url: string, params?: object) => axiosInstance.patch(url, params).then((res) => res.data);
export const sendDelete = (url: string, params?: object) => axiosInstance.delete(url, { data: params } ).then((res) => res.data);
