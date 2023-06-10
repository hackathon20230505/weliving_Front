import axios from "axios";

const getOtherLetterList = async (token: string, birth: number) => {
  const {
    data: { data },
  } = await axios.get(`/api/life/letter/list/${birth}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export { getOtherLetterList };
