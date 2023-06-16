import { FunctionComponent } from "react";
import styled from "styled-components";
import AnswerGPT from "../components/AfterWrite/AnswerGPT.tsx";

type GetAnswerProps = {};

const GetAnswerGPT: FunctionComponent<GetAnswerProps> = () => {
  return (
    <>
      <NotValidText>
        <ImageCloud1
          src="https://welldie.com/img/getanswergpt/getanswergpt-background.svg"
          style={{
            width: "100%",
            height: "100%",
            top: "0px",
          }}
        />
        <AnswerGPT />
      </NotValidText>
    </>
  );
};

export { GetAnswerGPT };

const NotValidText = styled.div`
  padding-top: 80px;
`;

const ImageCloud1 = styled.img`
  position: absolute;
`;
