import { FunctionComponent } from "react";
import styled from "styled-components";
import CommonHeaderContainer from "../Common/CommonHeaderContainer";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { isOpenMoreState, isOpenShareState } from "./atoms/isOpenBottomSeet";

type ViewMyLetterHeaderProps = {};

const ViewMyLetterHeader: FunctionComponent<ViewMyLetterHeaderProps> = () => {
  const navigate = useNavigate();

  const [, setIsOpenShare] = useRecoilState(isOpenShareState);
  const [, setIsOpenMore] = useRecoilState(isOpenMoreState);

  const onClickGoBackButtonHandler = () => {
    navigate("/");
  };

  const onClickShareButtonHandler = () => {
    setIsOpenShare(true);
  };

  const onClickMoreButtonHandler = () => {
    setIsOpenMore(true);
  };

  return (
    <CommonHeaderContainer height="56px" xMargin="5%">
      <GoBackButton onClick={onClickGoBackButtonHandler}>
        <img src="https://wliv.kr/img/arrow-left-icon.svg" alt="뒤로 가기" />
      </GoBackButton>
      <ButtonGroupContainer>
        <ShareButton onClick={onClickShareButtonHandler}>
          <img src="https://wliv.kr/img/share-icon.svg" alt="공유하기" />
        </ShareButton>
        <MoreButton onClick={onClickMoreButtonHandler}>
          <img src="https://wliv.kr/img/more-icon.svg" alt="더 많은 기능" />
        </MoreButton>
      </ButtonGroupContainer>
    </CommonHeaderContainer>
  );
};

export default ViewMyLetterHeader;

const GoBackButton = styled.button`
  position: absolute;
  left: 0;
`;

const ButtonGroupContainer = styled.div`
  position: absolute;
  right: 0;
`;

const ShareButton = styled.button`
  width: 28px;
  height: 28px;
`;

const MoreButton = styled.button`
  width: 28px;
  height: 28px;
`;
