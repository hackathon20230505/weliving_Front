import { FunctionComponent } from "react";
import styled from "styled-components";
import WriteLetterHeader from "../components/WriteLetter/WriteLetterHeader";
import WriteLetterBody from "../components/WriteLetter/WriteLetterBody";
type WriteLetterProps = {};

const WriteLetter: FunctionComponent<WriteLetterProps> = () => {
  return (
    <WriteLetterContainer>
      <WriteLetterHeader />
      <WriteLetterBody />
    </WriteLetterContainer>
  );
};

export default WriteLetter;

const WriteLetterContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;
