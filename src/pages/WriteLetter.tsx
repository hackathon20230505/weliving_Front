import { FunctionComponent } from "react";
import styled from "styled-components";
import WriteLetterHeader from "../components/WriteLetter/WriteLetterHeader";
import WriteLetterBody from "../components/WriteLetter/WriteLetterBody";
import CommonContentContainer from "../components/Common/CommonContentContainer";
type WriteLetterProps = {};

const WriteLetter: FunctionComponent<WriteLetterProps> = () => {
  return (
    <CommonContentContainer>
      <WriteLetterHeader />
      <WriteLetterBody />
    </CommonContentContainer>
  );
};

export default WriteLetter;

const WriteLetterContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;
