import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { APIResponse } from "../../users/getUserEmail";
import axios from "axios";

interface IReturnValue {
  ok: boolean;
  count: number;
  memory: string[];
}

const fetch = async (id: string): Promise<APIResponse<IReturnValue>> => {
  const token = localStorage.getItem("accessToken");
  const result = await axios.get(`/api/life/memory/othershow/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    status: result.status,
    result: result.data,
  };
};

const useGetOtherMemoryCard = (
  id: string,
): UseQueryResult<APIResponse<IReturnValue>> =>
  useQuery(["getOtherMemoryCard", id], () => fetch(id));

export { useGetOtherMemoryCard };
