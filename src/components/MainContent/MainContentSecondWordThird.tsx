import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Typewriter from "react-ts-typewriter";

// 부모 컴포넌트와 통신

interface MainContentSecondWordFirstProps {
  incrementSectionStep: () => void;
}

//

const MainContentSecondWordFirst: React.FC<MainContentSecondWordFirstProps> = ({
  incrementSectionStep,
}) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  // 모달창 클릭시

  const [isModalClick] = useState(false);
  const [, setIsModalClickSecond] = useState(0);

  useEffect(() => {
    if (isModalClick) {
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
        setIsModalClickSecond(1);
      }, 4000);

      return () => clearTimeout(timeout2);
    }
  }, [currentStep]);

  useEffect(() => {
    if (currentStep === 2) {
      const timeout3 = setTimeout(() => {
        setCurrentStep(3);
      }, 3500);

      return () => clearTimeout(timeout3);
    }
  }, [currentStep]);

  useEffect(() => {
    if (currentStep === 3) {
      const timeout4 = setTimeout(() => {
        setCurrentStep(4);
      }, 3500);

      return () => clearTimeout(timeout4);
    }
  }, [currentStep]);

  useEffect(() => {
    if (currentStep === 4) {
      const timeout4 = setTimeout(() => {
        setCurrentStep(5);
      }, 2500);

      return () => clearTimeout(timeout4);
    }
  }, [currentStep]);

  const onClickLogInButtonHandler = () => {
    navigate("/WriteLetter");
  };

  // 스크립트 춢력

  return (
    <BackgroundStarContainer>
      {/* 배경 출력 */}
      <ImageTent
        src="https://wliv.kr/img/onbording/section3-0.svg"
        style={{
          width: "190px",
          height: "19px",
          bottom: "15%",
          left: "26%",
          opacity: "100%",
        }}
      />
      {(currentStep === 1 || currentStep === 2) && (
        <ImageTent
          className={currentStep === 1 || currentStep === 2 ? "active" : ""}
          src="https://wliv.kr/img/onbording/section3-4.svg"
          style={{
            width: "138px",
            height: "149px",
            bottom: "20%",
            left: "32%",
          }}
        />
      )}

      {currentStep === 2 && (
        <ImageTent
          className={currentStep === 2 ? "active" : ""}
          src="https://wliv.kr/img/onbording/section3-2.svg"
          style={{
            width: "80px",
            height: "79px",
            bottom: "25%",
            left: "210px",
          }}
        />
      )}
      {currentStep >= 3 && (
        <ImageTent
          className={currentStep === 3 ? "active" : ""}
          src="https://wliv.kr/img/onbording/section3-3.svg"
          style={{
            width: "276px",
            height: "164px",
            bottom: "19%",
            left: "60px",
          }}
        />
      )}

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
            당신의 마음을 챙길 수 있는<br></br> 글을 써보시겠어요?
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
              text={`스스로를 되돌아볼 수 있는 \n 마음챙김 훈련이에요.`}
              cursor={false}
              speed={65}
            />
          </MainContentFirstMainContent>
        )}

        {currentStep >= 3 && (
          <MainContentFirstMainContent
            className={currentStep === 3 ? "active" : ""}
            style={{
              opacity: currentStep >= 3 ? 1 : 0.5,
              transition: "opacity 800ms, visibility 800ms",
            }}
          >
            <Typewriter
              text={`그 동안 쌓인 마음의 찌꺼기를 \n 덜어낼겁니다.`}
              cursor={false}
              speed={65}
            />
          </MainContentFirstMainContent>
        )}
      </MainContentFirstContentContainer>
      {currentStep >= 4 && (
        <LogInSignUpContainer>
          <LogInButton
            className={currentStep === 4 ? "active" : ""}
            style={{
              opacity: currentStep === 4 ? 1 : 1,
              transition: "opacity 800ms, visibility 800ms",
            }}
            onClick={onClickLogInButtonHandler}
          >
            다음
          </LogInButton>
        </LogInSignUpContainer>
      )}
    </BackgroundStarContainer>
  );
};

export default MainContentSecondWordFirst;

const BackgroundStarContainer = styled.div``;

const MainContentFirstContentContainer = styled.div`
  padding: 0 5px;
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
  padding: 0 0px;
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

// const OptionsContainer = styled.span`
//   padding-bottom: 24px;
// `;

// 배경

const KeyFrameSection2_1 = keyframes`
`;

const ImageTent = styled.img`
  position: absolute;
  &.active {
    animation: ${fadeAnimation} 1200ms ease-in-out;
  }
`;
