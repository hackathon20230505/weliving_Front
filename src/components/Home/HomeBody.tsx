import { FunctionComponent } from "react";
import { useNavigate } from "react-router";
import styled, { keyframes } from "styled-components";
import CommonContentContainer from "../Common/CommonContentContainer";

type HomeBodyProps = {};

const HomeBody: FunctionComponent<HomeBodyProps> = () => {
  const navigate = useNavigate();

  const onClickSettingButtonHandler = () => {
    navigate("/changeuserinfo");
  };

  const onClickViewMyLetterButtonHandler = () => {
    navigate("/viewmyletter");
  };

  const onClickViewOtherLetterButtonHandler = () => {
    navigate("/viewotherletter");
  };

  return (
    <CommonContentContainer xPadding="5%" topSpacing={"1rem"}>
      <HomeLetterGroupContainer>
        {/* 별 시작 */}

        <ImageStar1
          src="https://wliv.kr/img/onbording/section2-5.svg"
          style={{
            width: "120%",
            height: "120%",
            top: "-476px",
            left: "-50%",
            rotate: "160deg",
          }}
        />
        <ImageStar1
          src="https://wliv.kr/img/onbording/section2-5.svg"
          style={{
            width: "100%",
            height: "100%",
            bottom: "-176px",
            right: "-50%",
            rotate: "30deg",
          }}
        />
        <ImageStar1
          src="https://wliv.kr/img/onbording/section2-5.svg"
          style={{
            width: "100%",
            height: "100%",
            bottom: "-6px",
            left: "-20%",
            rotate: "30deg",
          }}
        />
        <HomeLetterTitle> 일지</HomeLetterTitle>
        <HomeLetterViewGroupContainer>
          <HomeLetterViewButton onClick={onClickViewMyLetterButtonHandler}>
            <HomeLetterViewTitle>내 일지 보기</HomeLetterViewTitle>
            <HomeLetterViewImg src="https://wliv.kr/img/my-letter-img.svg" />
          </HomeLetterViewButton>
          <HomeLetterViewButton onClick={onClickViewOtherLetterButtonHandler}>
            <HomeLetterViewTitle>다른 일지 보기</HomeLetterViewTitle>
            <HomeLetterViewImg src="https://wliv.kr/img/other-letter-img.svg" />
          </HomeLetterViewButton>
        </HomeLetterViewGroupContainer>
      </HomeLetterGroupContainer>

      <HomeSettingContainer>
        <HomeLetterTitle>설정</HomeLetterTitle>
        <HomeSettingButton onClick={onClickSettingButtonHandler}>
          <HomeSettingButtonTitle>내 정보 변경</HomeSettingButtonTitle>
          <GoIcon src="https://wliv.kr/img/arrow-right-icon.svg" />
        </HomeSettingButton>
      </HomeSettingContainer>
    </CommonContentContainer>
  );
};

export default HomeBody;

const starKeyFrame = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const ImageStar1 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 3s ease-in;
  zindex: -1;
`;

const HomeLetterGroupContainer = styled.div`
  margin-bottom: 2rem;
`;

const HomeLetterTitle = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: var(--white);
  margin-bottom: 16px;
`;

const HomeLetterViewGroupContainer = styled.div`
  gap: 1rem;
  display: flex;
  justify-content: space-between;
`;

const HomeLetterViewButton = styled.button`
  width: 169px;
  height: 169px;

  background-color: var(--dark-pink-800);
  border-radius: 4px;

  position: relative;
`;

const HomeLetterViewTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: var(--white);

  position: absolute;
  top: 16px;
  left: 16px;
`;

const HomeLetterViewImg = styled.img`
  position: absolute;
  bottom: 13px;
  right: 10px;
`;

const HomeSettingContainer = styled.div``;

const HomeSettingButton = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  width: 100%;
  height: 48px;

  background-color: var(--dark-pink-800);
  border-radius: 4px;

  position: relative;
`;

const HomeSettingButtonTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: var(--white);
`;

const GoIcon = styled.img`
  position: absolute;
  right: 23px;
`;
