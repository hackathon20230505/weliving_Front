import { FunctionComponent, useEffect } from "react";
import LogInHeader from "../components/LogIn/LogInHeader";
import LogInBody from "../components/LogIn/LogInBody";
import PageContainer from "../components/Common/PageContainer";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isPlayingState } from "../components/MainContent/atoms/MusicStatus";
import { isPlayingStateSecond } from "../components/MainContent/atoms/MusicStatusSecond";
type LogInProps = {};

const LogIn: FunctionComponent<LogInProps> = () => {
  const [, setIsPlaying] = useRecoilState(isPlayingState);
  const [, setIsPlayingSecond] = useRecoilState(isPlayingStateSecond);

  useEffect(() => {
    setIsPlaying(false);
    setIsPlayingSecond(false);
  }, []);

  const nativate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      nativate("/");
    }
  }, []);
  return (
    <PageContainer>
      <LogInHeader />
      <LogInBody />
    </PageContainer>
  );
};

export default LogIn;
