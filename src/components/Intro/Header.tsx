import { FunctionComponent } from "react";

import CommonHeaderContainer from "../Common/CommonHeaderContainer";
type HeaderProps = {};

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <CommonHeaderContainer height="56px" xMargin="5%">
      Well Living
    </CommonHeaderContainer>
  );
};

export default Header;
