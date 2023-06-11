import { FunctionComponent } from "react";
import WriteCardHeader from "../components/WriteCard/WriteCardHeader";
import WriteCardBody from "../components/WriteCard/WriteCardBody";
import PageContainer from "../components/Common/PageContainer.tsx";

type WriteCardProps = {};

const WriteCard: FunctionComponent<WriteCardProps> = () => {
  return (
    <PageContainer>
      <WriteCardHeader />
      <WriteCardBody />
    </PageContainer>
  );
};

export default WriteCard;
