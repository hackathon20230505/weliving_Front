import { FunctionComponent } from "react";
import styled from "styled-components";
import SignUpHeader from "../components/SignUp/SignUpHeader";
import SignUpBody from "../components/SignUp/SignUpBody";

type SignUpProps = {};

const SignUp: FunctionComponent<SignUpProps> = () => {
  return (
    <SignUpContainer>
      <SignUpHeader />
      <SignUpBody />
    </SignUpContainer>
  );
};

export default SignUp;

const SignUpContainer = styled.main`
  width: 90%;
  margin: 0 auto;
`;
