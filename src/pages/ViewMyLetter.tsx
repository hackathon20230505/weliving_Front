import { FunctionComponent } from "react";
import ViewMyLetterHeader from "../components/ViewMyLetter/ViewMyLetterHeader";
import ViewMyLetterBody from "../components/ViewMyLetter/ViewMyLetterBody";
import PageContainer from "../components/Common/PageContainer";
type ViewMyLetterProps = {};

const ViewMyLetter: FunctionComponent<ViewMyLetterProps> = () => {
  return (
    <PageContainer>
      <ViewMyLetterHeader />
      <ViewMyLetterBody />
    </PageContainer>
  );
};

export default ViewMyLetter;
