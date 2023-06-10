import { FunctionComponent } from "react";
import CommonContentContainer from "../Common/CommonContentContainer";
import styled from "styled-components";
import TheMoon from "./TheMoon";
type LoadingProps = {};

const Loading: FunctionComponent<LoadingProps> = () => {
  return (
    <CommonContentContainer xPadding="5%">
      <LoadingContainer>
        <TheMoon />
        <LoadingContent>
          <p> 글을 읽고 있어요.</p>
          <p> 잠시만 기다려주세요.</p>
        </LoadingContent>
      </LoadingContainer>
    </CommonContentContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 400;
    font-size: 20px;
    color: var(--white);
  }
`;

const LoadingContent = styled.div`
  margin-top: 1.5rem;
  text-align: center;
`;
