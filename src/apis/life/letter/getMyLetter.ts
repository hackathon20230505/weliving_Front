import axios from "axios";

const getMyLetter = (userId: string) => {
  const res = axios.get("/life/letter/show", {
    params: {
      user_id: userId,
    },
  });

  console.log(res);
};

export { getMyLetter };
