import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
type ChangeUserInfoHeaderProps = {};

const ChangeUserInfoHeader: FunctionComponent<
  ChangeUserInfoHeaderProps
> = () => {
  const navigate = useNavigate();

  const onClickGoBackButtonHandler = () => {
    navigate("/");
  };

  return (
    <ChangeUserInfoHeaderContainer>
      <GoBackButton onClick={onClickGoBackButtonHandler}>
        <img src="https://wliv.kr/img/arrow-left-icon.svg" alt="뒤로 가기" />
      </GoBackButton>
      <FindPWTitle>개인정보 변경</FindPWTitle>
    </ChangeUserInfoHeaderContainer>
  );
};

export default ChangeUserInfoHeader;

const ChangeUserInfoHeaderContainer = styled.header`
  width: 100%;
  height: 56px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const GoBackButton = styled.button`
  position: absolute;
  left: 0px;
`;

const FindPWTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;
