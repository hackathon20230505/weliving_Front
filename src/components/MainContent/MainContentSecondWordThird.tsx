import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Typewriter from "react-ts-typewriter";

// 부모 컴포넌트와 통신

interface MainContentSecondWordFirstProps {
  incrementSectionStep: () => void;
}

//

const MainContentSecondWordFirst: React.FC<
  MainContentSecondWordFirstProps
> = ({}) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  // 모달창 클릭시

  // 스크립트 춢력

  const onClickNextButtonHandler = () => {
    setCurrentStep(currentStep + 1);
  };

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
            width: "149px",
            height: "149px",
            bottom: "19%",
            left: "120px",
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
            <Typewriter
              text={`당신의 마음을 챙길 수 있는 \n 글을 써보시겠어요?`}
              cursor={false}
              speed={65}
            />
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

      <LogInSignUpContainer>
        <LogInButton
          className={currentStep === 4 ? "active" : ""}
          style={{
            opacity: currentStep === 4 ? 1 : 1,
            transition: "opacity 800ms, visibility 800ms",
          }}
          onClick={() => {
            if (currentStep === 1) {
              onClickNextButtonHandler();
            } else if (currentStep === 2) {
              onClickNextButtonHandler();
            } else if (currentStep === 3) {
              onClickLogInButtonHandler();
            }
          }}
        >
          다음
        </LogInButton>
      </LogInSignUpContainer>
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

const ImageTent = styled.img`
  position: absolute;
  &.active {
    animation: ${fadeAnimation} 1200ms ease-in-out;
  }
`;
