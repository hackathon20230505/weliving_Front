import { FunctionComponent, useEffect } from "react";
import SignUpHeader from "../components/SignUp/SignUpHeader";
import SignUpBody from "../components/SignUp/SignUpBody";
import PageContainer from "../components/Common/PageContainer";
import { useRecoilState } from "recoil";
import { isPlayingState } from "../components/MainContent/atoms/MusicStatus";
import { isPlayingStateSecond } from "../components/MainContent/atoms/MusicStatusSecond";

type SignUpProps = {};

const SignUp: FunctionComponent<SignUpProps> = () => {
  //

  const [, setIsPlaying] = useRecoilState(isPlayingState);
  const [, setIsPlayingSecond] = useRecoilState(isPlayingStateSecond);

  useEffect(() => {
    setIsPlaying(false);
    setIsPlayingSecond(false);
  }, []);

  //

  return (
    <PageContainer>
      <SignUpHeader />
      <SignUpBody />
    </PageContainer>
  );
};

export default SignUp;
