import { FunctionComponent } from "react";

import CommonHeaderContainer from "../Common/CommonHeaderContainer";
type HeaderProps = {};

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <CommonHeaderContainer height="56px" xMargin="5%">
      Well Dying
    </CommonHeaderContainer>
  );
};

export default Header;
