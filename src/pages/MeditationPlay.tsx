import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import BackgroundStar from "../components/MainContent/BackgroundFirst";
import PageContainer from "../components/Common/PageContainer";
import CommonContentContainer from "../components/Common/CommonContentContainer";
import { useParams } from "react-router-dom";

type MainContentFirstProps = {};

const MainContentFirst: FunctionComponent<MainContentFirstProps> = () => {
  const { id = "1" } = useParams(); // 'defaultID' is the default value.

  const audioUrls = {
    1: [
      "https://wliv.kr/img/tts-back/back1.mp3",
      "https://wliv.kr/img/tts/tts2.mp3",
    ],
    2: [
      "https://wliv.kr/img/tts-back/back1.mp3",
      "https://wliv.kr/img/tts/tts1.mp3",
    ],
    3: [
      "https://wliv.kr/img/tts-back/back2.mp3",
      "https://wliv.kr/img/tts/tts3.mp3",
    ],
    4: [
      "https://wliv.kr/img/tts-back/back2.mp3",
      "https://wliv.kr/img/tts/tts4.mp3",
    ],
    // ... more ids
  };

  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(true);

  // Play background music

  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement1] = useState(() => {
    const audio = new Audio(audioUrls[id][0]);
    audio.loop = true; // Set the audio to play indefinitely
    return audio;
  });

  const [audioElement2] = useState(() => {
    const audio = new Audio(audioUrls[id][1]);
    audio.loop = true;
    return audio;
  });

  useEffect(() => {
    if (isPlaying) {
      audioElement1.play();
      audioElement2.play();
    } else {
      audioElement1.pause();
      audioElement2.pause();
    }
    return () => {
      audioElement1.pause();
      audioElement2.pause();
    };
  }, [audioElement1, audioElement2, isPlaying]);

  // 시간을 1초마다 업데이트

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(audioElement2.currentTime);
      setDuration(audioElement2.duration);
    }, 1000); // 1초마다 시간 업데이트

    return () => clearInterval(interval);
  }, [audioElement2]);

  // 시간을 "분:초" 형식으로 변환하는 함수
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  // 시간을 1초마다 업데이트

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  // When modal window is clicked

  const [isModalClick, setIsModalClick] = useState(false);
  const [isModalClickSecond, setIsModalClickSecond] = useState(0);

  useEffect(() => {
    if (isModalClick) {
      const timeout0 = setTimeout(() => {
        setCurrentStep(4);
      }, 2000);

      setTimeout(() => {
        setIsModalClickSecond(1);
      }, 3000);
      return () => clearTimeout(timeout0);
    }
  }, [isModalClick]);

  // Display script

  useEffect(() => {
    if (currentStep === 1) {
      const timeout2 = setTimeout(() => {
        setCurrentStep(2);
      }, 3500);

      return () => clearTimeout(timeout2);
    }
  }, [currentStep]);

  useEffect(() => {
    if (currentStep === 2) {
      const timeout3 = setTimeout(() => {
        setCurrentStep(3);
      }, 4000);

      return () => clearTimeout(timeout3);
    }
  }, [currentStep]);

  useEffect(() => {
    if (currentStep === 3) {
      const timeout4 = setTimeout(() => {
        setCurrentStep(4);
      }, 4500);

      return () => clearTimeout(timeout4);
    }
  }, [currentStep]);

  useEffect(() => {
    if (currentStep === 4) {
      const timeout4 = setTimeout(() => {
        setCurrentStep(5);
      }, 4000);

      return () => clearTimeout(timeout4);
    }
  }, [currentStep]);

  // Display script

  const onClickLogInButtonHandler = () => {
    navigate("/MeditationList");
  };

  const closeModal = () => {
    setTimeout(() => {
      setIsPlaying(true);
    }, 1500); // Play audio after 3 seconds
    setIsModalVisible(false);
    setIsModalClick(true);
  };

  return (
    <PageContainer>
      <CommonContentContainer xPadding="5%">
        <MainContentFirstWrapper>
          <MainContentFirstContainer>
            <TopContentContainer>
              {isModalVisible && (
                <ModalBackground>
                  <ModalContainer>
                    <ModalTitle>시작하기 전에</ModalTitle>
                    <OptionsContainer>
                      <ModalContent>1. 음악이 자동 재생됩니다.</ModalContent>
                      <ModalContent>
                        2. 집중을 위해 불을 끄고 진행해보세요.
                      </ModalContent>
                    </OptionsContainer>
                    <CloseButton onClick={closeModal}>진행하기</CloseButton>
                    <ReturnButton onClick={onClickLogInButtonHandler}>
                      뒤로가기
                    </ReturnButton>
                  </ModalContainer>
                </ModalBackground>
              )}

              {!isModalVisible && (
                <BackgroundMusic
                  style={{
                    opacity: currentStep === 1 ? 1 : 1,
                    transition: "opacity 800ms, visibility 800ms",
                  }}
                  className={isPlaying ? "" : "BackgroundMusicCancel"}
                  onClick={toggleMusic}
                >
                  {isPlaying === false && (
                    <BackgroundMusicCancel></BackgroundMusicCancel>
                  )}

                  <BackgroundMusicIcon></BackgroundMusicIcon>
                  <BackgroundMusicText>Mute On</BackgroundMusicText>
                </BackgroundMusic>
              )}
            </TopContentContainer>
            {isModalClickSecond === 1 && (
              <>
                <ImageMoon
                  src="https://wliv.kr/img/onbording/moon.svg"
                  style={{ top: "90px", left: "5px" }}
                />
                <BackgroundStar />
              </>
            )}{" "}
            {/* 배경 출력 */}
            {/* 문자 첫 출력 */}
            <MainContentFirstContentContainer>
              {currentStep >= 1 && (
                <MainContentFirstMainContent
                  className={currentStep === 1 ? "active" : ""}
                  style={{
                    opacity: currentStep === 1 ? 1 : 0.5,
                    transition: "opacity 800ms, visibility 800ms",
                  }}
                ></MainContentFirstMainContent>
              )}
              {currentStep >= 2 && (
                <MainContentFirstMainContent
                  className={currentStep === 2 ? "active" : ""}
                  style={{
                    opacity: currentStep === 2 ? 1 : 0.5,
                    transition: "opacity 800ms, visibility 800ms",
                  }}
                ></MainContentFirstMainContent>
              )}
              {currentStep >= 3 && (
                <MainContentFirstMainContent
                  className={currentStep === 3 ? "active" : ""}
                  style={{
                    opacity: currentStep === 3 ? 1 : 0.5,
                    transition: "opacity 800ms, visibility 800ms",
                  }}
                ></MainContentFirstMainContent>
              )}
              {currentStep >= 4 && (
                <MainContentFirstMainContent
                  className={currentStep === 4 ? "active" : ""}
                  style={{
                    opacity: currentStep === 4 ? 1 : 1,
                    transition: "opacity 800ms, visibility 800ms",
                  }}
                ></MainContentFirstMainContent>
              )}
              {isModalClickSecond === 1 && (
                <div
                  style={{
                    opacity: currentStep === 1 ? 1 : 1,
                    transition: "opacity 800ms, visibility 800ms",
                  }}
                >
                  <span>{formatTime(currentTime)}</span>
                  <span> / {formatTime(duration)}</span>
                </div>
              )}{" "}
            </MainContentFirstContentContainer>
            {currentStep >= 5 && (
              <LogInSignUpContainer>
                <LogInButton
                  className={currentStep === 5 ? "active" : ""}
                  style={{
                    opacity: currentStep === 3 ? 1 : 1,
                    transition: "opacity 800ms, visibility 800ms",
                  }}
                  onClick={onClickLogInButtonHandler}
                >
                  명상 종료
                </LogInButton>
              </LogInSignUpContainer>
            )}
          </MainContentFirstContainer>
        </MainContentFirstWrapper>
      </CommonContentContainer>
    </PageContainer>
  );
};

export default MainContentFirst;

const MainContentFirstWrapper = styled.div``;

const MainContentFirstContainer = styled.div`
  width: 100%;
  height: 100%;

  color: var(--white);

  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const MainContentFirstContentContainer = styled.div`
  padding: 0 5px 0 7px;
  position: absolute;
  top: 180px;
`;

const fadeAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MainContentFirstMainContent = styled.p`
  margin-bottom: 16px;

  font-weight: 700;
  font-size: 18px;
  line-height: 150%;

  span {
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    white-space: pre-line;
  }

  &.active {
    animation: ${fadeAnimation} 1200ms ease-in-out;
  }
`;

const LogInSignUpContainer = styled.div`
  padding: 0px;
  position: absolute;
  bottom: 0;
  width: 90%;

  display: flex;
  flex-direction: column;
`;

const LogInButton = styled.button`
  width: 100%;
  height: 56px;

  margin-bottom: 12px;

  background-color: var(--main-color);
  border-radius: 4px;

  font-weight: 700;

  &.active {
    animation: ${fadeAnimation} 1200ms ease-in-out;
  }
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

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(17, 17, 17, 0.6);
  z-index: 2;
  animation: ${fadeOutAnimation} 1000ms ease-in;
`;

const ModalContainer = styled.div`
  /* Your modal container styles go here */
  width: 350px;
  height: 223px;
  background-color: #fff;
  padding: 24px 20px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 4px;
  z-index: 1;
  animation: ${fadeOutAnimation} 500ms ease-in;
`;

const ModalTitle = styled.span`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  display: block;
  padding-bottom: 16px;
`;

const OptionsContainer = styled.span`
  padding-bottom: 24px;
`;

const CloseButton = styled.span`
  width: 100%;
  height: 48px;
  bottom: 0;
  text-align: center;
  line-height: 47px;
  display: block;

  margin-top: 30px;

  background-color: var(--main-color);
  border-radius: 4px;

  font-weight: 700;
`;

const ReturnButton = styled.span`
  bottom: 0;
  font-size: 14px;
  color: #000;
  text-align: center;
  display: block;
  padding-top: 6px;
`;

const ModalContent = styled.span`
  color: #000;
  font-size: 14px;
  display: block;
  line-height: 150%;
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
