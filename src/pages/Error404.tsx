import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
type Error404Props = {};

const Error404: FunctionComponent<Error404Props> = () => {
  const navigate = useNavigate();

  const onClickGoToHomeButtonHandler = () => {
    navigate("/");
  };
  return (
    <Error404Container>
      <EmptyGrayBoxContainer>
        <EmptyGrayBox />
      </EmptyGrayBoxContainer>
      <Error404ContentContainer>
        <Error404title>404</Error404title>
        <Error404description>
          요청하신 페이지를 찾을 수 없습니다.
        </Error404description>
      </Error404ContentContainer>
      <GoToHomeButtonContainer>
        <GoToHomeButton onClick={onClickGoToHomeButtonHandler}>
          홈으로 가기
        </GoToHomeButton>
      </GoToHomeButtonContainer>
    </Error404Container>
  );
};

export default Error404;

const Error404Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const EmptyGrayBoxContainer = styled.div`
  width: 100%;
  height: 300px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmptyGrayBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: #d9d9d9;
`;

const Error404ContentContainer = styled.div`
  height: 130px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Error404title = styled.h1`
  color: #ec8dea;
  font-size: 72px;
  font-weight: 700;
`;

const Error404description = styled.p`
  color: var(--white);
  font-size: 18px;
  font-weight: 700;
`;

const GoToHomeButtonContainer = styled.div`
  width: 90%;
  position: absolute;
  bottom: 34px;
`;

const GoToHomeButton = styled.button`
  width: 100%;
  height: 56px;

  margin-bottom: 12px;

  background-color: var(--main-color);
  border-radius: 4px;

  font-weight: 700;
`;
