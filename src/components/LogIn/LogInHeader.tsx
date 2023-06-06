import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
type LogInHeaderProps = {};

const LogInHeader: FunctionComponent<LogInHeaderProps> = () => {
  const navigate = useNavigate();

  const onClickGoBackButtonHandler = () => {
    navigate("/");
  };

  return (
    <LogInHeaderContainer>
      <GoBackButton onClick={onClickGoBackButtonHandler}>
        <img src="https://wliv.kr/img/arrow-left-icon.svg" alt="뒤로 가기" />
      </GoBackButton>
      <LogInTitle>로그인</LogInTitle>
    </LogInHeaderContainer>
  );
};

export default LogInHeader;

const LogInHeaderContainer = styled.header`
  height: 56px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoBackButton = styled.button`
  position: absolute;
  left: 0px;
`;

const LogInTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;
