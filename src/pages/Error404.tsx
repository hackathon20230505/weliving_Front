import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PageContainer from "../components/Common/PageContainer";
type Error404Props = {};

const Error404: FunctionComponent<Error404Props> = () => {
  const navigate = useNavigate();

  const onClickGoToHomeButtonHandler = () => {
    navigate("/");
  };
  return (
    <PageContainer>
      <EmptyGrayBoxContainer>
        <img src="https://wliv.kr/img/error-404-img.svg" alt="404 에러" />
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
    </PageContainer>
  );
};

export default Error404;

const Error404Container = styled.main`
  width: 100%;
  padding: 0 5%;
`;

const EmptyGrayBoxContainer = styled.div`
  width: 100%;
  height: 300px;

  display: flex;
  justify-content: center;
  align-items: center;
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
