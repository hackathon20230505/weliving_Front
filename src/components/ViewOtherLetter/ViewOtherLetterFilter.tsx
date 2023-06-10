import { FunctionComponent } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { FilterState } from "./atoms/FilterAtom";

type ViewOtherLetterFilterProps = {};

const ViewOtherLetterFilter: FunctionComponent<
  ViewOtherLetterFilterProps
> = () => {
  const [categoryFilter, setCategoryFilter] = useRecoilState(FilterState);

  const onClickFilterButtonHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const { textContent } = event.currentTarget;

    if (!textContent) return;

    setCategoryFilter((prevState) => {
      const updatedFilters = prevState.map((filter) => ({
        ...filter,
        isActive: filter.title === textContent ? !filter.isActive : false,
      }));

      const hasActiveFilter = updatedFilters.some((filter) => filter.isActive);
      if (!hasActiveFilter) {
        updatedFilters[0].isActive = true;
      }

      return updatedFilters;
    });
  };

  return (
    <ViewOtherLetterFilterWrapper>
      <ViewOtherLetterFilterContainer>
        {categoryFilter.map(({ id, title, isActive }) => (
          <FilterButton
            key={id}
            isActive={isActive}
            onClick={onClickFilterButtonHandler}
          >
            {title}
          </FilterButton>
        ))}
      </ViewOtherLetterFilterContainer>
    </ViewOtherLetterFilterWrapper>
  );
};

export default ViewOtherLetterFilter;

const ViewOtherLetterFilterWrapper = styled.div`
  padding: 0 5%;
  overflow: auto;
  height: 44px;
  min-height: 44px;
`;

const ViewOtherLetterFilterContainer = styled.div`
  width: 430px;
`;

interface IFilterButtonTypes {
  isActive: boolean;
}

const FilterButton = styled.button<IFilterButtonTypes>`
  height: 32px;
  padding: 5px 16px;

  border: ${({ isActive }) => (isActive ? "none" : "1px solid #6C1573")};
  background-color: ${({ isActive }) =>
    isActive ? "var(--main-color)" : "inherit"};
  color: ${({ isActive }) => (isActive ? "#111111" : "var(--white)")};
  border-radius: 200px;

  margin-right: 8px;
`;
