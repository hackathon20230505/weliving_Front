import LetterHeader from "../components/ViewMyLetter/LetterHeader.tsx";
import CommonContentContainer from "../components/Common/CommonContentContainer.tsx";
import styled from "styled-components";
import PageContainer from "../components/Common/PageContainer.tsx";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getOtherLetter } from "../apis/life/letter/getOtherLetter.ts";
import LoadingComponent from "../components/Common/LoadingComponent.tsx";
import { useNavigate } from "react-router-dom";
import FailComponent from "../components/Common/FailComponent.tsx";

export default function ViewOtherLetterPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const onClickGoToOtherLetterClickHandler = () => {
    navigate("/viewotherletter");
  };

  const { data, isError, isFetching } = useQuery({
    queryKey: [`getOtherLetterList`, id],
    queryFn: () => getOtherLetter(id),
  });

  if (!isFetching && data?.length === 0) {
    window.location.href = "/404";
  }

  if (isError) return <FailComponent />;

  if (isFetching)
    return (
      <>
        <LetterHeader showButtons={false} backUrl={"/viewotherletter"} />
        <LoadingComponent />
      </>
    );

  return (
    <PageContainer>
      <LetterHeader showButtons={true} backUrl={"/viewotherletter"} />
      <CommonContentContainer xPadding={"5%"} h={"fit-content"}>
        <LetterPostContainer>
          <LetterPostDateText>{data?.[0].created_at}</LetterPostDateText>
          <LetterPostTitle>{data?.[0].title}</LetterPostTitle>
          <LetterPostContent>{data?.[0].content}</LetterPostContent>
        </LetterPostContainer>
      </CommonContentContainer>

      <CommonContentContainer h={"fit-content"}>
        {/*  일지 목차 가기 */}
        <GoToOtherLetterButtonContainer>
          <GoToOtherLetterButton onClick={onClickGoToOtherLetterClickHandler}>
            <GoToOtherLetterText> 일지 목차 보러가기</GoToOtherLetterText>
            <GoToIcon src="https://wliv.kr/img/arrow-right-icon.svg" />
          </GoToOtherLetterButton>
        </GoToOtherLetterButtonContainer>
      </CommonContentContainer>
    </PageContainer>
  );
}

const LetterPostContainer = styled.div`
  margin: 24px 0 48px;
`;

const LetterPostDateText = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #cbcbcb;
`;

const LetterPostTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  color: var(--white);

  margin: 2px 0 12px;
`;

const LetterPostContent = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  color: var(--white);
  white-space: pre-line;
`;

const GoToOtherLetterButton = styled.button`
  width: 100%;
  padding: 5%;
  height: 56px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GoToOtherLetterText = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: var(--white);
`;

const GoToIcon = styled.img``;

const GoToOtherLetterButtonContainer = styled.div`
  border-top: 1px solid #4b0b50;
  border-bottom: 1px solid #4b0b50;
`;
