import { FunctionComponent } from "react";
import styled from "styled-components";
import LogInHeader from "../components/LogIn/LogInHeader";
import LogInBody from "../components/LogIn/LogInBody";
import PageContainer from "../components/Common/PageContainer";
type LogInProps = {};

const LogIn: FunctionComponent<LogInProps> = () => {
  return (
    <PageContainer>
      <LogInHeader />
      <LogInBody />
    </PageContainer>
  );
};

export default LogIn;

const LogInContainer = styled.main`
  width: 100%;
  padding: 0 5%;
`;
