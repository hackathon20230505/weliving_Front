import { FunctionComponent } from "react";
import styled from "styled-components";
import CommonHeaderContainer from "../Common/CommonHeaderContainer";

const KakaoSignUpHeader: FunctionComponent = () => {
  const onClickGoBackButtonHandler = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("kakaoAccessToken");
    localStorage.removeItem("kakaoRefreshToken");
    window.location.href = "/";
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

const GoBackButton = styled.button`
  position: absolute;
  padding: 4px 1rem 4px 0;
  left: 0;
`;

const KakaoSignUpTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;
