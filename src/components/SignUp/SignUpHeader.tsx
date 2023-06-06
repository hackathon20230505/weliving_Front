import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
type SignUpHeaderProps = {};

const SignUpHeader: FunctionComponent<SignUpHeaderProps> = () => {
  const navigate = useNavigate();

  const onClickGoBackButtonHandler = () => {
    navigate("/");
  };
  return (
    <SignUpHeaderContainer>
      <GoBackButton onClick={onClickGoBackButtonHandler}>
        <img src="https://wliv.kr/img/arrow-left-icon.svg" alt="뒤로 가기" />
      </GoBackButton>
    </SignUpHeaderContainer>
  );
};

export default SignUpHeader;

const SignUpHeaderContainer = styled.header`
  height: 56px;
  position: relative;

  display: flex;
  align-items: center;
`;

const GoBackButton = styled.button`
  position: absolute;
  left: 0px;
`;
