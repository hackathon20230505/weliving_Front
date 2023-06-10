import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CommonHeaderContainer from "../Common/CommonHeaderContainer";

const KakaoSignUpHeader: FunctionComponent = () => {
  const navigate = useNavigate();

  const onClickGoBackButtonHandler = () => {
    navigate("/");
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
  left: 0;
`;

const KakaoSignUpTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;
