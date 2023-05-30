import { FunctionComponent } from "react";
import styled from "styled-components";
type HeaderProps = {};

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <HeaderImg src="public/Well-Dying.svg" alt="well dying" />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  padding: 13px 0;

  display: flex;
  justify-content: center;
`;

const HeaderImg = styled.img``;
