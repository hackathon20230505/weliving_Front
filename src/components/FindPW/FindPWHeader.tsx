import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CommonHeaderContainer from "../Common/CommonHeaderContainer";

type FindPWHeaderProps = {};

const FindPWHeader: FunctionComponent<FindPWHeaderProps> = () => {
  const navigate = useNavigate();

  const onClickGoBackButtonHandler = () => {
    navigate("/logIn");
  };

  return (
    <CommonHeaderContainer height="56px" xMargin="5%">
      <GoBackButton onClick={onClickGoBackButtonHandler}>
        <img src="https://wliv.kr/img/arrow-left-icon.svg" alt="뒤로 가기" />
      </GoBackButton>
      <FindPWTitle>비밀번호 찾기</FindPWTitle>
    </CommonHeaderContainer>
  );
};

export default FindPWHeader;

const GoBackButton = styled.button`
  position: absolute;
  left: 0;
`;

const FindPWTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;
