import { FunctionComponent } from "react";
import styled from "styled-components";
type HomeHeaderProps = {};

const HomeHeader: FunctionComponent<HomeHeaderProps> = () => {
  return <HomeHeaderContainer>Well-Living</HomeHeaderContainer>;
};

export default HomeHeader;

const HomeHeaderContainer = styled.header`
  width: 100%;
  height: 56px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
