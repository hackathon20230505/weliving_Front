import axios from "axios";

const getOtherLetter = async (letter_id?: string) => {
  if (!letter_id) {
    return undefined;
  }

  const { data } = await axios.get(`/api/life/letter/othershow`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    params: {
      letter_id: letter_id,
    },
  });

  return data;
};

export { getOtherLetter };
