import { FunctionComponent } from "react";
import styled from "styled-components";
type LogInHeaderProps = {};

const LogInHeader: FunctionComponent<LogInHeaderProps> = () => {
  return (
    <LogInHeaderContainer>
      <GoBackButton>{"<"}</GoBackButton>
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
