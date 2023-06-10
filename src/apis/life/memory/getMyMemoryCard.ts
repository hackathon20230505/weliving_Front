import axios from "axios";

const getMyMemoryCard = async (token: string) => {
  const {
    data: { memory },
  } = await axios.get("/api/life/memory/show/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return memory;
};

export { getMyMemoryCard };
