import { FunctionComponent } from "react";
import styled from "styled-components";
import KakaoSignUpHeader from "../components/KakaoSignUp/KakaoSignUpHeader";
import KakaoSignUpBody from "../components/KakaoSignUp/KakaoSignUpBody";
type KakaoSignUpProps = {};

const KakaoSignUp: FunctionComponent<KakaoSignUpProps> = () => {
  return (
    <KakaoSignUpContainer>
      <KakaoSignUpHeader />
      <KakaoSignUpBody />
    </KakaoSignUpContainer>
  );
};

export default KakaoSignUp;

const KakaoSignUpContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;
