import axios from "axios";

const generateResponse = async (userLetter: string) => {
  const token = localStorage.getItem("accessToken");
  const {
    data: { data },
  } = await axios.post(
    "/api/life/letter/generate-response/",
    {
      data: {
        userLetter: userLetter,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
};

export { generateResponse };
