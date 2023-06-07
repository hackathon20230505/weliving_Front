import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
type ChangePWHeaderProps = {};

const ChangePWHeader: FunctionComponent<ChangePWHeaderProps> = () => {
  const navigate = useNavigate();

  const onClickGoBackButtonHandler = () => {
    navigate("/logIn");
  };

  return (
    <ChangePWHeaderContainer>
      <GoBackButton onClick={onClickGoBackButtonHandler}>
        <img src="https://wliv.kr/img/arrow-left-icon.svg" alt="뒤로 가기" />
      </GoBackButton>
      <FindPWTitle>비밀번호 변경</FindPWTitle>
    </ChangePWHeaderContainer>
  );
};

export default ChangePWHeader;

const ChangePWHeaderContainer = styled.header`
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

const FindPWTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;
