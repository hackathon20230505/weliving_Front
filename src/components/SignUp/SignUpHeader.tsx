import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CommonHeaderContainer from "../Common/CommonHeaderContainer";

type SignUpHeaderProps = {};

const SignUpHeader: FunctionComponent<SignUpHeaderProps> = () => {
  const navigate = useNavigate();

  const onClickGoBackButtonHandler = () => {
    navigate("/");
  };
  return (
    <CommonHeaderContainer height="56px" xMargin="5%">
      <GoBackButton onClick={onClickGoBackButtonHandler}>
        <img
          src="https://welldie.com/img/arrow-left-icon.svg"
          alt="뒤로 가기"
        />
      </GoBackButton>
    </CommonHeaderContainer>
  );
};

export default SignUpHeader;

const GoBackButton = styled.button`
  position: absolute;
  padding: 4px 1rem 4px 0;
  left: 0;
`;
