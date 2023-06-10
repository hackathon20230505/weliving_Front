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
      {/* 별 시작 */}
      <ImageStar1
        src="https://wliv.kr/img/onbording/onbording-back-0.svg"
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

const firstKeyFrame = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const BackgroundStarContainer = styled.div`
  animation: ${firstKeyFrame} 6s ease-in;
`;

const ImageStar1 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 5s ease-in-out infinite;
`;

const ImageStar2 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 4s ease-in-out infinite;
`;

const ImageStar3 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 3s ease-in-out infinite;
`;

const ImageStar4 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 2s ease-in-out infinite;
`;

const ImageStar5 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 3s ease-in-out infinite;
`;

const ImageStar6 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 5s ease-in-out infinite;
`;

const ImageStar7 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 6s ease-in-out infinite;
`;

const ImageStar8 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 4s ease-in-out infinite;
`;

const ImageStar9 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 7s ease-in-out infinite;
`;

const ImageStar10 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 4s ease-in-out infinite;
`;

const ImageStar11 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 2s ease-in-out infinite;
`;

const ImageStar12 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 5s ease-in-out infinite;
`;

const ImageStar13 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 3s ease-in-out infinite;
`;

const ImageStar14 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 5s ease-in-out infinite;
`;

const ImageStar15 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 2s ease-in-out infinite;
`;

const ImageStar16 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 2s ease-in-out infinite;
`;

const ImageStar17 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 4s ease-in-out infinite;
`;

const ImageStar18 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 6s ease-in-out infinite;
`;

const ImageStar19 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 8s ease-in-out infinite;
`;

const ImageCloud1 = styled.img`
  position: absolute;
  animation: ${cloudKeyFrame1} 75s ease-in;
`;

const ImageCloud2 = styled.img`
  position: absolute;
  animation: ${cloudKeyFrame2} 95s ease-in;
`;
