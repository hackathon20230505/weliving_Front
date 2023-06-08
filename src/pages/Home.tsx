import { FunctionComponent } from "react";
import styled from "styled-components";
import HomeHeader from "../components/Home/HomeHeader";
import HomeBody from "../components/Home/HomeBody";
type HomeProps = {};

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <HomeContainer>
      <HomeHeader />
      <HomeBody />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;
