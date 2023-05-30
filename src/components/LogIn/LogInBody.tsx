import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
type LogInBodyProps = {};

const LogInBody: FunctionComponent<LogInBodyProps> = () => {
  return (
    <LogInBodyContainer>
      <LogInInputGroupContainer>
        <LogInInputLabel htmlFor="userEmail">이메일</LogInInputLabel>
        <LogInInput
          id="userEmail"
          type="text"
          placeholder="예) pmr7348.navaer.com"
        />
      </LogInInputGroupContainer>
      <LogInInputGroupContainer>
        <LogInInputLabel htmlFor="userPassword">비밀번호</LogInInputLabel>
        <LogInInput
          id="userPassword"
          type="password"
          placeholder="영문, 숫자, 특수문자 조합 8자리 이상"
        />
      </LogInInputGroupContainer>
      <LogInButton>로그인</LogInButton>
      <FindPWContainer>
        <FindPWDescription>비밀번호를 잊으셨나요?</FindPWDescription>
        <Link to="">비밀번호 찾기 {">"}</Link>
      </FindPWContainer>
    </LogInBodyContainer>
  );
};

export default LogInBody;

const LogInBodyContainer = styled.div`
  margin-top: 40px;
`;

const LogInInputGroupContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 24px;
`;

const LogInInputLabel = styled.label`
  font-size: 14px;
  font-weight: 700;
`;

const LogInInput = styled.input`
  padding: 13px 12px 14px 12px;
  border-bottom: 1px solid var(--strong-purple-800);

  ::placeholder {
    color: var(--gray-purple);
  }
`;

const LogInButton = styled.button`
  width: 100%;
  height: 56px;

  margin-bottom: 12px;

  background-color: var(--main-color);
  border-radius: 4px;

  font-weight: 700;
`;

const FindPWContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > a {
    color: var(--white);
    font-size: 14px;
    font-weight: 500;
  }
`;

const FindPWDescription = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #999999;
`;
