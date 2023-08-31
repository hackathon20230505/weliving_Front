import { FunctionComponent, useState } from "react";
import { useRecoilState } from "recoil";
import { isPlayingState } from "../components/MainContent/atoms/MusicStatus";
import { isPlayingStateSecond } from "../components/MainContent/atoms/MusicStatusSecond";
import styled, { keyframes } from "styled-components";
import MainContentSecondWordFirst from "../components/MainContent/MainContentSecondWordFirst";
import MainContentSecondWordSecond from "../components/MainContent/MainContentSecondWordSecond";
import MainContentSecondWordThird from "../components/MainContent/MainContentSecondWordThird";
import BackgroundSecond from "../components/MainContent/BackgroundSecond";
import PageContainer from "../components/Common/PageContainer";
import CommonContentContainer from "../components/Common/CommonContentContainer";

const MainContentFirst: FunctionComponent = () => {
  const [sectionStep, setSectionStep] = useState(0);

  const incrementSectionStep = () => {
    setSectionStep((prevStep) => prevStep + 1);
  };
  const [, setIsPlaying] = useRecoilState(isPlayingState);

  const [isPlayingSecond, setIsPlayingSecond] =
    useRecoilState(isPlayingStateSecond);

  const toggleMusicSecond = () => {
    setIsPlayingSecond(!isPlayingSecond);
    setIsPlaying(false);
  };

  return (
    <PageContainer>
      <CommonContentContainer
        xPadding="5%"
        h={"calc(100%)"}
        customOverflowY={"hidden"}
        customOverflowX={"hidden"}
      >
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
                className={isPlayingSecond ? "" : "BackgroundMusicCancel"}
                onClick={toggleMusicSecond}
              >
                {isPlayingSecond === false && (
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
            {sectionStep === 2 && (
              <>
                {/* 두번째 스탭 */}
                <MainContentSecondWordThird
                  incrementSectionStep={incrementSectionStep}
                />
                {/*  */}
              </>
            )}
          </MainContentFirstContainer>
        </MainContentFirstWrapper>
      </CommonContentContainer>
    </PageContainer>
  );
};

export default MainContentFirst;

const fadeOutAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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
  background: url(https://wliv.kr/img/onbording/icon-music.svg) no-repeat
    center center;
`;

const BackgroundMusicText = styled.div`
  font-size: 12px;
  position: absolute;
  top: 9px;
  left: 38px;
  color: #cbcbcb;
  ::before {
  }
`;

const BackgroundMusicCancel = styled.div`
  width: 72px;
  height: 1px;
  left: 17px;
  background-color: #cbcbcb;
  position: absolute;
  z-index: 3;
`;

const moonKeyFrame = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const ImageMoon = styled.img`
  position: absolute;
  animation: ${moonKeyFrame} 1s ease-in;
`;
