import { FunctionComponent } from "react";
import WriteLetterHeader from "../components/WriteLetter/WriteLetterHeader";
import WriteLetterBody from "../components/WriteLetter/WriteLetterBody";
import PageContainer from "../components/Common/PageContainer.tsx";

type WriteLetterProps = {};

const WriteLetter: FunctionComponent<WriteLetterProps> = () => {
  return (
    <PageContainer>
      <WriteLetterHeader />
      <WriteLetterBody />
    </PageContainer>
  );
};

export default WriteLetter;
