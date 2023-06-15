import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getUserEmail = async () => {
  const token = localStorage.getItem("accessToken");
  const {
    data: { email },
  } = await axios.get(`/api/users/getemail`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return email;
};

const useGetUserEmail = () => {
  return useQuery({
    queryKey: ["getUserEmail"],
    queryFn: getUserEmail,
  });
};

export { useGetUserEmail };
