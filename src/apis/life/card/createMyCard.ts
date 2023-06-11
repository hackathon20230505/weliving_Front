import axios from "axios";
import { IMyCardPostTypes } from "../../../components/WriteCard/atoms/myCardAtoms";

const createMyCard = async ({ title, content, isShare }: IMyCardPostTypes) => {
  const token = localStorage.getItem("accessToken");

  const res = await axios.post(
    "/api/life/Card/create/",
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

export { createMyCard };
