import axios from "axios";

const modifyMyCard = async ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const token = localStorage.getItem("accessToken");

  const res = await axios.post(
    "/api/life/Card/modify-content",
    {
      title: title,
      content: content,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return res;
};

export { modifyMyCard };
