import { ChangeEvent, FunctionComponent } from "react";
import styled from "styled-components";
import {
  isValidUserBirthFunc,
  isValidUserEmailFunc,
  isValidUserPasswordConfirmFunc,
  isValidUserPasswordFunc,
} from "../../utils/isValid/isValidUserData";
import Modal from "../Common/BottomSheet";
import SignUpAgreeModalContent from "./SignUpAgreeModalContent";
import { useRecoilState } from "recoil";
import { isOpenBottomSheetState } from "./atoms/IsOpenBottomSheet";
import {
  IIsValidUserInfoStateTypes,
  IUserInfoStateTypes,
  UserInfoState,
  isValidUserInfoState,
} from "./atoms/UserInfoAtoms";
type SignUpBodyProps = {};

const SignUpBody: FunctionComponent<SignUpBodyProps> = () => {
  /** 사용자 데이터 */
  const [userInfo, setUserInfo] =
    useRecoilState<IUserInfoStateTypes>(UserInfoState);

  /** 사용자 데이터 유효 여부 */
  const [isValidUserInfo, setIsValidUserInfo] =
    useRecoilState<IIsValidUserInfoStateTypes>(isValidUserInfoState);

  /** modal  */
  const [isOpen, setIsOpen] = useRecoilState<boolean>(isOpenBottomSheetState);

  /** user email input 값 설정 */
  const onChangeUserEmailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value === null) return;

    setUserInfo({
      ...userInfo,
      userEmail: value,
    });

    if (isValidUserEmailFunc(value) === true) {
      setIsValidUserInfo({ ...isValidUserInfo, isValidUserEmail: true });
    } else {
      setIsValidUserInfo({ ...isValidUserInfo, isValidUserEmail: false });
    }
  };

  /** user password input 값 설정 */
  const onChangeUserPasswordHandler = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;
    if (value === null) return;

    setUserInfo({
      ...userInfo,
      userPassword: value,
    });

    if (isValidUserPasswordFunc(value) === true) {
      setIsValidUserInfo({ ...isValidUserInfo, isValidUserPassword: true });
    } else {
      setIsValidUserInfo({ ...isValidUserInfo, isValidUserPassword: false });
    }
  };

  /** user password confirm input 값 설정 */
  const onChangeUserPasswordConfirmHandler = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;
    if (value === null) return;
    setUserInfo({
      ...userInfo,
      userPasswordConfirm: value,
    });

    if (isValidUserPasswordConfirmFunc(userInfo.userPassword, value) === true) {
      setIsValidUserInfo({
        ...isValidUserInfo,
        isValidUserPasswordConfirm: true,
      });
    } else {
      setIsValidUserInfo({
        ...isValidUserInfo,
        isValidUserPasswordConfirm: false,
      });
    }
  };

  /** user password input 값 설정 */
  const onChangeUserConfirmHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value === null) return;
    setUserInfo({
      ...userInfo,
      userBirth: value,
    });

    if (isValidUserBirthFunc(value) === true) {
      setIsValidUserInfo({ ...isValidUserInfo, isValidUserBirth: true });
    } else {
      setIsValidUserInfo({ ...isValidUserInfo, isValidUserBirth: false });
    }
  };

  const onClickNextButtonHandler = () => {
    setIsOpen(true);
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
          placeholder="예) pmr7348.naver.com"
          value={userInfo.userEmail}
          onChange={onChangeUserEmailHandler}
        />
      </SignUpLabelInputContainer>
      {/* 이메일 유효할 시 비밀번호 input 렌더링 */}
      {isValidUserInfo.isValidUserEmail && (
        <>
          <SignUpLabelInputContainer>
            <SignUpLabel htmlFor="userPassword">비밀번호</SignUpLabel>
            <SignUpInput
              id="userPassword"
              type="password"
              placeholder="영문, 숫자, 특수문자 조합 8자리 이상"
              value={userInfo.userPassword}
              onChange={onChangeUserPasswordHandler}
            />
          </SignUpLabelInputContainer>
          <SignUpLabelInputContainer>
            <SignUpInput
              type="password"
              placeholder="비밀번호 재입력"
              value={userInfo.userPasswordConfirm}
              onChange={onChangeUserPasswordConfirmHandler}
            />
          </SignUpLabelInputContainer>
        </>
      )}
      {isValidUserInfo.isValidUserEmail &&
        isValidUserInfo.isValidUserPassword &&
        isValidUserInfo.isValidUserPasswordConfirm && (
          <SignUpLabelInputContainer>
            <SignUpLabel htmlFor="userBirth">생년월일</SignUpLabel>
            <SignUpInput
              id="userBirth"
              type="text"
              placeholder="YYMMDD"
              maxLength={6}
              value={userInfo.userBirth}
              onChange={onChangeUserConfirmHandler}
            />
          </SignUpLabelInputContainer>
        )}

      <NextButton
        isValid={
          isValidUserInfo.isValidUserEmail &&
          isValidUserInfo.isValidUserPassword &&
          isValidUserInfo.isValidUserPasswordConfirm &&
          isValidUserInfo.isValidUserBirth
        }
        disabled={
          !(
            isValidUserInfo.isValidUserEmail &&
            isValidUserInfo.isValidUserPassword &&
            isValidUserInfo.isValidUserPasswordConfirm &&
            isValidUserInfo.isValidUserBirth
          )
            ? true
            : false
        }
        onClick={onClickNextButtonHandler}
      >
        다음
      </NextButton>
      <Modal
        setIsOpen={setIsOpen}
        closable={true}
        completable={false}
        visible={isOpen}
        children={<SignUpAgreeModalContent />}
      />
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
