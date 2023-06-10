import axios from "axios";

const modifyIsShare = async ({ isShare }: { isShare: number }) => {
  const token = localStorage.getItem("accessToken");

  const res = await axios.post(
    "/api/life/Card/modify-isShare",
    {
      isShare: isShare,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return res;
};

export { modifyIsShare };
