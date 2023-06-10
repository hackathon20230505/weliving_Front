import axios from "axios";
import { IMyLetterPostTypes } from "../../../components/WriteLetter/atoms/myLetterAtoms";

const modifyMyLetter = async ({
  title,
  content,
  isShare,
}: IMyLetterPostTypes) => {
  const token = localStorage.getItem("accessToken");

  const res = await axios.post(
    "/api/life/letter/create/",
    {
      title: title,
      content: content,
      isShare: isShare,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return res;
};

export { modifyMyLetter };
