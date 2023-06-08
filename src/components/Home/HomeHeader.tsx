import { FunctionComponent } from "react";
import CommonHeaderContainer from "../Common/CommonHeaderContainer";
type HomeHeaderProps = {};

const HomeHeader: FunctionComponent<HomeHeaderProps> = () => {
  return (
    <CommonHeaderContainer height="56px" xMargin="5%">
      Well-Living
    </CommonHeaderContainer>
  );
};

export default HomeHeader;
