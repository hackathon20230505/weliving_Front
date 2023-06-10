import axios from "axios";
import { IMyLetterPostTypes } from "../../../components/WriteLetter/atoms/myLetterAtoms";

const createTempLetter = async ({
  title,
  content,
  isShare,
}: IMyLetterPostTypes) => {
  const token = localStorage.getItem("accessToken");

  const {
    data: { data },
  } = await axios.post("/api/life/templetter/create/", {
    params: {
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

export { createTempLetter };
