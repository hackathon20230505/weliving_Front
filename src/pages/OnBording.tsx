import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import BackgroundStar from "../components/OnBording/Background";
import PageContainer from "../components/Common/PageContainer";
import CommonContentContainer from "../components/Common/CommonContentContainer";
import { useCookies } from "react-cookie";

// type WillFirstProps = {};

const WillFirst: FunctionComponent = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [, setCookie] = useCookies();

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      // setIsFirstStepVisible(true);
      setCurrentStep(2);
    }, 1700);

    return () => clearTimeout(timeout1);
  }, []);

  useEffect(() => {
    if (currentStep === 2) {
      const timeout2 = setTimeout(() => {
        // setIsSecondStepVisible(true);
        setCurrentStep(3);
      }, 1700);

      return () => clearTimeout(timeout2);
    }
  }, [currentStep]);

  useEffect(() => {
    if (currentStep === 3) {
      const timeout3 = setTimeout(() => {
        setCurrentStep(4);
      }, 1500);

      return () => clearTimeout(timeout3);
    }
  }, [currentStep]);

  useEffect(() => {
    if (currentStep === 4) {
      const timeout4 = setTimeout(() => {
        setCurrentStep(5);
      }, 1500);

      return () => clearTimeout(timeout4);
    }
  }, [currentStep]);

  const onClickLogInButtonHandler = () => {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);

    setCookie("skip_onboarding", "1", {
      expires,
    });

    navigate("/Intro");
  };

  return (
    <PageContainer>
      <CommonContentContainer xPadding="5%">
        <WillFirstContainer>
          <ImageMoon
            src="https://welldie.com/img/onbording/moon.svg"
            style={{ top: "90px", left: "0" }}
          />
          <BackgroundStar />

          <WillFirstContentContainer>
            <WillFirstMainContent
              className={currentStep === 1 ? "active" : ""}
              style={{
                opacity: currentStep === 1 ? 1 : 0.5,
                transition: "opacity 800ms, visibility 800ms",
              }}
            >
              기다리고 있었어요. <br /> 당신과 이야기 하고 싶었거든요.
            </WillFirstMainContent>
            {currentStep >= 2 && (
              <WillFirstMainContent
                className={currentStep === 2 ? "active" : ""}
                style={{
                  opacity: currentStep === 2 ? 1 : 0.5,
                  transition: "opacity 800ms, visibility 800ms",
                }}
              >
                이 곳에서 항상 <br /> 지켜보고 있었어요.
              </WillFirstMainContent>
            )}
            {currentStep >= 3 && (
              <WillFirstMainContent
                className={currentStep === 3 ? "active" : ""}
                style={{
                  opacity: currentStep === 3 ? 1 : 1,
                  transition: "opacity 800ms, visibility 800ms",
                }}
              >
                당신의 이야기를 들려주세요.
              </WillFirstMainContent>
            )}
          </WillFirstContentContainer>
          {currentStep >= 4 && (
            <LogInSignUpContainer>
              <LogInButton
                className={currentStep === 4 ? "active" : ""}
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
        </WillFirstContainer>
      </CommonContentContainer>
    </PageContainer>
  );
};

export default WillFirst;
const WillFirstContainer = styled.div`
  width: 100%;
  height: 100%;

  color: var(--white);

  // background-image: url("public/intro-background-img.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const WillFirstContentContainer = styled.div`
  position: absolute;
  top: 180px;
`;

// fade in out 효과

const fadeAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

//

const WillFirstMainContent = styled.p`
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
  padding: 0 0;
  position: absolute;
  bottom: 10px;
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

const moonKeyFrame = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const ImageMoon = styled.img`
  position: absolute;
  animation: ${moonKeyFrame} 1s ease-in;
`;
