import axios, { AxiosResponse } from "axios";
import { logOnDev } from "../logOnDev";

const requestRefreshToken = async (): Promise<AxiosResponse> => {
  // 여기에 refresh 토큰을 사용하여 재요청하는 로직을 구현하세요.
  // 예를 들어, axios를 사용하여 API를 호출하고 새로운 토큰을 받아올 수 있습니다.
  // 아래는 가상의 예시 코드입니다.
  const response = await axios.post("/api/users/refresh");
  console.log("[requestRefreshToken] response", response);
  return response;
};

const onResponse = async (response: AxiosResponse): Promise<AxiosResponse> => {
  console.log("response working");
  const { method, url } = response.config;
  const { status } = response;

  // Set Loading End Here
  // Handle Response Data Here
  // Error Handling When Return Success with Error Code Here
  logOnDev(
    `🚀 [API] [SUCCESS] ${method?.toUpperCase()} ${url} | Response ${status}`,
  );

  if (
    !(
      response.status === 200 ||
      response.status === 201 ||
      response.status === 204
    )
  ) {
    throw new Error();
  }

  // 401 상태 코드인 경우 refresh 토큰 재요청 로직 수행
  if (status === 401) {
    try {
      // refresh 토큰 재요청
      const refreshResponse = await requestRefreshToken();
      // 재요청이 성공하면 새로운 토큰으로 원래 요청을 재시도
      const newResponse = await axios.request(response.config);
      return newResponse;
    } catch (error) {
      // 재요청이 실패하면 에러 처리
      throw new Error("Failed to refresh token");
    }
  }

  if (response.data.errors) {
    throw new Error(response.data.errors);
  }

  return response;
};

export { onResponse };
