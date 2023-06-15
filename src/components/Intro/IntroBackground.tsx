import { FunctionComponent } from "react";
import styled, { keyframes } from "styled-components";
type BackgroundStarProps = {};

// 투명도 조절 키프레임

const BackgroundStar: FunctionComponent<BackgroundStarProps> = () => {
  return (
    <BackgroundStarContainer>
      <IntroBackground1
        src="https://wliv.kr/img/intro/intro-background-0-1.svg"
        style={{ top: "-60px", right: "-340px", opacity: "100%" }}
      />
      <IntroBackground2
        src="https://wliv.kr/img/intro/intro-background-0-2.svg"
        style={{ top: "161px", opacity: "100%", left: "-45px" }}
      />
      <IntroBackground3
        src="https://wliv.kr/img/intro/intro-background-0-3.svg"
        style={{ top: "390px", right: "-370px", opacity: "100%" }}
      />
      <IntroBackground4
        src="https://wliv.kr/img/intro/intro-background-0-4.svg"
        style={{ top: "-100px", left: "0px", opacity: "90%" }}
      />

      {/* 별 시작 */}
      <ImageStar1
        src="https://wliv.kr/img/intro/intro-background-0-3.svg"
        style={{
          width: "119px",
          height: "120px",
          top: "60px",
          left: "69%",
        }}
      />

      {/* 별 끝 */}
    </BackgroundStarContainer>
  );
};

export default BackgroundStar;

const moonKeyFrame = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const BackgroundStarContainer = styled.div`
  animation: ${moonKeyFrame} 1s ease-in;
`;

const ImageStar1 = styled.img``;

const IntroBackground1 = styled.img`
  position: absolute;
`;

const IntroBackground2 = styled.img`
  position: absolute;
`;

const IntroBackground3 = styled.img`
  position: absolute;
`;

const IntroBackground4 = styled.img`
  position: absolute;
`;
