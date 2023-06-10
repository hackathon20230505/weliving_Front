import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CommonHeaderContainer from "../Common/CommonHeaderContainer";

type ChangePWHeaderProps = {};

const ChangePWHeader: FunctionComponent<ChangePWHeaderProps> = () => {
  const navigate = useNavigate();

  const onClickGoBackButtonHandler = () => {
    navigate("/logIn");
  };

  return (
    <CommonHeaderContainer height="56px" xMargin="5%">
      <GoBackButton onClick={onClickGoBackButtonHandler}>
        <img src="https://wliv.kr/img/arrow-left-icon.svg" alt="뒤로 가기" />
      </GoBackButton>
      <FindPWTitle>비밀번호 변경</FindPWTitle>
    </CommonHeaderContainer>
  );
};

export default ChangePWHeader;

// const ChangePWHeaderContainer = styled.header`
//   width: 100%;
//   height: 56px;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   position: relative;
// `;

export const GoBackButton = styled.button`
  position: absolute;
  left: 0;
`;

export const FindPWTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;
