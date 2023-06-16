import { FunctionComponent } from "react";
import CommonHeaderContainer from "../Common/CommonHeaderContainer";
import { FindPWTitle, GoBackButton } from "../ChangePW/ChangePWHeader";
import { useNavigate } from "react-router-dom";
type ViewOtherLetterHeaderProps = {};

const ViewOtherLetterHeader: FunctionComponent<
  ViewOtherLetterHeaderProps
> = () => {
  const navigate = useNavigate();
  const onClickGoBackButtonHandler = () => {
    navigate("/");
  };
  return (
    <CommonHeaderContainer height="56px" xMargin="5%">
      <GoBackButton onClick={onClickGoBackButtonHandler}>
        <img
          src="https://welldie.com/img/arrow-left-icon.svg"
          alt="뒤로 가기"
        />
      </GoBackButton>

      <FindPWTitle>일지 목차</FindPWTitle>
    </CommonHeaderContainer>
  );
};

export default ViewOtherLetterHeader;
