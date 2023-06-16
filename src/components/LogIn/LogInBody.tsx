import { ChangeEvent, FunctionComponent, useState } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { onSignIn } from "../../apis/users/signIn";
import axios, { AxiosError } from "axios";
import {
  isValidUserEmailFunc,
  isValidUserPasswordFunc,
} from "../../utils/isValid/isValidUserData";
import CommonContentContainer from "../Common/CommonContentContainer";
import { checkMemory } from "../../apis/users/checkMemory";
import { checkLetter } from "../../apis/users/checkLetter";

type LogInBodyProps = {};

const LogInBody: FunctionComponent<LogInBodyProps> = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const [isValidUserEmail, setIsValidUserEmail] = useState<boolean>(true);
  const [isValidUserPassword, setIsValidUserPassword] = useState<boolean>(true);

  /** user email input 값 설정 */
  const onChangeUserEmailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const currValue = event.target.value;

    if (currValue === null) return;

    setUserEmail(currValue);

    if (isValidUserEmailFunc(currValue)) {
      setIsValidUserEmail(true);
    } else {
      setIsValidUserEmail(false);
    }
  };

  /** user password input 값 설정 */
  const onChangeUserPasswordHandler = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const currValue = event.target.value;
    if (currValue === null) return;
    setUserPassword(currValue);

    if (isValidUserPasswordFunc(currValue)) {
      setIsValidUserPassword(true);
    } else {
      setIsValidUserPassword(false);
    }
  };

  const onClickLogInButtonHandler = async () => {
    try {
      const loginProps = {
        username: userEmail,
        password: userPassword,
      };

      const result = await onSignIn(loginProps);

      // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정

      if (result) {
        localStorage.setItem("accessToken", result.data.accessToken);
        localStorage.setItem("refreshToken", result.data.refreshToken);

        alert("로그인되었습니다.");

        // 해당 유저가 유서를 작성하지 않았을 시 유서 작성 페이지로 이동

        // 해당 유저가 추억카드를 작성하지 않았을 시 추억카드 작성 페이지로 이동
        const isMemory = await checkMemory();
        const isLetter = await checkLetter();

        console.log(isMemory);

        if (!isMemory || !isLetter) {
          window.location.href = "/maincontentfirst";
        } else {
          window.location.href = "/";
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        console.log(axiosError);
      }
    }
  };

  const onSubmitFormHandler = async (e) => {
    e.preventDefault();
    try {
      const loginProps = {
        username: userEmail,
        password: userPassword,
      };

      const result = await onSignIn(loginProps);

      // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정

      if (result) {
        localStorage.setItem("accessToken", result.data.accessToken);
        localStorage.setItem("refreshToken", result.data.refreshToken);

        alert("로그인되었습니다.");

        // 해당 유저가 유서를 작성하지 않았을 시 유서 작성 페이지로 이동

        // 해당 유저가 추억카드를 작성하지 않았을 시 추억카드 작성 페이지로 이동
        const isMemory = await checkMemory();
        const isLetter = await checkLetter();

        console.log(isMemory);

        if (!isMemory || !isLetter) {
          window.location.href = "/maincontentfirst";
        } else {
          window.location.href = "/";
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        console.log(axiosError);
      }
    }
  };

  return (
    <CommonContentContainer xPadding="5%">
      <PaddingTop></PaddingTop>
      <form onSubmit={onSubmitFormHandler}>
        <LogInInputGroupContainer>
          <LogInInputLabel htmlFor="userEmail">이메일</LogInInputLabel>
          <LogInInput
            id="userEmail"
            type="text"
            placeholder="예) example@welldie.com"
            isValidUserEmail={isValidUserEmail}
            value={userEmail}
            onChange={onChangeUserEmailHandler}
          />
          {!isValidUserEmail && (
            <NotValidText>이메일 주소를 확인하세요.</NotValidText>
          )}
        </LogInInputGroupContainer>
        <LogInInputGroupContainer>
          <LogInInputLabel htmlFor="userPassword">비밀번호</LogInInputLabel>
          <LogInInput
            id="userPassword"
            type="password"
            placeholder="영문, 숫자, 특수문자 조합 8자리 이상"
            isValidUserPassword={isValidUserPassword}
            value={userPassword}
            onChange={onChangeUserPasswordHandler}
          />
          {!isValidUserPassword && (
            <NotValidText>
              계정이 존재하지 않거나 비밀번호가 옳바르지 않습니다.
            </NotValidText>
          )}
        </LogInInputGroupContainer>
        <LogInButton type={"button"} onClick={onClickLogInButtonHandler}>
          로그인
        </LogInButton>
      </form>
      <FindPWContainer>
        {/* <FindPWDescription>비밀번호를 잊으셨나요?</FindPWDescription> */}
        {/* <Link to="/findpw/1">비밀번호 찾기 {">"}</Link> */}
      </FindPWContainer>
    </CommonContentContainer>
  );
};

export default LogInBody;

const PaddingTop = styled.div`
  padding-top: 40px;
`;

const LogInInputGroupContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 24px;
`;

const LogInInputLabel = styled.label`
  font-size: 14px;
  font-weight: 700;
  padding-bottom: 4px;
`;

interface ILogInInputTypes {
  isValidUserEmail?: boolean;
  isValidUserPassword?: boolean;
}

const LogInInput = styled.input<ILogInInputTypes>`
  padding: 15px 12px 16px 12px;

  font-size: 14px;

  border-bottom: ${({ isValidUserEmail, isValidUserPassword }) =>
    isValidUserEmail
      ? "1px solid var(--strong-purple-800)"
      : isValidUserPassword
      ? "1px solid var(--strong-purple-800)"
      : "1px solid #F31919"};
  border-radius: 0;

  ::placeholder {
    color: var(--gray-purple);
  }
  &.customMargin {
    margin-top: -8px;
  }
  font-size: 14px;
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

// const FindPWDescription = styled.span`
//   font-size: 14px;
//   font-weight: 400;
//   color: #999999;
// `;

const NotValidText = styled.p`
  margin-top: 6px;

  font-weight: 400;
  font-size: 12px;
  color: #f31919;
`;
