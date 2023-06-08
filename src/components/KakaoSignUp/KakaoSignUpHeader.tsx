import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CommonHeaderContainer from "../Common/CommonHeaderContainer";
type KakaoSignUpHeaderProps = {};

const KakaoSignUpHeader: FunctionComponent<KakaoSignUpHeaderProps> = () => {
  const navigate = useNavigate();

  const onClickGoBackButtonHandler = () => {
    navigate("/logIn");
  };

  return (
    <CommonHeaderContainer height="56px" xMargin="5%">
      <GoBackButton onClick={onClickGoBackButtonHandler}>
        <img src="https://wliv.kr/img/arrow-left-icon.svg" alt="뒤로 가기" />
      </GoBackButton>
      <KakaoSignUpTitle>회원가입</KakaoSignUpTitle>
    </CommonHeaderContainer>
  );
};

export default KakaoSignUpHeader;

const KakaoSignUpHeaderContainer = styled.header`
  width: 100%;
  height: 56px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const GoBackButton = styled.button`
  position: absolute;
  left: 0px;
`;

const KakaoSignUpTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;
