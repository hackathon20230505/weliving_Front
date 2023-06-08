import { FunctionComponent } from "react";
import CommonHeaderContainer from "../components/Common/CommonHeaderContainer";
import {
  FindPWTitle,
  GoBackButton,
} from "../components/ChangePW/ChangePWHeader";
import CommonContentContainer from "../components/Common/CommonContentContainer";
import styled from "styled-components";
type ViewOtherLetterProps = {};

const ViewOtherLetter: FunctionComponent<ViewOtherLetterProps> = () => {
  const targerAgeGroupConstant = [
    "전체",
    "00년생",
    "90년생",
    "80년생",
    "70년생",
  ];

  return (
    <>
      <CommonHeaderContainer height="56px" xMargin="5%">
        <GoBackButton>
          <img src="https://wliv.kr/img/arrow-left-icon.svg" alt="뒤로 가기" />
        </GoBackButton>

        <FindPWTitle>일지 목차</FindPWTitle>
      </CommonHeaderContainer>

      <CommonContentContainer xPadding="5%">
        <TargetAgeGroupWrapper>
          {targerAgeGroupConstant.map((it, i) => (
            <TargetAgeGroupButton key={i}>{it}</TargetAgeGroupButton>
          ))}
        </TargetAgeGroupWrapper>
      </CommonContentContainer>
      <CommonContentContainer>{}</CommonContentContainer>
    </>
  );
};

const TargetAgeGroupWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const TargetAgeGroupButton = styled.button``;

export default ViewOtherLetter;
