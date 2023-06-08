import axios from "axios";

const getMyMemoryCard = async (token: string) => {
  const { data } = await axios.get("/api/life/memory/show/", {
    params: {
      user_id: 1,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export { getMyMemoryCard };
