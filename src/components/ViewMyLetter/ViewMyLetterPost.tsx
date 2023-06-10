import { FunctionComponent, useEffect } from "react";
import CommonContentContainer from "../Common/CommonContentContainer";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getMyLetter } from "../../apis/life/letter/getMyLetter";
import { getTimeDifference } from "../../utils/getTimeDifference.ts";
import LoadingComponent from "../Common/LoadingComponent.tsx";
import FailComponent from "../Common/FailComponent.tsx";

type ViewMyLetterPostProps = {
  setIsLetterPostOverwrite: (isLetterPostOverwrite: boolean) => void;
};

const ViewMyLetterPost: FunctionComponent<ViewMyLetterPostProps> = ({
  setIsLetterPostOverwrite,
}: ViewMyLetterPostProps) => {
  const navigate = useNavigate();

  const onClickGoToOtherLetterClickHandler = () => {
    navigate("/viewotherletter");
  };

  const { data, isFetching, isError } = useQuery({
    queryKey: ["getMyLetter"],
    queryFn: () => getMyLetter(),
  });

  useEffect(() => {
    if (data?.length > 0) {
      setIsLetterPostOverwrite(true);
    }
  }, [data, setIsLetterPostOverwrite]);

  if (isFetching) return <LoadingComponent />;

  if (isError) return <FailComponent />;

  return (
    <>
      <CommonContentContainer xPadding="5%">
        {/* 게시글 */}
        <LetterPostContainer>
          <LetterPostDateText>
            {data && getTimeDifference(data?.[0].createdAt)}
          </LetterPostDateText>
          <LetterPostTitle>{data?.[0].title}</LetterPostTitle>
          <LetterPostContent>{data?.[0].content}</LetterPostContent>
        </LetterPostContainer>
      </CommonContentContainer>

      <CommonContentContainer>
        {/* 유서 목차 가기 */}
        <GoToOtherLetterButtonContainer>
          <GoToOtherLetterButton onClick={onClickGoToOtherLetterClickHandler}>
            <GoToOtherLetterText>유서 목차 보러가기</GoToOtherLetterText>
            <GoToIcon src="https://wliv.kr/img/arrow-right-icon.svg" />
          </GoToOtherLetterButton>
        </GoToOtherLetterButtonContainer>
      </CommonContentContainer>
    </>
  );
};

export default ViewMyLetterPost;

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
  font-weight: 400;
  font-size: 16px;
  color: var(--white);
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
