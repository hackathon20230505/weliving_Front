import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { isValidUserPasswordFunc } from "../../utils/isValid/isValidUserData";
// import CheckBox from "../Common/CheckBox";
import CommonContentContainer from "../Common/CommonContentContainer";
import { useGetUserEmail } from "../../apis/users/getUserEmail";
import LoadingComponent from "../Common/LoadingComponent";

type ChangeUserInfoBodyProps = {};

const ChangeUserInfoBody: FunctionComponent<ChangeUserInfoBodyProps> = () => {

  // const userInfo = {
  //   email: "hackathon@naver.com",
  //   password: "123456a*",
  // };

  //   사용자 데이터
  const [userPassword, setUserPassword] = useState<string>("");
  const [userNewPassword, setUserNewPassword] = useState<string>("");
  const [userNewPasswordConfirm, setUserNewPasswordConfirm] =
    useState<string>("");
  // const baseNumber = "010";
  // const [userPhone, setUserPhone] = useState<string>("");

  //   데이터 유효성 검사
  // const [isValidUserNewPassword, setIsValidUserNewPassword] =
  //   useState<boolean>(false);
  // const [isValidUserNewPasswordConfirm, setIsValidUserNewPasswordConfirm] =
  //   useState<boolean>(false);
  //   데이터 유효성 검사
  const [, setIsValidUserNewPassword] = useState<boolean>(false);
  const [, setIsValidUserNewPasswordConfirm] = useState<boolean>(false);

  // 문자 알림 동의
  // const [isAlarmAgreed, setIsAlarmAgreed] = useState<boolean>(false);

  const onChangeUserPasswordHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;

    setUserPassword(value);
  };

  const onChangeUserNewPasswordHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;
    setUserNewPassword(value);
    if (isValidUserPasswordFunc(value)) {
      setIsValidUserNewPassword(true);
    } else {
      setIsValidUserNewPassword(false);
    }
  };

  const onChangeUserNewPasswordConfirmHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;

    setUserNewPasswordConfirm(value);

    if (userNewPassword === value) {
      setIsValidUserNewPasswordConfirm(true);
    } else {
      setIsValidUserNewPasswordConfirm(false);
    }
  };

  // const onChangeUserPhoneHandler = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  // ) => {
  //   const { value } = event.target;

  //   // 숫자만 입력
  //   if (isNaN(Number(value))) return;
  //   setUserPhone(value);
  // };

  // const onClickIsAlarmAgreedHandler = (
  //   event: React.MouseEvent<HTMLDivElement>,
  // ) => {
  //   event.preventDefault();
  //   setIsAlarmAgreed((prev) => !prev);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("accessToken");
  //   localStorage.removeItem("refreshToken");
  //   localStorage.removeItem("kakaoAccessToken");
  //   localStorage.removeItem("kakaoRefreshToken");
  //   window.location.href = "/";
  // };

  // const onClickNextButtonHandler = () => {};

  const { data, isLoading } = useGetUserEmail();

  if (isLoading) return <LoadingComponent />;

  return (
    <CommonContentContainer xPadding="5%">
      <PaddingTop></PaddingTop>
      <SignUpLabelInputContainer>
        <SignUpLabel htmlFor="userEmail">이메일</SignUpLabel>
        <SignUpInput
          id="userEmail"
          type="text"
          placeholder="예) example@wliv.kr"
          value={data}
          readOnly
        />
      </SignUpLabelInputContainer>
      <SignUpLabelInputContainer>
        <SignUpLabel htmlFor="userPassword">현재 비밀번호</SignUpLabel>
        <SignUpInput
          id="userPassword"
          type="password"
          placeholder="현재 비밀번호 입력"
          value={userPassword}
          onChange={onChangeUserPasswordHandler}
        />
        <ChangeButton>{userPassword === "" ? "변경" : "저장"}</ChangeButton>
      </SignUpLabelInputContainer>
      <SignUpLabelInputContainer>
        <SignUpLabel htmlFor="userNewPassword">
          새로운 비밀번호 입력
        </SignUpLabel>
        <SignUpInput
          id="userNewPassword"
          type="password"
          placeholder="영문, 숫자, 특수문자 조합 8자리 이상"
          value={userNewPassword}
          onChange={onChangeUserNewPasswordHandler}
        />
      </SignUpLabelInputContainer>
      <SignUpLabelInputContainer>
        <SignUpInput
          type="password"
          placeholder="새로운 비밀번호 재입력"
          value={userNewPasswordConfirm}
          onChange={onChangeUserNewPasswordConfirmHandler}
          className="customMargin"
        />
      </SignUpLabelInputContainer>
      {/* <SignUpLabelInputContainer>
        <SignUpLabel htmlFor="userPhone">전화번호</SignUpLabel>
        <SignUpInput
          style={{ paddingLeft: "50px" }}
          id="userPhone"
          type="text"
          placeholder="전화번호 입력"
          value={userPhone}
          onChange={onChangeUserPhoneHandler}
          maxLength={8}
        />
        <BaseNumber>{baseNumber}</BaseNumber>
      </SignUpLabelInputContainer> */}
      {/* <SignUpCheckBoxContainer onClick={onClickIsAlarmAgreedHandler}>
        <CheckBox isChecked={isAlarmAgreed} />
        <SignUpCheckBoxText>문자 알림 동의</SignUpCheckBoxText>
      </SignUpCheckBoxContainer> */}
      {/* <LogoutButton onClick={logoutHandler}>로그아웃</LogoutButton> */}
      {/*<NextButton*/}
      {/*  isValid={isValidUserNewPassword && isValidUserNewPasswordConfirm}*/}
      {/*  disabled={!(isValidUserNewPassword && isValidUserNewPasswordConfirm)}*/}
      {/*  // onClick={onClickNextButtonHandler}*/}
      {/*>*/}
      {/*  다음*/}
      {/*</NextButton>*/}
    </CommonContentContainer>
  );
};

export default ChangeUserInfoBody;

const PaddingTop = styled.div`
  padding-top: 40px;
`;

const SignUpLabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 24px;

  position: relative;
`;

const SignUpLabel = styled.label`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 4px;

  &.customMargin {
    margin-top: -8px;
  }
`;

const SignUpInput = styled.input`
  padding: 15px 12px 16px 12px;

  border-bottom: 1px solid var(--strong-purple-800);
  border-radius: 0;
  font-size: 14px;

  ::placeholder {
    color: var(--gray-purple);
  }
  font-size: 14px;
`;

const ChangeButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 10px;
  font-size: 14px;
  width: 49px;
  height: 32px;
  border: 1px solid var(--white);
  border-radius: 200px;
`;

// interface INextButtonTypes {
//   isValid: boolean;
// }

// const NextButton = styled.button<INextButtonTypes>`
//   width: 100%;
//   margin-top: 4rem;
//   margin-bottom: 2rem;
//   height: 56px;
//
//   background-color: ${({ isValid }) =>
//     isValid ? "var(--main-color)" : "var(--dull-pink-900)"};
//   border-radius: 4px;
//
//   font-weight: 700;
//   color: ${({ isValid }) => (isValid ? "var(--white)" : "var(--gray-purple)")};
//
//   bottom: 34px;
// `;

// const BaseNumber = styled.p`
//   position: absolute;
//   font-size: 14px;
//   color: #867388;
//   left: 12px;
//   bottom: 17px;
// `;

// const SignUpCheckBoxContainer = styled.div`
//   display: flex;
//   margin-top: 24px;
// `;

// const SignUpCheckBoxText = styled.p`
//   margin-left: 8px;
//   font-size: 14px;
//   padding-top: 1px;
// `;

// const LogoutButton = styled.div`
//   margin-top: 3.5rem;
//   margin-bottom: 2rem;
//   border: 1px solid #ff4e78;
//   background-color: #db0fdb;
//   text-align: center;
//   padding: 0.75rem;
//   border-radius: 4px;
//   color: white;
// `;
