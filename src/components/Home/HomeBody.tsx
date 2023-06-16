import { FunctionComponent } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
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

        <HomeLetterTitle> 일지</HomeLetterTitle>
        <HomeLetterViewGroupContainer>
          <HomeLetterViewButton onClick={onClickViewMyLetterButtonHandler}>
            <HomeLetterViewTitle>내 일지 보기</HomeLetterViewTitle>
            <HomeLetterViewImg src="https://welldie.com/img/my-letter-img.svg" />
          </HomeLetterViewButton>
          <HomeLetterViewButton onClick={onClickViewOtherLetterButtonHandler}>
            <HomeLetterViewTitle>다른 일지 보기</HomeLetterViewTitle>
            <HomeLetterViewImg src="https://welldie.com/img/other-letter-img.svg" />
          </HomeLetterViewButton>
        </HomeLetterViewGroupContainer>
      </HomeLetterGroupContainer>

      <HomeSettingContainer>
        <HomeLetterTitle>설정</HomeLetterTitle>
        <HomeSettingButton onClick={onClickSettingButtonHandler}>
          <HomeSettingButtonTitle>내 정보 변경</HomeSettingButtonTitle>
          <GoIcon src="https://welldie.com/img/arrow-right-icon.svg" />
        </HomeSettingButton>
      </HomeSettingContainer>
    </CommonContentContainer>
  );
};

export default HomeBody;

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
  gap: 0rem;
  display: flex;
  justify-content: space-between;
`;

const HomeLetterViewButton = styled.button`
  width: calc(100% / 2 - 6px);
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
