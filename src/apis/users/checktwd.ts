import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const checktwd = async (currentpwd: string) => {
  const token = localStorage.getItem("accessToken");
  const { data } = await axios.post(
    "/api/users/checktwd",
    {
      currentpwd: currentpwd,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
};

const useCheckTwd = (currentpwd: string) => {
  return useQuery({
    queryKey: ["checktwd", currentpwd],
    queryFn: () => checktwd(currentpwd),
    staleTime: 10,
  });
};

export { useCheckTwd };
