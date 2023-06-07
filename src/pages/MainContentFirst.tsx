import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import BackgroundStar from "../components/MainContent/BackgroundFirst";
import Typewriter from "react-ts-typewriter";

type MainContentFirstProps = {};

const MainContentFirst: FunctionComponent<MainContentFirstProps> = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(true);

  // 배경음악 출력

  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement] = useState(() => {
    const audio = new Audio("https://wliv.kr/img/music/lofi.mp3");
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

  // 모달창 클릭시

  const [isModalClick, setIsModalClick] = useState(false);
  const [isModalClickSecond, setIsModalClickSecond] = useState(0);

  useEffect(() => {
    if (isModalClick === true) {
      const timeout0 = setTimeout(() => {
        setCurrentStep(1);
      }, 8000);

      setTimeout(() => {
        setIsModalClickSecond(1);
      }, 3000);
      return () => clearTimeout(timeout0);
    }
  }, [isModalClick]);

  // 스크립트 춢력

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

  // 스크립트 춢력

  const onClickLogInButtonHandler = () => {
    navigate("/logIn");
  };

  const closeModal = () => {
    setIsPlaying(true);
    setIsModalVisible(false);
    setIsModalClick(true);
  };

  return (
    <MainContentFirstWrapper>
      <MainContentFirstContainer>
        <TopContentContainer>
          {isModalVisible && (
            <ModalBackground>
              <ModalContainer>
                <ModalTitle>시작하기 전에</ModalTitle>
                <OptionsContainer>
                  <ModalContent>1. 불을 끄고 진행해보세요</ModalContent>
                  <ModalContent>2. 음악이 흘러나올 수 있어요</ModalContent>
                </OptionsContainer>

                <CloseButton onClick={closeModal}>닫기</CloseButton>
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
              <BackgroundMusicText>배경 bgm</BackgroundMusicText>
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
            >
              이 곳은 당신의 내면과 <br></br> 소중한 추억들을 찾을 수 있는
              공간이에요
            </MainContentFirstMainContent>
          )}
          {currentStep >= 2 && (
            <MainContentFirstMainContent
              className={currentStep === 2 ? "active" : ""}
              style={{
                opacity: currentStep === 2 ? 1 : 0.5,
                transition: "opacity 800ms, visibility 800ms",
              }}
            >
              <Typewriter
                text={`당신의 삶을 돌아보고 \n 그 속에서 찾아낸 아름다움을 \n 이 곳에 기록해주세요`}
                cursor={false}
                speed={65}
              />
            </MainContentFirstMainContent>
          )}
          {currentStep >= 3 && (
            <MainContentFirstMainContent
              className={currentStep === 3 ? "active" : ""}
              style={{
                opacity: currentStep === 3 ? 1 : 0.5,
                transition: "opacity 800ms, visibility 800ms",
              }}
            >
              <Typewriter
                text={`추억, 사랑, 물건 \n 정이 깃든 모든 것들이 해당돼요`}
                cursor={false}
                speed={65}
              />
            </MainContentFirstMainContent>
          )}
          {currentStep >= 4 && (
            <MainContentFirstMainContent
              className={currentStep === 4 ? "active" : ""}
              style={{
                opacity: currentStep === 4 ? 1 : 1,
                transition: "opacity 800ms, visibility 800ms",
              }}
            >
              <Typewriter
                text={`당신의 인생 안에서 \n 놓쳤던 소중한 순간들을 \n 발견할 수 있을거에요`}
                cursor={false}
                speed={65}
              />
            </MainContentFirstMainContent>
          )}
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
              다음
            </LogInButton>
          </LogInSignUpContainer>
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

const MainContentFirstContentContainer = styled.div`
  padding: 0 27px;
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
  padding: 0 20px;
  position: absolute;
  bottom: 0px;
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
  height: 153px;
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
  bottom: 0px;
  text-align: center;
  line-height: 47px;
  display: block;

  margin-top: 26px;

  background-color: var(--main-color);
  border-radius: 4px;

  font-weight: 700;
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
