import { FunctionComponent } from "react";
import styled from "styled-components";
import FullModal from "../components/Common/FullModal";
import PrivacyPolicyModalComponent from "../components/SignUp/PrivacyPolicyModalComponent";
type TermsOfServiceProps = {};

const TermsOfService: FunctionComponent<TermsOfServiceProps> = () => {
  return (
    <TermsOfServiceContainer>
      <FullModal
        title={"개인정보 처리방침"}
        children={<PrivacyPolicyModalComponent bottomMargin={0} />}
      />
    </TermsOfServiceContainer>
  );
};

export default TermsOfService;

const TermsOfServiceContainer = styled.main``;
