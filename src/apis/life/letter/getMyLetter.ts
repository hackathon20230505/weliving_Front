import axios from "axios";

const getMyLetter = async (token: string) => {
  const {
    data: { data },
  } = await axios.get("/api/life/letter/show/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export { getMyLetter };
