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
        setIsModalClickSecond(1);
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

  return (
    <BackgroundStarContainer>
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
            당신의 소중한 추억들을 <br></br> 들려주셔서 감사해요.
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
              text={`그대의 이야기를 더 듣고싶어요. \n 같이 앉아 이야기해볼까요?`}
              cursor={false}
              speed={65}
            />
          </MainContentFirstMainContent>
        )}

        {currentStep >= 3 && (
          <MainContentFirstMainContent
            className={currentStep === 3 ? "active" : ""}
            style={{
              opacity: currentStep === 3 ? 1 : 1,
              transition: "opacity 800ms, visibility 800ms",
            }}
          ></MainContentFirstMainContent>
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
            onClick={incrementSectionStep}
          >
            의자에 앉기
          </LogInButton>
        </LogInSignUpContainer>
      )}
    </BackgroundStarContainer>
  );
};

export default MainContentSecondWordFirst;

const BackgroundStarContainer = styled.div``;

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

const OptionsContainer = styled.span`
  padding-bottom: 24px;
`;
