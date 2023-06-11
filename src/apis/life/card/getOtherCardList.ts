import axios from "axios";

const getOtherCardList = async (token: string, birth: number) => {
  const {
    data: { data },
  } = await axios.get(`/api/life/Card/list/${birth}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export { getOtherCardList };
