import axios from "axios";

const generateResponse = async (userLetter: string) => {
  const token = localStorage.getItem("accessToken");
  const {
    data: { response },
  } = await axios.post(
    "/api/life/letter/generate-response/",
    {
      userLetter: userLetter,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response;
};

export { generateResponse };
