import { FunctionComponent } from "react";
import ChangeUserInfoHeader from "../components/ChangeUserInfo/ChangeUserInfoHeader";
import ChangeUserInfoBody from "../components/ChangeUserInfo/ChangeUserInfoBody";
import PageContainer from "../components/Common/PageContainer";
type ChangeUserInfoProps = {};

const ChangeUserInfo: FunctionComponent<ChangeUserInfoProps> = () => {
  return (
    <PageContainer>
      <ChangeUserInfoHeader />
      <ChangeUserInfoBody />
    </PageContainer>
  );
};

export default ChangeUserInfo;
