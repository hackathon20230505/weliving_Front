import { FunctionComponent } from "react";
import styled, { keyframes } from "styled-components";
// type BackgroundStarProps = {};

// 투명도 조절 키프레임
const starKeyFrame = keyframes`
  0% { opacity: 1; }
  50% { opacity: 1; }
  100% { opacity: 1; }
`;

const cloudKeyFrame1 = keyframes`
`;

const cloudKeyFrame2 = keyframes`
`;

const BackgroundStar: FunctionComponent = () => {
  return (
    <BackgroundStarContainer>
      <ImageCloud1
        src="https://wliv.kr/img/onbording/section1-1.svg"
        style={{ bottom: "12px", right: "-220px", opacity: "60%" }}
      />
      <ImageCloud2
        src="https://wliv.kr/img/onbording/section1-2.svg"
        style={{ bottom: "400px", left: "-66px", opacity: "60%" }}
      />
      <ImageCloud2
        src="https://wliv.kr/img/onbording/section1-3.svg"
        style={{ top: "-00px", right: "-126px", opacity: "100%" }}
      />
      {/* 별 시작 */}
      <ImageStar1
        src="https://wliv.kr/img/onbording/section1-4.svg"
        style={{
          width: "100%",
          height: "100%",
          top: "00px",
          left: "0%",
        }}
      />

      {/* 별 끝 */}
    </BackgroundStarContainer>
  );
};

export default BackgroundStar;

const firstKeyFrame = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const BackgroundStarContainer = styled.div`
  animation: ${firstKeyFrame} 1s ease-in;
`;

const ImageStar1 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 5s ease-in-out infinite;
`;
const ImageCloud1 = styled.img`
  position: absolute;
  animation: ${cloudKeyFrame1} 75s ease-in;
`;

const ImageCloud2 = styled.img`
  position: absolute;
  animation: ${cloudKeyFrame2} 95s ease-in;
`;

const ImageCloud3 = styled.img`
  position: absolute;
  animation: ${cloudKeyFrame2} 95s ease-in;
`;
