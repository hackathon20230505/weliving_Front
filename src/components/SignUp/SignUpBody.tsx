import { ChangeEvent, FunctionComponent, useState } from "react";
import styled from "styled-components";
import {
  isValidUserBirthFunc,
  isValidUserEmailFunc,
  isValidUserPasswordConfirmFunc,
  isValidUserPasswordFunc,
} from "../../utils/isValid/isValidUserData";
type SignUpBodyProps = {};

const SignUpBody: FunctionComponent<SignUpBodyProps> = () => {
  /** 사용자 데이터 */
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState<string>("");
  const [userBirth, setUserBirth] = useState<string>("");

  /** 사용자 데이터 유효 여부 */
  const [isValidUserEmail, setIsValidUserEmail] = useState<boolean>(false);
  const [isValidUserPassword, setIsValidUserPassword] =
    useState<boolean>(false);
  const [isValidUserPasswordConfirm, setIsValidUserPasswordConfirm] =
    useState<boolean>(false);
  const [isValidUserBirth, setIsValidUserBirth] = useState<boolean>(false);

  /** user email input 값 설정 */
  const onChangeUserEmailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const currValue = event.target.value;

    if (currValue === null) return;

    setUserEmail(currValue);

    if (isValidUserEmailFunc(currValue) === true) {
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

    if (isValidUserPasswordFunc(currValue) === true) {
      setIsValidUserPassword(true);
    } else {
      setIsValidUserPassword(false);
    }
  };

  /** user password confirm input 값 설정 */
  const onChangeUserPasswordConfirmHandler = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const currValue = event.target.value;
    if (currValue === null) return;
    setUserPasswordConfirm(currValue);

    if (isValidUserPasswordConfirmFunc(userPassword, currValue) === true) {
      setIsValidUserPasswordConfirm(true);
    } else {
      setIsValidUserPasswordConfirm(false);
    }
  };

  /** user password input 값 설정 */
  const onChangeUserConfirmHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const currValue = event.target.value;
    if (currValue === null) return;
    setUserBirth(currValue);

    console.log(isValidUserBirthFunc(currValue) === true);

    if (isValidUserBirthFunc(currValue) === true) {
      setIsValidUserBirth(true);
    } else {
      setIsValidUserBirth(false);
    }
  };

  return (
    <SignUpBodyContainer>
      <SignUpTitle>
        회원가입에 사용할 <br /> 이메일을 입력해주세요
      </SignUpTitle>
      <SignUpLabelInputContainer>
        <SignUpLabel htmlFor="userEmail">이메일</SignUpLabel>
        <SignUpInput
          id="userEmail"
          type="text"
          placeholder="예) pmr7348.navaer.com"
          value={userEmail}
          onChange={onChangeUserEmailHandler}
        />
      </SignUpLabelInputContainer>
      {/* 이메일 유효할 시 비밀번호 input 렌더링 */}
      {isValidUserEmail && (
        <>
          <SignUpLabelInputContainer>
            <SignUpLabel htmlFor="userPassword">비밀번호</SignUpLabel>
            <SignUpInput
              id="userPassword"
              type="password"
              placeholder="영문, 숫자, 특수문자 조합 8자리 이상"
              value={userPassword}
              onChange={onChangeUserPasswordHandler}
            />
          </SignUpLabelInputContainer>
          <SignUpLabelInputContainer>
            <SignUpInput
              type="password"
              placeholder="비밀번호 재입력"
              value={userPasswordConfirm}
              onChange={onChangeUserPasswordConfirmHandler}
            />
          </SignUpLabelInputContainer>
        </>
      )}
      {isValidUserEmail &&
        isValidUserPassword &&
        isValidUserPasswordConfirm && (
          <SignUpLabelInputContainer>
            <SignUpLabel htmlFor="userBirth">생년월일</SignUpLabel>
            <SignUpInput
              id="userBirth"
              type="text"
              placeholder="YYMMDD"
              maxLength={6}
              value={userBirth}
              onChange={onChangeUserConfirmHandler}
            />
          </SignUpLabelInputContainer>
        )}

      <NextButton
        isValid={
          isValidUserEmail &&
          isValidUserPassword &&
          isValidUserPasswordConfirm &&
          isValidUserBirth
        }
        disabled={
          !(
            isValidUserEmail &&
            isValidUserPassword &&
            isValidUserPasswordConfirm &&
            isValidUserBirth
          )
            ? true
            : false
        }
      >
        다음
      </NextButton>
    </SignUpBodyContainer>
  );
};

export default SignUpBody;

const SignUpBodyContainer = styled.div`
  width: 100%;
`;

const SignUpTitle = styled.h1`
  margin: 24px 0;

  font-weight: 700;
  font-size: 24px;
`;

const SignUpLabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 24px;
`;

const SignUpLabel = styled.label`
  font-size: 14px;
  font-weight: 700;
`;

const SignUpInput = styled.input`
  padding: 13px 12px 14px 12px;

  border-bottom: 1px solid var(--strong-purple-800);
  border-radius: 0px;

  ::placeholder {
    color: var(--gray-purple);
  }
`;

interface INextButtonTypes {
  isValid: boolean;
}

const NextButton = styled.button<INextButtonTypes>`
  width: 100%;
  height: 56px;

  background-color: ${({ isValid }) =>
    isValid ? "var(--main-color)" : "var(--dull-pink-900)"};
  border-radius: 4px;

  font-weight: 700;
  color: ${({ isValid }) => (isValid ? "var(--white)" : "var(--gray-purple)")};

  position: absolute;
  width: 90%;
  bottom: 34px;
`;
