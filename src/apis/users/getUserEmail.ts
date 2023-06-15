import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

interface EmailResponse {
  ok: boolean;
  email: string;
}

export interface APIResponse<T> {
  status: number;
  result: T;
}

const getUserEmail = async (): Promise<APIResponse<EmailResponse>> => {
  const token = localStorage.getItem("accessToken");
  const result: AxiosResponse<EmailResponse> = await axios.get(
    `/api/users/getemail`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return {
    status: result.status,
    result: result.data,
  };
};

const useGetUserEmail = (): UseQueryResult<APIResponse<EmailResponse>> => {
  return useQuery({
    queryKey: ["getUserEmail"],
    queryFn: getUserEmail,
  });
};

export { useGetUserEmail };
