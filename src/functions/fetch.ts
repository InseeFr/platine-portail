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
const axiosPilotage = createCustomAxiosInstance(import.meta.env.VITE_API_PILOTAGE_URL);
const axiosAiguillage = createCustomAxiosInstance(import.meta.env.VITE_API_AIGUILLAGE_URL);

// ✅ Mutators for Orval
export const customPilotageFetch = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  return axiosPilotage({ ...config, ...options }).then(res => res.data);
};

export const customAiguillageFetch = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  return axiosAiguillage({ ...config, ...options }).then(res => res.data);
};

export const fetchDepositProof = async (documentUrl: string) => {
  const url = new URL(documentUrl);
  const baseUrl = `${url.origin}`;
  const endpoint = url.pathname;

  try {
    const apiClient = createCustomAxiosInstance(baseUrl);
    const response = await apiClient.get(endpoint, { responseType: "blob" });

    const fileType = response.headers["content-type"];
    const fileData: Blob = response.data;
    const file = new File([fileData], `document.${fileType}`, { type: fileType });

    return file;
  } catch (error) {
    console.error("Error while retrieving document:", error);
    throw error;
  }
};

export type ErrorType<Error> = AxiosError<Error>;
