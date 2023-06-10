import axios, { InternalAxiosRequestConfig } from "axios";
import { logOnDev } from "../logOnDev";

const onRequest = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> => {
  if (!config.headers) {
    return config;
  }

  const { method, url } = config;

  let token: string | null = null;

  token = localStorage.getItem("accessToken");

  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log(token);

  logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Request`);

  return config;
};

export { onRequest };
