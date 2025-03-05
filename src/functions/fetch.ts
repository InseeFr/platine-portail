import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig } from "axios";
import { getOidc } from "oidc";

// Function to create a custom Axios instance
const createCustomAxiosInstance = (baseUrl: string): AxiosInstance => {
  const instance = axios.create({ baseURL: baseUrl });

  instance.interceptors.request.use(async config => {
    const oidc = await getOidc();
    if (oidc.isUserLoggedIn) {
      const { accessToken } = oidc.getTokens();
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  });

  instance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response) {
        throw new Error(`HTTP error! Status: ${error.response.status}`);
      }
      throw error;
    },
  );

  return instance;
};

// Create two Axios instances with different base URLs
const axiosPortail = createCustomAxiosInstance(import.meta.env.VITE_PORTAIL_URL);
const axiosAiguillage = createCustomAxiosInstance(import.meta.env.VITE_API_URL);

// ✅ Mutators for Orval
export const customPortailFetch = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  return axiosPortail({ ...config, ...options }).then(res => res.data);
};

export const customAiguillageFetch = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  return axiosAiguillage({ ...config, ...options }).then(res => res.data);
};

export type ErrorType<Error> = AxiosError<Error>;
