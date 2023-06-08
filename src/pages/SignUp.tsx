import { FunctionComponent } from "react";
import SignUpHeader from "../components/SignUp/SignUpHeader";
import SignUpBody from "../components/SignUp/SignUpBody";
import PageContainer from "../components/Common/PageContainer";

type SignUpProps = {};

const SignUp: FunctionComponent<SignUpProps> = () => {
  return (
    <PageContainer>
      <SignUpHeader />
      <SignUpBody />
    </PageContainer>
  );
};

export default SignUp;
