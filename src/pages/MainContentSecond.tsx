import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import MainContentSecondWordFirst from "../components/MainContent/MainContentSecondWordFirst";
import MainContentSecondWordSecond from "../components/MainContent/MainContentSecondWordSecond";
import BackgroundSecond from "../components/MainContent/BackgroundSecond";

type MainContentFirstProps = {};

const MainContentFirst: FunctionComponent<MainContentFirstProps> = () => {
  const navigate = useNavigate();
  const [sectionStep, setSectionStep] = useState(0);

  const incrementSectionStep = () => {
    setSectionStep((prevStep) => prevStep + 1);
  };

  // 배경음악 출력

  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement] = useState(() => {
    const audio = new Audio("https://wliv.kr/img/music/Meditative.mp3");
    audio.loop = true; // 오디오를 무한 재생하도록 설정
    return audio;
  });

  useEffect(() => {
    if (isPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
    return () => {
      audioElement.pause();
    };
  }, [audioElement, isPlaying]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <MainContentFirstWrapper>
      <MainContentFirstContainer>
        <TopContentContainer>
          <ImageMoon
            src="https://wliv.kr/img/onbording/moon.svg"
            style={{ top: "90px", left: "5px" }}
          />
          <BackgroundSecond />

          <BackgroundMusic
            style={{
              opacity: sectionStep === 1 ? 1 : 1,
              transition: "opacity 800ms, visibility 800ms",
            }}
            className={isPlaying ? "" : "BackgroundMusicCancel"}
            onClick={toggleMusic}
          >
            {isPlaying === false && (
              <BackgroundMusicCancel></BackgroundMusicCancel>
            )}

            <BackgroundMusicIcon></BackgroundMusicIcon>
            <BackgroundMusicText>배경 bgm</BackgroundMusicText>
          </BackgroundMusic>
        </TopContentContainer>

        {sectionStep === 0 && (
          <>
            {/* 첫번째 스탭 */}
            <MainContentSecondWordFirst
              incrementSectionStep={incrementSectionStep}
            />
            {/*  */}
          </>
        )}
        {sectionStep === 1 && (
          <>
            {/* 두번째 스탭 */}
            <MainContentSecondWordSecond
              incrementSectionStep={incrementSectionStep}
            />
            {/*  */}
          </>
        )}
      </MainContentFirstContainer>
    </MainContentFirstWrapper>
  );
};

export default MainContentFirst;

const MainContentFirstWrapper = styled.div``;

const MainContentFirstContainer = styled.div`
  width: 100%;
  height: 100vh;

  color: var(--white);

  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const TopContentContainer = styled.div``;

const fadeOutAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const BackgroundMusic = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 23px;
  left: 20px;
  width: 105px;
  height: 32px;
  background-color: #352638;
  // display: inline-block;
  border-radius: 200px;
  cursor: pointer;
  z-index: 1;
  animation: ${fadeOutAnimation} 1300ms ease-in;
`;

const BackgroundMusicIcon = styled.div`
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  left: 12px;
  background: url(https://wliv.kr/img/onbording/icon-music.svg) no-repeat center
    center;
`;

const BackgroundMusicText = styled.div`
  font-size: 12px;
  position: absolute;
  top: 7px;
  left: 36px;
  color: #cbcbcb;
  ::before {
  }
`;

const BackgroundMusicCancel = styled.div``;

const moonKeyFrame = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const ImageMoon = styled.img`
  position: absolute;
  animation: ${moonKeyFrame} 1s ease-in;
`;
