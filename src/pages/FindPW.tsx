import { FunctionComponent } from "react";
import styled from "styled-components";
import FindPWHeader from "../components/FindPW/FindPWHeader";
import FindPWBody from "../components/FindPW/FindPWBody";
import PageContainer from "../components/Common/PageContainer";
type FindPWProps = {};

const FindPW: FunctionComponent<FindPWProps> = () => {
  return (
    <PageContainer>
      <FindPWHeader />
      <FindPWBody />
    </PageContainer>
  );
};

export default FindPW;

const FindPWContainer = styled.main`
  width: 100%;
  padding: 0 5%;
`;
