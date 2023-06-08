import { FunctionComponent } from "react";
import styled from "styled-components";
import CommonContentContainer from "../Common/CommonContentContainer";
import {
  isActiveLetterState,
  isActiveMemoryCardState,
} from "./atoms/isActiveCateogry";
import { useRecoilState } from "recoil";
import ViewMyLetterPost from "./ViewMyLetterPost";
import ViewMyMemoryCard from "./ViewMyMemoryCard";
type ViewMyLetterBodyProps = {};

const ViewMyLetterBody: FunctionComponent<ViewMyLetterBodyProps> = () => {
  const [isActiveLetter, setIsActiveLetter] =
    useRecoilState<boolean>(isActiveLetterState);
  const [isActiveMemoryCard, setIsActiveMemoryCard] = useRecoilState<boolean>(
    isActiveMemoryCardState,
  );

  const onClickLetterButtonHandler = () => {
    setIsActiveLetter(true);
    setIsActiveMemoryCard(false);
  };

  const onClickMemoryCardButtonHandler = () => {
    setIsActiveLetter(false);
    setIsActiveMemoryCard(true);
  };

  return (
    <>
      <CommonContentContainer xPadding="5%">
        {/* 카테고리 */}
        <CategoryGroupContainer>
          <CategoryButton
            onClick={onClickLetterButtonHandler}
            isActive={isActiveLetter}
          >
            일지
          </CategoryButton>
          <CategoryButton
            onClick={onClickMemoryCardButtonHandler}
            isActive={isActiveMemoryCard}
          >
            추억카드
          </CategoryButton>
        </CategoryGroupContainer>
      </CommonContentContainer>
      {isActiveLetter && <ViewMyLetterPost />}
      {isActiveMemoryCard && <ViewMyMemoryCard />}
    </>
  );
};

export default ViewMyLetterBody;

const CategoryGroupContainer = styled.div``;

interface ICategoryButtonTypes {
  isActive: boolean;
}

const CategoryButton = styled.button<ICategoryButtonTypes>`
  width: 50%;
  height: 40px;

  border: ${({ isActive }) =>
    isActive ? "1px solid var(--main-color)" : "none"};

  color: ${({ isActive }) => (isActive ? "var(--main-color)" : "#867388")};

  background-color: ${({ isActive }) => (isActive ? "inherit" : "#352638")};

  border-radius: 4px;
`;
