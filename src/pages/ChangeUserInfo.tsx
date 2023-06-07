import { FunctionComponent } from "react";
import styled from "styled-components";
import ChangeUserInfoHeader from "../components/ChangeUserInfo/ChangeUserInfoHeader";
import ChangeUserInfoBody from "../components/ChangeUserInfo/ChangeUserInfoBody";
type ChangeUserInfoProps = {};

const ChangeUserInfo: FunctionComponent<ChangeUserInfoProps> = () => {
  return (
    <ChangeUserInfoContainer>
      <ChangeUserInfoHeader />
      <ChangeUserInfoBody />
    </ChangeUserInfoContainer>
  );
};

export default ChangeUserInfo;

const ChangeUserInfoContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;
