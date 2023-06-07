import { ChangeEvent, FunctionComponent, useState } from "react";
import styled from "styled-components";
import { isValidUserPasswordFunc } from "../../utils/isValid/isValidUserData";
type ChangePWBodyProps = {};

const ChangePWBody: FunctionComponent<ChangePWBodyProps> = () => {
  const [userPassword, setUserPassword] = useState<string>("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState<string>("");

  const [isValidUserPassword, setIsValidUserPassword] =
    useState<boolean>(false);
  const [isValiduserPasswordConfirm, setIsValidUserPasswordConfirm] =
    useState<boolean>(false);

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

    if (userPassword === currValue) {
      setIsValidUserPasswordConfirm(true);
    } else {
      setIsValidUserPasswordConfirm(false);
    }
  };

  const onClickNextButtonHandler = () => {};

  return (
    <ChangePWBodyContainer>
      <LogInInputGroupContainer>
        <LogInInputLabel htmlFor="userPassword">비밀번호</LogInInputLabel>
        <LogInInput
          id="userPassword"
          type="password"
          placeholder="새로운 비밀번호"
          isValidUserPassword={isValidUserPassword}
          value={userPassword}
          onChange={onChangeUserPasswordHandler}
        />
        {isValidUserPassword === false && (
          <NotValidText>
            비밀번호를 최소 8자 이상, 특수문자 1개를 포함해주세요.
          </NotValidText>
        )}
      </LogInInputGroupContainer>
      <LogInInputGroupContainer>
        <LogInInputLabel htmlFor="userPassword">비밀번호 확인</LogInInputLabel>
        <LogInInput
          id="userPassword"
          type="password"
          placeholder="새로운 비밀번호 재입력"
          isValidUserPassword={isValidUserPassword}
          value={userPasswordConfirm}
          onChange={onChangeUserPasswordConfirmHandler}
        />
        {isValiduserPasswordConfirm === false && (
          <NotValidText>비밀번호가 일치하지 않아요.</NotValidText>
        )}
      </LogInInputGroupContainer>
      <NextButton
        isValid={isValidUserPassword && isValiduserPasswordConfirm}
        disabled={
          !(isValidUserPassword && isValiduserPasswordConfirm) ? true : false
        }
        onClick={onClickNextButtonHandler}
      >
        변경하기
      </NextButton>
    </ChangePWBodyContainer>
  );
};

export default ChangePWBody;

const ChangePWBodyContainer = styled.div``;

const LogInInputGroupContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 24px;
`;

const LogInInputLabel = styled.label`
  font-size: 14px;
  font-weight: 700;
`;

interface ILogInInputTypes {
  isValidUserEmail?: boolean;
  isValidUserPassword?: boolean;
}

const LogInInput = styled.input<ILogInInputTypes>`
  padding: 13px 12px 14px 12px;

  border-bottom: ${({ isValidUserEmail, isValidUserPassword }) =>
    isValidUserEmail
      ? "1px solid var(--strong-purple-800)"
      : isValidUserPassword
      ? "1px solid var(--strong-purple-800)"
      : "1px solid #F31919"};
  border-radius: 0px;

  ::placeholder {
    color: var(--gray-purple);
  }
`;

const NotValidText = styled.p`
  margin-top: 6px;

  font-weight: 400;
  font-size: 12px;
  color: #f31919;
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
`;
