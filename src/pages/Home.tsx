import { FunctionComponent, useEffect } from "react";
import HomeHeader from "../components/Home/HomeHeader";
import HomeBody from "../components/Home/HomeBody";
import PageContainer from "../components/Common/PageContainer";
import { useRecoilState } from "recoil";
import { isPlayingState } from "../components/MainContent/atoms/MusicStatus";
import { isPlayingStateSecond } from "../components/MainContent/atoms/MusicStatusSecond";
type HomeProps = {};

const Home: FunctionComponent<HomeProps> = () => {
  const [, setIsPlaying] = useRecoilState(isPlayingState);
  const [, setIsPlayingSecond] = useRecoilState(isPlayingStateSecond);

  useEffect(() => {
    setIsPlaying(false);
    setIsPlayingSecond(false);
  }, []);

  return (
    <PageContainer>
      <HomeHeader />
      <HomeBody />
    </PageContainer>
  );
};

export default Home;
