import axios, { InternalAxiosRequestConfig } from "axios";
import { logOnDev } from "../logOnDev";

const onRequest = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> => {
  console.log("request working");
  const { method, url } = config;

  let token: any = axios.defaults.headers.common["Authorization"];

  // token
  console.log("token: " + axios.defaults.headers.common["Authorization"]);
  console.log(token);
  logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Request`);

  return config;
};

export { onRequest };
