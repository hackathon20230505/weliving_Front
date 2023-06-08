import { FunctionComponent, useEffect } from "react";
import CommonContentContainer from "../Common/CommonContentContainer";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../state/tokenState";
import { getMyMemoryCard } from "../../apis/life/memory/getMyMemoryCard";
import styled from "styled-components";
type ViewMyMemoryCardProps = {};

const ViewMyMemoryCard: FunctionComponent<ViewMyMemoryCardProps> = () => {
  const [token] = useRecoilState(accessTokenState);
  const dummydata = ["추억1", "추억2", "추억3"];

  useEffect(() => {
    const result = getMyMemoryCard(token);
    console.log(result);
  }, []);

  return (
    <>
      <CommonContentContainer xPadding="5%">
        {dummydata.map((e, i) => {
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

const MemoryCardContainer = styled.div`
  width: 100%;
  height: 84px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 20px;

  background-color: #fff0ff;
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
  color: #111111;
`;
