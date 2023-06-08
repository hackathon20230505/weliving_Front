import { FunctionComponent } from "react";
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
