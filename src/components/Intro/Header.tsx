import { FunctionComponent } from "react";
import styled from "styled-components";
import CommonHeaderContainer from "../Common/CommonHeaderContainer";
type HeaderProps = {};

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <CommonHeaderContainer height="56px" xMargin="5%">
      <HeaderImg
        src="https://wliv.kr/img/well-dying-typography.svg"
        alt="well dying"
      />
    </CommonHeaderContainer>
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
