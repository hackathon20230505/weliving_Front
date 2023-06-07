import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
type FindPWHeaderProps = {};

const FindPWHeader: FunctionComponent<FindPWHeaderProps> = () => {
  const navigate = useNavigate();

  const onClickGoBackButtonHandler = () => {
    navigate("/logIn");
  };

  return (
    <FindPWHeaderConatiner>
      <GoBackButton onClick={onClickGoBackButtonHandler}>
        <img src="https://wliv.kr/img/arrow-left-icon.svg" alt="뒤로 가기" />
      </GoBackButton>
      <FindPWTitle>비밀번호 찾기</FindPWTitle>
    </FindPWHeaderConatiner>
  );
};

export default FindPWHeader;

const FindPWHeaderConatiner = styled.header`
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
