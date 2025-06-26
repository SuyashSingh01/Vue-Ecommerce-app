import axios from "axios";
import NProgress from "nprogress";

export const axiosInstance = axios.create({
  withCredentials: false,
});

// Interceptors for handling progress bar
axiosInstance.interceptors.request.use(
  (config) => {
    NProgress.start();
    return config;
  },
  (error) => {
    NProgress.done();
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response;
  },
  (error) => {
    NProgress.done();
    return Promise.reject(error);
  }
);
export const request = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData || null,
    headers: headers || null,
    params: params || null,
  });
};
