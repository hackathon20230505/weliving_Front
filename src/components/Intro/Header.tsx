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

const HeaderImg = styled.img`
  width: 102px;
  height: 30px;
`;
