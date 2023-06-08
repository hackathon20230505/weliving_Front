import { AxiosInstance } from "axios";
import { onRequest } from "./onRequest";
import { onErrorResponse } from "./onErrorResponse";
import { onResponse } from "./onResponse";

const setupInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.request.use(onRequest, onErrorResponse);
  instance.interceptors.response.use(onResponse, onErrorResponse);

  return instance;
};

export { setupInterceptors };
