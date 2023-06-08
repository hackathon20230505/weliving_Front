import { FunctionComponent } from "react";
import PageContainer from "../components/Common/PageContainer";
import { useParams } from "react-router";
import Loading from "../components/AfterWrite/Loading";
import AnswerGPT from "../components/AfterWrite/AnswerGPT";
import YourHelp from "../components/AfterWrite/YourHelp";
type AfterWriteProps = {};

const AfterWrite: FunctionComponent<AfterWriteProps> = () => {
  const { id } = useParams();

  return (
    <PageContainer>
      {id === "1" && <Loading />}
      {id === "2" && <AnswerGPT />}
      {id === "3" && <YourHelp />}
    </PageContainer>
  );
};

export default AfterWrite;
