import { FunctionComponent } from "react";
import styled from "styled-components";
import ChangePWHeader from "../components/ChangePW/ChangePWHeader";
import ChangePWBody from "../components/ChangePW/ChangePWBody";
type ChangePWProps = {};

const ChangePW: FunctionComponent<ChangePWProps> = () => {
  return (
    <ChangePWContainer>
      <ChangePWHeader />
      <ChangePWBody />
    </ChangePWContainer>
  );
};

export default ChangePW;

const ChangePWContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;
