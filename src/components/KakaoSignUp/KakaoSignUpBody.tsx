import { FunctionComponent, useState } from "react";
import styled, { css } from "styled-components";
import { isValidUserBirthFunc } from "../../utils/isValid/isValidUserData";
import CheckBox from "../Common/CheckBox";
import { useRecoilState } from "recoil";
import {
  IIsCheckedStateTypes,
  isCheckedState,
} from "../SignUp/atoms/TermsOfServiceAtoms";
import TermsOfServiceModalComponent from "../SignUp/TermsOfServiceModalComponent";
import PrivacyPolicyModalComponent from "../SignUp/PrivacyPolicyModalComponent";
import CommonContentContainer from "../Common/CommonContentContainer";
type KakaoSignUpBodyProps = {};

const KakaoSignUpBody: FunctionComponent<KakaoSignUpBodyProps> = () => {
  const [userBirth, setUserBirth] = useState<string>("");
  const [isValidUserBirth, setIsValidUserBirth] = useState<boolean>(false);

  const [, setIsModalOpen] = useState(false);
  const [openModalType, setOpenModalType] = useState(-1);

  const onChangeUserBirthHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;
    setUserBirth(value);

    if (isValidUserBirthFunc(value) === true) {
      setIsValidUserBirth(true);
    } else {
      setIsValidUserBirth(false);
    }
  };

  /** 전체 동의 */
  const [isChecked, setIsChecked] =
    useRecoilState<IIsCheckedStateTypes>(isCheckedState);

  const { isAllChecked } = isChecked;

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

  const onClickViewTexts = (type: "term" | "privacy") => {
    if (type == "term") {
      setIsModalOpen(true);
      setOpenModalType(0);
      console.log("term");
    } else {
      setIsModalOpen(true);
      setOpenModalType(1);
      console.log("privacy");
    }
  };

  const onClickNextButtonHandler = () => {};

  return (
    <CommonContentContainer xPadding="5%">
      <SignUpLabelInputContainer>
        <SignUpLabel htmlFor="userBirth">생년월일</SignUpLabel>
        <SignUpInput
          id="userBirth"
          type="text"
          placeholder="YYMMDD"
          maxLength={6}
          value={userBirth}
          onChange={onChangeUserBirthHandler}
        />
      </SignUpLabelInputContainer>
      <SignUpAgreeModalContentContainer>
        <SignUpAgreeCheckGroupContainer>
          <CheckBoxGroupContainer>
            <IsCheckedContainer onClick={onClickIsAllCheckedHandler}>
              <CheckBox isChecked={isChecked.isAllChecked} />
            </IsCheckedContainer>
            <SignUpAgreeCheckText>네, 모두 동의합니다.</SignUpAgreeCheckText>
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
          <SignUpAgreeViewText onClick={() => onClickViewTexts("privacy")}>
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
          <SignUpAgreeViewText onClick={() => onClickViewTexts("term")}>
            보기
          </SignUpAgreeViewText>
        </SignUpAgreeCheckGroupContainer>
        <CommonModalWrapper>
          <PrivacyPolicyModalWrapper openModalType={openModalType}>
            <PrivacyPolicyModalComponent />
          </PrivacyPolicyModalWrapper>

          <TermsModalWrapper openModalType={openModalType}>
            <TermsOfServiceModalComponent />
          </TermsModalWrapper>
        </CommonModalWrapper>
      </SignUpAgreeModalContentContainer>
      <NextButton
        isValid={
          isValidUserBirth &&
          isChecked.isCollectPersonalInfoChecked &&
          isChecked.isTermsAndConditionsChecked
        }
        disabled={
          !(
            isValidUserBirth &&
            isChecked.isCollectPersonalInfoChecked &&
            isChecked.isTermsAndConditionsChecked
          )
            ? true
            : false
        }
        onClick={onClickNextButtonHandler}
      >
        로그인 하기
      </NextButton>
    </CommonContentContainer>
  );
};

export default KakaoSignUpBody;

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

const SignUpAgreeModalContentContainer = styled.div`
  min-height: 0vh;
  opacity: 1;
  transition: min-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

const SignUpAgreeCheckGroupContainer = styled.div`
  margin: 24px 0;

  display: flex;
  justify-content: space-between;
`;

const CheckBoxGroupContainer = styled.div`
  display: flex;
`;

const SignUpAgreeCheckText = styled.span`
  margin-left: 8px;

  font-weight: 400;
  font-size: 14px;
  color: var(--white);
`;

const SignUpAgreeViewText = styled.span`
  font-weight: 700;
  font-size: 12px;
  color: #999;

  &:hover {
    cursor: pointer;
  }
`;

const HorizonDivider = styled.hr`
  color: var(--dark-pink-700);
  border: 1px solid var(--dark-pink-700);
`;

const IsCheckedContainer = styled.div``;

const modalWrapperCommon = css`
  max-height: 0vh;
  overflow: hidden;
  transition: max-height 0.25s ease-in-out, opacity 0.25s ease-in-out;
`;

const CommonModalWrapper = styled.div`
  background-color: white;
  border-radius: 1rem;
  max-height: calc(100vh - 446px);
  overflow: hidden;
`;

interface IModalWrapperProps {
  openModalType: number;
}

const TermsModalWrapper = styled.div<IModalWrapperProps>`
  ${modalWrapperCommon}
  ${({ openModalType }) =>
    openModalType == 0
      ? "max-height: 100vh; opacity: 1;"
      : "max-height: 0vh; opacity: 0;"}
`;

const PrivacyPolicyModalWrapper = styled.div<IModalWrapperProps>`
  ${modalWrapperCommon}
  ${({ openModalType }) =>
    openModalType == 1
      ? "max-height: 100vh; opacity: 1;"
      : "max-height: 0vh; opacity: 0;"};
`;
