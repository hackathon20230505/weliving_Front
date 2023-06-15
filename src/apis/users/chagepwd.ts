import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

interface ChangePwdResponse {
  ok: boolean;
}

export interface APIResponse<T> {
  status: number;
  result: T;
}

const changepwd = async (
  newpwd: string,
): Promise<APIResponse<ChangePwdResponse>> => {
  const token = localStorage.getItem("accessToken");
  const result: AxiosResponse<ChangePwdResponse> = await axios.post(
    `/api/users/changepwd/`,
    {
      newpwd: newpwd,
    },
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

const useChangePwd = (
  newpwd: string,
): UseQueryResult<APIResponse<ChangePwdResponse>> => {
  return useQuery({
    queryKey: ["changepwd", newpwd],
    queryFn: () => changepwd(newpwd),
  });
};

export { useChangePwd, changepwd };
