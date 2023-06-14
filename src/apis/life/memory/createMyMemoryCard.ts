import axios from "axios";

const createMyMemoryCard = async (memory: string[]) => {
  const token = localStorage.getItem("accessToken");
  const {
    data: { letter_id },
  } = await axios.post(
    "/api/life/memory/create",
    {
      memory: memory,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return letter_id;
};

export { createMyMemoryCard };
