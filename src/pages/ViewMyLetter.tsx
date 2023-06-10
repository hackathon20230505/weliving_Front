import { FunctionComponent } from "react";
import ViewMyLetterBody from "../components/ViewMyLetter/ViewMyLetterBody";
import PageContainer from "../components/Common/PageContainer";
import LetterHeader from "../components/ViewMyLetter/LetterHeader";
type ViewMyLetterProps = {};

const ViewMyLetter: FunctionComponent<ViewMyLetterProps> = () => {
  return (
    <PageContainer>
      <LetterHeader isSelf={true} />
      <ViewMyLetterBody />
    </PageContainer>
  );
};

export default ViewMyLetter;
