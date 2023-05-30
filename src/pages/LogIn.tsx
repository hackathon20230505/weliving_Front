import { FunctionComponent } from "react";
import styled from "styled-components";
import LogInHeader from "../components/LogIn/LogInHeader";
import LogInBody from "../components/LogIn/LogInBody";
type LogInProps = {};

const LogIn: FunctionComponent<LogInProps> = () => {
  return (
    <LogInContainer>
      <LogInHeader />
      <LogInBody />
    </LogInContainer>
  );
};

export default LogIn;

const LogInContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;
