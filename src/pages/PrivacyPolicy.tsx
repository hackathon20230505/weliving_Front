import { FunctionComponent } from "react";
import styled from "styled-components";
import FullModal from "../components/Common/FullModal";
import PrivacyPolicyModalComponent from "../components/SignUp/PrivacyPolicyModalComponent";
type PrivacyPolicyProps = {};

const PrivacyPolicy: FunctionComponent<PrivacyPolicyProps> = () => {
  return (
    <PrivacyPolicyContainer>
      <FullModal
        title={"개인정보 처리방침"}
        children={<PrivacyPolicyModalComponent bottomMargin={0} />}
      />
    </PrivacyPolicyContainer>
  );
};

export default PrivacyPolicy;

const PrivacyPolicyContainer = styled.main``;
