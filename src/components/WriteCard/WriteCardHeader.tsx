import { FunctionComponent } from "react";
import styled from "styled-components";
import CommonHeaderContainer from "../Common/CommonHeaderContainer";

type WriteCardHeaderProps = {
  setIsShow: (value: boolean) => void;
};

const WriteCardHeader: FunctionComponent<WriteCardHeaderProps> = ({
  setIsShow,
}) => {
  const onClickSubmitButtonHandler = async () => {
    setIsShow(true);
  };

  return (
    <CommonHeaderContainer height="56px" xMargin="5%">
      {/* <GoBackButton onClick={onClickGoBackButtonHandler}>
        <img src="https://wliv.kr/img/arrow-left-icon.svg" alt="뒤로 가기" />
      </GoBackButton> */}
      <FindPWTitle>추억카드</FindPWTitle>
      <PostButtonGropContainer>
        <SubmitButton onClick={onClickSubmitButtonHandler}>
          카드예시
        </SubmitButton>
      </PostButtonGropContainer>
    </CommonHeaderContainer>
  );
};

export default WriteCardHeader;

const PostButtonGropContainer = styled.div`
  position: absolute;
  right: 0px;

  width: fit-content;
  display: flex;
  justify-content: space-between;
`;

const SubmitButton = styled.div`
  font-weight: 400;
  font-size: 12px;

  &::after {
    content: "";
    display: inline-block;
    width: 12px;
    height: 6px;
    background: url("https://wliv.kr/img/card/arrow-top-icon.svg") no-repeat
      center center;
    background-size: contain;
    margin-left: 4px;
    position: relative;
    top: -1px;
  }
`;

const FindPWTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;
