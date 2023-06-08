import { FunctionComponent } from "react";
import KakaoSignUpHeader from "../components/KakaoSignUp/KakaoSignUpHeader";
import KakaoSignUpBody from "../components/KakaoSignUp/KakaoSignUpBody";
import PageContainer from "../components/Common/PageContainer";
type KakaoSignUpProps = {};

const KakaoSignUp: FunctionComponent<KakaoSignUpProps> = () => {
  return (
    <PageContainer>
      <KakaoSignUpHeader />
      <KakaoSignUpBody />
    </PageContainer>
  );
};

export default KakaoSignUp;
