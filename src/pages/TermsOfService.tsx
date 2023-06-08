import { FunctionComponent } from "react";
import styled from "styled-components";
import FullModal from "../components/Common/FullModal";
import TermsOfServiceModalComponent from "../components/SignUp/TermsOfServiceModalComponent";
type PrivacyPolicyProps = {};

const PrivacyPolicy: FunctionComponent<PrivacyPolicyProps> = () => {
  return (
    <PrivacyPolicyContainer>
      <FullModal
        title={"이용약관"}
        children={<TermsOfServiceModalComponent />}
      />
    </PrivacyPolicyContainer>
  );
};

export default PrivacyPolicy;

const PrivacyPolicyContainer = styled.main``;
