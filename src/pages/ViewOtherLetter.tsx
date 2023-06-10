import { FunctionComponent } from "react";
import ViewOtherLetterHeader from "../components/ViewOtherLetter/ViewOtherLetterHeader";
import ViewOtherLetterFilter from "../components/ViewOtherLetter/ViewOtherLetterFilter";
import ViewOtherLetterBody from "../components/ViewOtherLetter/ViewOtherLetterBody";
import PageContainer from "../components/Common/PageContainer.tsx";
import styled from "styled-components";

type ViewOtherLetterProps = {};

const ViewOtherLetter: FunctionComponent<ViewOtherLetterProps> = () => {
  return (
    <PageContainer>
      <ViewOtherLetterContainer>
        <ViewOtherLetterHeader />
        <ViewOtherLetterFilter />
        <ViewOtherLetterBody />
      </ViewOtherLetterContainer>
    </PageContainer>
  );
};

const ViewOtherLetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export default ViewOtherLetter;
