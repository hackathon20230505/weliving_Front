import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CommonHeaderContainer from "../Common/CommonHeaderContainer";

type LogInHeaderProps = {};

const LogInHeader: FunctionComponent<LogInHeaderProps> = () => {
  const navigate = useNavigate();

  const onClickGoBackButtonHandler = () => {
    navigate("/");
  };

  return (
    <CommonHeaderContainer height="56px" xMargin="5%">
      <GoBackButton onClick={onClickGoBackButtonHandler}>
        <img src="https://wliv.kr/img/arrow-left-icon.svg" alt="뒤로 가기" />
      </GoBackButton>
      <LogInTitle>로그인</LogInTitle>
    </CommonHeaderContainer>
  );
};

export default LogInHeader;

const GoBackButton = styled.button`
  position: absolute;
  padding: 4px 1rem 4px 0;
  left: 0;
`;

const LogInTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;
