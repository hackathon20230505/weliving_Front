import axios from "axios";

interface IOtherLetter {
  title: string;
  content: string;
  created_at: string;
}

interface IOtherLetterResponse {
  ok: boolean;
  data: IOtherLetter[];
}

const getOtherLetter = async (letter_id?: string) => {
  if (!letter_id) {
    return undefined;
  }

  const {
    data: { data },
  } = await axios.get<IOtherLetterResponse>(
    `/api/life/letter/othershow/${letter_id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    },
  );

  return data;
};

export { getOtherLetter, type IOtherLetter };
