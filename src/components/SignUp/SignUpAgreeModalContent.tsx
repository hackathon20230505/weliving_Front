import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import CheckBox from "../Common/CheckBox";
import { useRecoilState } from "recoil";
import {
  isAllCheckedState,
  isCollectPersonalInfoCheckedState,
  isTermsAndConditionsCheckedState,
} from "./atoms/TermsOfServiceAtoms";
type SignUpAgreeModalContentProps = {};

const SignUpAgreeModalContent: FunctionComponent<
  SignUpAgreeModalContentProps
> = () => {
  /** 전체 동의 */
  const [isAllChecked, setIsAllChecked] =
    useRecoilState<boolean>(isAllCheckedState);

  /** 개인 정보 처리 방침 동의 */
  const [isCollectPersonalInfoChecked, setIsCollectPersonalInfoChecked] =
    useRecoilState<boolean>(isCollectPersonalInfoCheckedState);

  /** 이용 약관 동의 */
  const [isTermsAndConditionsChecked, setIsTermsAndConditionsChecked] =
    useRecoilState(isTermsAndConditionsCheckedState);

  return (
    <SignUpAgreeModalContentContainer>
      <SignUpAgreeModalContentTitle>
        웰리빙을 쓰려면 동의가 필요해요.
      </SignUpAgreeModalContentTitle>
      <SignUpAgreeCheckGroupContainer>
        <CheckBoxGroupContainer>
          <CheckBox isChecked={isAllChecked} setIsChecked={setIsAllChecked} />
          <SignUpAgreeCheckText>네, 모두 동의합니다.</SignUpAgreeCheckText>
        </CheckBoxGroupContainer>
      </SignUpAgreeCheckGroupContainer>
      <HorizonDivider />
      <SignUpAgreeCheckGroupContainer>
        <CheckBoxGroupContainer>
          <CheckBox
            isChecked={isCollectPersonalInfoChecked}
            setIsChecked={setIsCollectPersonalInfoChecked}
          />
          <SignUpAgreeCheckText>
            (필수) 개인정보 처리방침에 동의
          </SignUpAgreeCheckText>
        </CheckBoxGroupContainer>
        <SignUpAgreeViewText>보기</SignUpAgreeViewText>
      </SignUpAgreeCheckGroupContainer>
      <SignUpAgreeCheckGroupContainer>
        <CheckBoxGroupContainer>
          <CheckBox
            isChecked={isTermsAndConditionsChecked}
            setIsChecked={setIsTermsAndConditionsChecked}
          />
          <SignUpAgreeCheckText>(필수) 이용약관에 동의</SignUpAgreeCheckText>
        </CheckBoxGroupContainer>
        <SignUpAgreeViewText>보기</SignUpAgreeViewText>
      </SignUpAgreeCheckGroupContainer>
      <SignUpAgreeButton>동의</SignUpAgreeButton>
    </SignUpAgreeModalContentContainer>
  );
};

export default SignUpAgreeModalContent;

const SignUpAgreeModalContentContainer = styled.div``;

const SignUpAgreeModalContentTitle = styled.p`
  margin: 20px 0;

  font-weight: 700;
  font-size: 18px;
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
`;

const SignUpAgreeButton = styled.button`
  width: 100%;
  height: 56px;

  margin-bottom: 12px;

  background-color: var(--main-color);
  border-radius: 4px;

  font-weight: 700;
`;

const HorizonDivider = styled.hr`
  color: var(--dark-pink-700);
  border: 1px solid var(--dark-pink-700);
`;
