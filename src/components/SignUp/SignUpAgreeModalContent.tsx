import { FunctionComponent } from "react";
import styled from "styled-components";
import CheckBox from "../Common/CheckBox";
import { useRecoilState } from "recoil";
import {
  isCheckedState,
  IIsCheckedStateTypes,
} from "./atoms/TermsOfServiceAtoms";
import { onSignup } from "../../apis/users/signup";
import { IUserInfoStateTypes, UserInfoState } from "./atoms/UserInfoAtoms";
import { useNavigate } from "react-router-dom";
import { onSignIn } from "../../apis/users/signIn";

type SignUpAgreeModalContentProps = {
  policyViewHandler?: () => void;
  termsViewHandler?: () => void;
};

const SignUpAgreeModalContent: FunctionComponent<
  SignUpAgreeModalContentProps
> = ({ policyViewHandler = undefined, termsViewHandler = undefined }) => {
  /** 전체 동의 */
  const [isChecked, setIsChecked] =
    useRecoilState<IIsCheckedStateTypes>(isCheckedState);

  const { isAllChecked } = isChecked;

  /** 사용자 데이터 */
  const [userInfo] = useRecoilState<IUserInfoStateTypes>(UserInfoState);
  const navigate = useNavigate();

  const onClickIsAllCheckedHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    // 1. 모두 동의 활성화 시 나머지 동의 활성화
    if (!isAllChecked) {
      setIsChecked({
        ...isChecked,
        isAllChecked: true,
        isCollectPersonalInfoChecked: true,
        isTermsAndConditionsChecked: true,
      });
    }
    // 2. 모두 동의 비활성화 시 나머지 동의 비활성화
    if (isAllChecked) {
      setIsChecked({
        ...isChecked,
        isAllChecked: false,
        isCollectPersonalInfoChecked: false,
        isTermsAndConditionsChecked: false,
      });
    }
  };

  const onClickIsCollectPersonalInfoCheckedHandler = (
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    e.preventDefault();

    setIsChecked((prevState) => {
      const newCollectPersonalInfoChecked =
        !prevState.isCollectPersonalInfoChecked;

      if (!newCollectPersonalInfoChecked) {
        return {
          ...prevState,
          isAllChecked: false,
          isCollectPersonalInfoChecked: newCollectPersonalInfoChecked,
        };
      } else {
        return {
          ...prevState,
          isCollectPersonalInfoChecked: newCollectPersonalInfoChecked,
        };
      }
    });
  };

  const onClickIsTermsAndConditionsCheckedHandler = (
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    e.preventDefault();

    // 3. 나머지 동의 중 비활성화 시 모두 동의 비활성화
    setIsChecked((prevState) => {
      const newTermsAndConditionsChecked =
        !prevState.isTermsAndConditionsChecked;

      if (!newTermsAndConditionsChecked) {
        return {
          ...prevState,
          isAllChecked: false,
          isTermsAndConditionsChecked: newTermsAndConditionsChecked,
        };
      } else {
        // 개인정보 동의 체크 상태를 토글
        return {
          ...prevState,
          isTermsAndConditionsChecked: newTermsAndConditionsChecked,
        };
      }
    });
  };

  const onClickSignUpAgreeButtonHandler = async () => {
    try {
      const { userEmail, userPassword, userBirth } = userInfo;

      const signupProps = {
        email: userEmail,
        password: userPassword,
        birth: userBirth,
      };

      const loginProps = {
        username: userEmail,
        password: userPassword,
      };

      const result = await onSignup(signupProps);

      if (result?.data.ok) {
        const response = await onSignIn(loginProps);

        localStorage.setItem("accessToken", response?.data?.accessToken);

        alert("로그인되었습니다.");
        navigate("/");
      }
    } catch (error) {}

    // if (!result.ok) {
    //   Promise.reject(new Error("cannot signUp"));
    //   alert("회원가입을 완료할 수 없습니다.");
    //   navigate("/");
    // }
  };

  return (
    <>
      <SignUpAgreeModalContentContainer>
        <SignUpAgreeModalContentTitle>
          웰리빙을 쓰려면 동의가 필요해요.
        </SignUpAgreeModalContentTitle>

        <SignUpAgreeCheckGroupContainer>
          <CheckBoxGroupContainer>
            <IsCheckedContainer onClick={onClickIsAllCheckedHandler}>
              <CheckBox isChecked={isChecked.isAllChecked} />
            </IsCheckedContainer>
            <SignUpAgreeCheckText>모두 동의합니다.</SignUpAgreeCheckText>
          </CheckBoxGroupContainer>
        </SignUpAgreeCheckGroupContainer>

        <HorizonDivider />

        <SignUpAgreeCheckGroupContainer>
          <CheckBoxGroupContainer>
            <IsCheckedContainer
              onClick={onClickIsCollectPersonalInfoCheckedHandler}
            >
              <CheckBox isChecked={isChecked.isCollectPersonalInfoChecked} />
            </IsCheckedContainer>
            <SignUpAgreeCheckText>
              (필수) 개인정보 처리방침에 동의
            </SignUpAgreeCheckText>
          </CheckBoxGroupContainer>
          <SignUpAgreeViewText onClick={policyViewHandler}>
            보기
          </SignUpAgreeViewText>
        </SignUpAgreeCheckGroupContainer>

        <SignUpAgreeCheckGroupContainer>
          <CheckBoxGroupContainer>
            <IsCheckedContainer
              onClick={onClickIsTermsAndConditionsCheckedHandler}
            >
              <CheckBox isChecked={isChecked.isTermsAndConditionsChecked} />
            </IsCheckedContainer>

            <SignUpAgreeCheckText>(필수) 이용약관에 동의</SignUpAgreeCheckText>
          </CheckBoxGroupContainer>
          <SignUpAgreeViewText onClick={termsViewHandler}>
            보기
          </SignUpAgreeViewText>
        </SignUpAgreeCheckGroupContainer>

        <SignUpAgreeButton
          tabIndex={-1}
          onClick={onClickSignUpAgreeButtonHandler}
        >
          동의
        </SignUpAgreeButton>
      </SignUpAgreeModalContentContainer>
    </>
  );
};

export default SignUpAgreeModalContent;

const SignUpAgreeModalContentContainer = styled.div``;

const SignUpAgreeModalContentTitle = styled.p`
  margin: 5px 0px 24px;

  font-weight: 700;
  font-size: 18px;
`;

const SignUpAgreeCheckGroupContainer = styled.div`
  margin: 10px 0;

  display: flex;
  justify-content: space-between;
`;

const CheckBoxGroupContainer = styled.div`
  display: flex;
`;

const SignUpAgreeCheckText = styled.span`
  margin-left: 8px;
  padding-top: 2px;

  font-weight: 400;
  font-size: 14px;
  color: var(--white);
`;

const SignUpAgreeViewText = styled.span`
  font-weight: 700;
  font-size: 12px;
  color: #999;
  padding-top: 3px;

  &:hover {
    cursor: pointer;
  }
`;

const SignUpAgreeButton = styled.button`
  width: 100%;
  height: 56px;
  margin-top: 20px;
  margin-bottom: 12px;

  background-color: var(--main-color);
  border-radius: 4px;

  font-weight: 700;
`;

const HorizonDivider = styled.hr`
  color: var(--dark-pink-700);
  border: 1px solid var(--dark-pink-700);
  margin: 19px 0px 24px;
`;

const IsCheckedContainer = styled.div``;
