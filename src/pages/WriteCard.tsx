import { FunctionComponent } from "react";
import WriteCardHeader from "../components/WriteCard/WriteCardHeader";
import WriteCardBody from "../components/WriteCard/WriteCardBody";
import CommonContentContainer from "../components/Common/CommonContentContainer";
type WriteCardProps = {};

const WriteCard: FunctionComponent<WriteCardProps> = () => {
  return (
    <CommonContentContainer>
      <WriteCardHeader />
      <WriteCardBody />
    </CommonContentContainer>
  );
};

export default WriteCard;
