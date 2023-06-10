import { FunctionComponent } from "react";
import styled, { keyframes } from "styled-components";
type BackgroundSecondProps = {};

// 투명도 조절 키프레임
const starKeyFrame = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const KeyFrameSection2_0 = keyframes`
`;

const KeyFrameSection2_1 = keyframes`
`;

const KeyFrameSection2_2 = keyframes`
`;

const KeyFrameSection2_3 = keyframes`
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
      <FireContainer>
        <FireLeft>
          <div className="main-fire" />
          <div className="particle-fire" />
        </FireLeft>
        <FireCenter>
          <div className="main-fire" />
          <div className="particle-fire" />
        </FireCenter>
        <FireRight>
          <div className="main-fire" />
          <div className="particle-fire" />
        </FireRight>
        <FireBottom>
          <div className="main-fire" />
        </FireBottom>
        <ImageFire
          src="https://wliv.kr/img/onbording/section2-3.svg"
          style={{
            width: "112px",
            height: "121px",
            bottom: "-25px ",
            left: "-27px",
            opacity: "100%",
            zIndex: "-1",
          }}
        />
      </FireContainer>

      <ImageState
        src="https://wliv.kr/img/onbording/section2-0.svg"
        style={{
          width: "150%",
          height: "100%",
          left: "-27%",
          bottom: "-40%",
        }}
      />
      <ImageTent
        src="https://wliv.kr/img/onbording/section2-1.svg"
        style={{
          width: "276px",
          height: "164px",
          bottom: "20%",
          left: "20px",
          opacity: "100%",
        }}
      />
      <ImageChair
        src="https://wliv.kr/img/onbording/section2-2.svg"
        style={{
          width: "110px",
          height: "79px",
          bottom: "14%",
          left: "23%",
          opacity: "100%",
        }}
      />

      {/* 별 시작 */}
      <ImageStar1
        src="https://wliv.kr/img/onbording/will-star-2.svg"
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
      <ImageStar3
        src="https://wliv.kr/img/onbording/will-star-2.svg"
        style={{
          width: "12px",
          height: "12px",
          top: "90px",
          left: "26%",
        }}
      />
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
      <ImageStar7
        src="https://wliv.kr/img/onbording/will-star-2.svg"
        style={{
          width: "22px",
          height: "22px",
          top: "110px",
          left: "42%",
        }}
      />
      <ImageStar8
        src="https://wliv.kr/img/onbording/will-star-2.svg"
        style={{
          width: "22px",
          height: "22px",
          top: "60px",
          left: "46%",
        }}
      />
      <ImageStar9
        src="https://wliv.kr/img/onbording/will-star-3.svg"
        style={{
          width: "9px",
          height: "11px",
          top: "40px",
          left: "55%",
        }}
      />
      <ImageStar10
        src="https://wliv.kr/img/onbording/will-star-2.svg"
        style={{
          width: "12px",
          height: "12px",
          top: "70px",
          left: "60%",
        }}
      />
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
      <ImageStar16
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
      />
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
  animation: ${firstKeyFrame} 1s ease-in;
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

const ImageState = styled.img`
  position: absolute;
  animation: ${KeyFrameSection2_0} 75s ease-in;
`;

const ImageTent = styled.img`
  position: absolute;
  animation: ${KeyFrameSection2_1} 95s ease-in;
`;

const ImageChair = styled.img`
  position: absolute;
  animation: ${KeyFrameSection2_2} 85s ease-in;
`;

const ImageFire = styled.img`
  position: absolute;
  animation: ${KeyFrameSection2_3} 85s ease-in;
`;

// 불 효과

const scaleUpDown = keyframes`
  0%,
  100% {
    transform: scaleY(1) scaleX(1);
  }
  50%,
  90% {
    transform: scaleY(1.1);
  }
  75% {
    transform: scaleY(0.95);
  }
  80% {
    transform: scaleX(0.95);
  }
`;

const shake = keyframes`
  0%,
  100% {
    transform: skewX(0) scale(1);
  }
  50% {
    transform: skewX(5deg) scale(0.9);
  }
`;

const particleUp = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    top: -100%;
    transform: scale(0.5);
  }
`;

const glow = keyframes`
  0%,
  100% {
    background-color: #FFA500;
  }
  50% {
    background-color: #DAA520;
  }
`;

const FireContainer = styled.div`
  position: absolute;
  top: calc(80% - 50px);
  left: calc(73% - 50px);
  width: 65px;
  height: 70px;
  background-color: transparent;
  margin-left: auto;
  margin-right: auto;
  z-index: 15;
`;

const FireCenter = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  animation: ${scaleUpDown} 3s ease-out infinite both;

  .main-fire {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      farthest-corner at 10px 0,
      #d43300 0%,
      #ef5a00 95%
    );
    transform: scaleX(0.8) rotate(45deg);
    border-radius: 0 40% 60% 40%;
    filter: drop-shadow(0 0 10px #d43322);
  }

  .particle-fire {
    position: absolute;
    top: 60%;
    left: 45%;
    width: 10px;
    height: 10px;
    background-color: #ef5a00;
    border-radius: 50%;
    filter: drop-shadow(0 0 10px #d43322);
    animation: ${particleUp} 2s ease-out infinite both;
  }
`;

const FireRight = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  animation: ${shake} 2s ease-out infinite both;

  .main-fire {
    position: absolute;
    top: 15%;
    right: -10%;
    width: 80%;
    height: 80%;
    background-color: #ef5a00;
    transform: scaleX(0.8) rotate(45deg);
    border-radius: 0 40% 60% 40%;
    filter: drop-shadow(0 0 10px #d43322);
  }

  .particle-fire {
    position: absolute;
    top: 45%;
    left: 50%;
    width: 15px;
    height: 15px;
    background-color: #ef5a00;
    transform: scaleX(0.8) rotate(45deg);
    border-radius: 50%;
    filter: drop-shadow(0 0 10px #d43322);
    animation: ${particleUp} 2s ease-out infinite both;
  }
`;

const FireLeft = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  animation: ${shake} 3s ease-out infinite both;

  .main-fire {
    position: absolute;
    top: 15%;
    left: -10%;
    width: 80%;
    height: 80%;
    background-color: #ef5a00;
    transform: scaleX(0.8) rotate(45deg);
    border-radius: 0 40% 60% 40%;
    filter: drop-shadow(0 0 10px #d43322);
  }

  .particle-fire {
    position: absolute;
    top: 10%;
    left: 20%;
    width: 10%;
    height: 10%;
    background-color: #ef5a00;
    border-radius: 50%;
    filter: drop-shadow(0 0 10px #d43322);
    animation: ${particleUp} 3s infinite ease-out both;
  }
`;

const FireBottom = styled.div`
  .main-fire {
    position: absolute;
    top: 30%;
    left: 20%;
    width: 75%;
    height: 75%;
    background-color: #ff7800;
    transform: scaleX(0.8) rotate(45deg);
    border-radius: 0 40% 100% 40%;
    filter: blur(10px);
    animation: ${glow} 2s ease-out infinite both;
  }
`;
