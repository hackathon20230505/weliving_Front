import { FunctionComponent } from "react";
import AnswerGPT from "../components/AfterWrite/AnswerGPT.tsx";

type GetAnswerProps = {};

const GetAnswerGPT: FunctionComponent<GetAnswerProps> = () => {
  return (
    <>
      <AnswerGPT />
    </>
  );
};

export { GetAnswerGPT };
