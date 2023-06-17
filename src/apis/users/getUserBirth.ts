import axios from "axios";

const getMyBirth = async () => {
  const token = localStorage.getItem("accessToken");
  const {
    data: { ok },
  } = await axios.get("/api/users/getbirth", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return ok;
};

export { getMyBirth };
