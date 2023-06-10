import axios from "axios";
import { IMyLetterPostTypes } from "../../../components/WriteLetter/atoms/myLetterAtoms";

const createMyLetter = async ({
  title,
  content,
  isShare,
}: IMyLetterPostTypes) => {
  const token = localStorage.getItem("accessToken");

  const {
    data: { data },
  } = await axios.post("/api/life/letter/create/", {
    data: {
      title: title,
      content: content,
      isShare: isShare,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export { createMyLetter };
