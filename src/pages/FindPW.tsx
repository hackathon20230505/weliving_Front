import { FunctionComponent } from "react";
import styled from "styled-components";
import FindPWHeader from "../components/FindPW/FindPWHeader";
import FindPWBody from "../components/FindPW/FindPWBody";
type FindPWProps = {};

const FindPW: FunctionComponent<FindPWProps> = () => {
  return (
    <FindPWContainer>
      <FindPWHeader />
      <FindPWBody />
    </FindPWContainer>
  );
};

export default FindPW;

const FindPWContainer = styled.main`
  width: 90%;
  margin: 0 auto;
`;
