import { FunctionComponent } from "react";
import HomeHeader from "../components/Home/HomeHeader";
import HomeBody from "../components/Home/HomeBody";
import PageContainer from "../components/Common/PageContainer";
type HomeProps = {};

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <PageContainer>
      <HomeHeader />
      <HomeBody />
    </PageContainer>
  );
};

export default Home;
