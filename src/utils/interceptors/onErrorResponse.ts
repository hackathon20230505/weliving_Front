import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { logOnDev } from "../logOnDev";

const onErrorResponse = async (err: AxiosError): Promise<AxiosError> => {
  if (axios.isAxiosError(err)) {
    const { message } = err;
    const { method, url } = err.config as AxiosRequestConfig;
    const { status } = (err.response as AxiosResponse) ?? {};

    logOnDev(
      `🚨 [API] ${method?.toUpperCase()} ${url} | Error ${status} ${message}`,
    );
  }

  return Promise.reject(err);
};

export { onErrorResponse };
