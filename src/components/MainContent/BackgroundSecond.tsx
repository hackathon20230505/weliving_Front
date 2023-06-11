import { FunctionComponent } from "react";
import styled, { keyframes } from "styled-components";
type BackgroundSecondProps = {};

// 투명도 조절 키프레임
const starKeyFrame = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

// const KeyFrameSection3_0 = keyframes`
// `;

// const KeyFrameSection3_1 = keyframes`
// `;

// const KeyFrameSection3_2 = keyframes`
// `;

// const KeyFrameSection3_3 = keyframes`
// `;

//

const BackgroundSecond: FunctionComponent<BackgroundSecondProps> = () => {
  return (
    <BackgroundStarContainer>
      {/* 바닥 */}
      <ImageState
        src="https://wliv.kr/img/onbording/section2-0.svg"
        style={{
          width: "150%",
          height: "100%",
          left: "-27%",
          bottom: "-40%",
        }}
      />

      {/* 별 시작 */}
      <ImageStar1
        src="https://wliv.kr/img/onbording/section2-5.svg"
        style={{
          width: "220px",
          height: "220px",
          top: "0px",
          left: "0%",
        }}
      />

      <ImageStar1
        src="https://wliv.kr/img/onbording/section2-5.svg"
        style={{
          width: "100%",
          height: "100%",
          top: "-126px",
          right: "-50%",
          rotate: "30deg",
        }}
      />

      <ImageStar1
        src="https://wliv.kr/img/onbording/section2-5.svg"
        style={{
          width: "100%",
          height: "100%",
          top: "106px",
          right: "-20%",
          rotate: "90deg",
        }}
      />

      <ImageStar1
        src="https://wliv.kr/img/onbording/section2-5.svg"
        style={{
          width: "100%",
          height: "100%",
          top: "106px",
          left: "-20%",
          rotate: "90deg",
        }}
      />

      <ImageStar1
        src="https://wliv.kr/img/onbording/will-star-4.svg"
        style={{
          width: "22px",
          height: "22px",
          top: "60px",
          left: "9%",
        }}
      />
      <ImageStar2
        src="https://wliv.kr/img/onbording/will-star-1.svg"
        style={{
          width: "26px",
          height: "26px",
          top: "40px",
          left: "20%",
        }}
      />
      {/* <ImageStar3
        src="https://wliv.kr/img/onbording/will-star-2.svg"
        style={{
          width: "12px",
          height: "12px",
          top: "90px",
          left: "26%",
        }}
      /> */}
      <ImageStar4
        src="https://wliv.kr/img/onbording/will-star-4.svg"
        style={{
          width: "22px",
          height: "22px",
          top: "35px",
          left: "35%",
        }}
      />
      <ImageStar5
        src="https://wliv.kr/img/onbording/will-star-1.svg"
        style={{
          width: "22px",
          height: "22px",
          top: "80px",
          left: "35%",
        }}
      />
      <ImageStar6
        src="https://wliv.kr/img/onbording/will-star-1.svg"
        style={{
          width: "22px",
          height: "22px",
          top: "125px",
          left: "30%",
        }}
      />
      {/* <ImageStar7
        src="https://wliv.kr/img/onbording/will-star-2.svg"
        style={{
          width: "22px",
          height: "22px",
          top: "110px",
          left: "42%",
        }}
      /> */}
      {/* <ImageStar8
        src="https://wliv.kr/img/onbording/will-star-2.svg"
        style={{
          width: "22px",
          height: "22px",
          top: "60px",
          left: "46%",
        }}
      /> */}
      <ImageStar9
        src="https://wliv.kr/img/onbording/will-star-3.svg"
        style={{
          width: "9px",
          height: "11px",
          top: "40px",
          left: "55%",
        }}
      />
      {/* <ImageStar10
        src="https://wliv.kr/img/onbording/will-star-2.svg"
        style={{
          width: "12px",
          height: "12px",
          top: "70px",
          left: "60%",
        }}
      /> */}
      <ImageStar11
        src="https://wliv.kr/img/onbording/will-star-4.svg"
        style={{
          width: "22px",
          height: "22px",
          top: "90px",
          left: "54%",
        }}
      />
      <ImageStar12
        src="https://wliv.kr/img/onbording/will-star-4.svg"
        style={{
          width: "13px",
          height: "13px",
          top: "125px",
          left: "60%",
        }}
      />
      <ImageStar13
        src="https://wliv.kr/img/onbording/will-star-4.svg"
        style={{
          width: "22px",
          height: "22px",
          top: "45px",
          left: "70%",
        }}
      />
      <ImageStar14
        src="https://wliv.kr/img/onbording/will-star-4.svg"
        style={{
          width: "22px",
          height: "22px",
          top: "55px",
          left: "80%",
        }}
      />
      <ImageStar15
        src="https://wliv.kr/img/onbording/will-star-1.svg"
        style={{
          width: "14px",
          height: "14px",
          top: "90px",
          left: "69%",
        }}
      />
      {/* <ImageStar16
        src="https://wliv.kr/img/onbording/will-star-3.svg"
        style={{
          width: "12px",
          height: "12px",
          top: "85px",
          left: "88%",
        }}
      />
      <ImageStar17
        src="https://wliv.kr/img/onbording/will-star-3.svg"
        style={{
          width: "12px",
          height: "12px",
          top: "100px",
          left: "80%",
        }}
      /> */}
      <ImageStar18
        src="https://wliv.kr/img/onbording/will-star-1.svg"
        style={{
          width: "14px",
          height: "14px",
          top: "130px",
          left: "88%",
        }}
      />
      <ImageStar19
        src="https://wliv.kr/img/onbording/will-star-4.svg"
        style={{
          width: "27px",
          height: "27px",
          top: "125px",
          left: "70%",
        }}
      />
      {/* 별 끝 */}
    </BackgroundStarContainer>
  );
};

export default BackgroundSecond;

const firstKeyFrame = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const BackgroundStarContainer = styled.div`
  animation: ${firstKeyFrame} 4s ease-in;
`;

const ImageStar1 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 5s ease-in-out infinite;
`;

const ImageStar2 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 4s ease-in-out infinite;
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

const ImageStar9 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 7s ease-in-out infinite;
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

const ImageStar18 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 6s ease-in-out infinite;
`;

const ImageStar19 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 8s ease-in-out infinite;
`;

// 땅

const KeyFrameSection2_0 = keyframes`
`;

const ImageState = styled.img`
  position: absolute;
  animation: ${KeyFrameSection2_0} 75s ease-in;
`;
