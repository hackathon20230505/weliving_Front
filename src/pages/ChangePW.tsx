import { FunctionComponent } from "react";
import ChangePWHeader from "../components/ChangePW/ChangePWHeader";
import ChangePWBody from "../components/ChangePW/ChangePWBody";
import PageContainer from "../components/Common/PageContainer";
type ChangePWProps = {};

const ChangePW: FunctionComponent<ChangePWProps> = () => {
  return (
    <PageContainer>
      <ChangePWHeader />
      <ChangePWBody />
    </PageContainer>
  );
};

export default ChangePW;
