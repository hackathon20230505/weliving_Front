import { FunctionComponent } from "react";
import CommonContentContainer from "../Common/CommonContentContainer";
import styled from "styled-components";
type LoadingProps = {};

const Loading: FunctionComponent<LoadingProps> = () => {
  return (
    <CommonContentContainer>
      <LoadingContainer>
        <p> 글을 읽고 있어요.</p>
        <p> 잠시만 기다려주세요.</p>
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
