import axios from "axios";

const generateResponse = async (userCard: string) => {
  const token = localStorage.getItem("accessToken");
  const {
    data: { response },
  } = await axios.post(
    "/api/life/Card/generate-response/",
    {
      userCard: userCard,
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
