import { FunctionComponent } from "react";
import CommonContentContainer from "../Common/CommonContentContainer";
import { getMyMemoryCard } from "../../apis/life/memory/getMyMemoryCard";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import LoadingComponent from "../Common/LoadingComponent.tsx";
import FailComponent from "../Common/FailComponent.tsx";

type ViewMyMemoryCardProps = {};

const ViewMyMemoryCard: FunctionComponent<ViewMyMemoryCardProps> = () => {
  const { data, isError, isFetching } = useQuery({
    queryKey: ["getMyMemoryCard"],
    queryFn: () =>
      getMyMemoryCard(localStorage.getItem("accessToken") as string),
    staleTime: 5000,
  });

  if (isFetching) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <FailComponent />;
  }

  return (
    <>
      <CommonContentContainer xPadding="5%" topSpacing="40px">
        {data.map((e, i) => {
          return (
            <MemoryCardContainer key={i}>
              <MemoryCardNumber>
                {i < 10 ? `0${i + 1}` : `${i + 1}`}.
              </MemoryCardNumber>
              <MemoryCardContent>{e}</MemoryCardContent>
            </MemoryCardContainer>
          );
        })}
      </CommonContentContainer>
    </>
  );
};

export default ViewMyMemoryCard;

const HeaderPadding = styled.div`
  padding-bottom: 28px;
`;

const MemoryCardContainer = styled.div`
  width: 100%;
  height: 84px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 20px;

  background-color: #534356;
  border-radius: 4px;

  margin-bottom: 16px;
`;

const MemoryCardNumber = styled.p`
  color: var(--main-color);
  font-weight: 700;
  font-size: 12px;

  margin-bottom: 2px;
`;

const MemoryCardContent = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
`;
