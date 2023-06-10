import { FunctionComponent, useEffect } from "react";
import LogInHeader from "../components/LogIn/LogInHeader";
import LogInBody from "../components/LogIn/LogInBody";
import PageContainer from "../components/Common/PageContainer";
import { useNavigate } from "react-router-dom";
type LogInProps = {};

const LogIn: FunctionComponent<LogInProps> = () => {
  const nativate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      nativate("/");
    }
  }, []);
  return (
    <PageContainer>
      <LogInHeader />
      <LogInBody />
    </PageContainer>
  );
};

export default LogIn;
