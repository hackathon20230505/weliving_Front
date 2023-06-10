import { useNavigate } from "react-router-dom";
import CommonHeaderContainer from "../Common/CommonHeaderContainer";
import { GoBackButton } from "../ChangePW/ChangePWHeader";
import { useState } from "react";

const ModifyLetterHeader = () => {
  const navigate = useNavigate();

  const [isValidPost] = useState<boolean>(false);
  const [myLetterPost] = useState<boolean>(false);

  const onClickGoBackButtonHandler = () => {
    // navigate(-1);
    // 어차피 viewmyletter 아닐까?
    navigate("/viewmyletter");
  };

  return (
    <CommonHeaderContainer height="56px" xMargin="5%">
      <GoBackButton onClick={onClickGoBackButtonHandler}>
        <img src="https://wliv.kr/img/arrow-left-icon.svg" alt="뒤로 가기" />
      </GoBackButton>
    </CommonHeaderContainer>
  );
};

export default ModifyLetterHeader;
