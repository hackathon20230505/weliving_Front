import CommonHeaderContainer from "../Common/CommonHeaderContainer";
import { useNavigate } from "react-router-dom";
import ResizeableBottomSheet from "../Common/ResizableBottomSheet";
import ResizableBottomSheetHeader from "../Common/ResizableBottomSheetHeader";
import { useState } from "react";
import styled from "styled-components";

interface LetterHeaderProps {
  isSelf?: boolean;
}

const LetterHeader = ({ isSelf = false }: LetterHeaderProps) => {
  const [isOpenShare, setIsOpenShare] = useState<boolean>(false);
  const [isOpenMore, setIsOpenMore] = useState<boolean>(false);
  const [isFullOpenShare, setIsFullOpenShare] = useState<boolean>(false);
  const [isFullOpenMore, setIsFullOpenMore] = useState<boolean>(false);

  const navigate = useNavigate();

  const onClickGoBackButtonHandler = () => {
    navigate("/");
  };

  const onClickShareButtonHandler = () => {
    setIsOpenShare(true);
  };

  const onClickMoreButtonHandler = () => {
    setIsOpenMore(true);
  };

  const backgroundClickHandler = () => {
    setIsOpenMore(false);
    setIsOpenShare(false);
  };

  return (
    <>
      <CommonHeaderContainer height="56px" xMargin="5%">
        <GoBackButton onClick={onClickGoBackButtonHandler}>
          <img src="https://wliv.kr/img/arrow-left-icon.svg" alt="뒤로 가기" />
        </GoBackButton>
        <ButtonGroupContainer>
          <ShareButton onClick={onClickShareButtonHandler}>
            <img src="https://wliv.kr/img/share-icon.svg" alt="공유하기" />
          </ShareButton>
          {isSelf && (
            <MoreButton onClick={onClickMoreButtonHandler}>
              <img src="https://wliv.kr/img/more-icon.svg" alt="더 많은 기능" />
            </MoreButton>
          )}
        </ButtonGroupContainer>
      </CommonHeaderContainer>
      <ResizeableBottomSheet
        isShow={isOpenShare}
        setIsShow={setIsOpenShare}
        isFullSize={isFullOpenShare}
        setIsFullSize={setIsFullOpenShare}
        backgroundClickHandler={backgroundClickHandler}
      >
        <ResizableBottomSheetHeader
          closable={true}
          closeHandler={() => setIsOpenShare(false)}
          align="right"
        />
        공유하기
      </ResizeableBottomSheet>
      {isSelf && (
        <ResizeableBottomSheet
          isShow={isOpenMore}
          setIsShow={setIsOpenMore}
          isFullSize={isFullOpenMore}
          setIsFullSize={setIsFullOpenMore}
          backgroundClickHandler={backgroundClickHandler}
          manualMaxHeight="30%"
        >
          <ResizableBottomSheetHeader
            closable={true}
            closeHandler={() => setIsOpenMore(false)}
            align="right"
          />
          더보기
        </ResizeableBottomSheet>
      )}
    </>
  );
};

export default LetterHeader;

const GoBackButton = styled.button`
  position: absolute;
  left: 0px;
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
