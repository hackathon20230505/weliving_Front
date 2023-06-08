import { FunctionComponent } from "react";
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
