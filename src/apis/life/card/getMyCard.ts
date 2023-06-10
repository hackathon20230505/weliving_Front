import axios from "axios";

const getMyCard = async () => {
  const token = localStorage.getItem("accessToken");
  const {
    data: { data },
  } = await axios.get("/api/life/Card/show/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export { getMyCard };
