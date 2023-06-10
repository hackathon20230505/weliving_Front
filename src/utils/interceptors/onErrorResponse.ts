import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { logOnDev } from "../logOnDev";
import { getRefreshToken } from "./getRefreshToken";

const onErrorResponse = async (err: AxiosError): Promise<AxiosError> => {
  if (axios.isAxiosError(err)) {
    const { message } = err;

    const { status } = err.response ?? {};

    const config = err.config as AxiosRequestConfig & {
      isSent?: boolean;
      headers: any;
    };

    const { method, url } = config;

    if (
      !config ||
      config.url === `api/users/refresh` ||
      status !== 401 ||
      config.isSent
    ) {
      return Promise.reject(err);
    }

    config.isSent = true;

    if (status === 401) {
      const accessToken = await getRefreshToken();

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }

    logOnDev(
      `🚨 [API] [ERROR] ${method?.toUpperCase()} ${url} | Error ${status} ${message}`,
    );

    return axios(config);
  }

  return Promise.reject(err);
};

export { onErrorResponse };
