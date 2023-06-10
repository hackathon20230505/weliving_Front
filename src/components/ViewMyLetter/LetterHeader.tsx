import CommonHeaderContainer from "../Common/CommonHeaderContainer";
import { useNavigate } from "react-router-dom";
import ResizeableBottomSheet from "../Common/ResizableBottomSheet";
import ResizableBottomSheetHeader from "../Common/ResizableBottomSheetHeader";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

interface LetterHeaderProps {
  isSelf?: boolean;
  isShareToggleHandler?: () => void;
  isShare?: number;
}

const LetterHeader = ({
  isSelf = false,
  isShareToggleHandler,
  isShare = 0,
}: LetterHeaderProps) => {
  const [isOpenShare, setIsOpenShare] = useState<boolean>(false);
  const [isOpenMore, setIsOpenMore] = useState<boolean>(false);
  const [, setIsFullOpenShare] = useState<boolean>(false);
  const [, setIsFullOpenMore] = useState<boolean>(false);

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

  const [toastList, setToastList] = useState<{ id: number }[]>([]);
  const copyURL = () => {
    navigator.clipboard.writeText("https://wliv.kr/signIn").then(() => {
      const id = Math.floor(Math.random() * 100000);
      setToastList((prev) => [...prev, { id }]);

      setInterval(() => {
        setToastList((prev) => prev.filter((toast) => toast.id !== id));
      }, 1500);
    });
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
        isFullSize={true}
        setIsFullSize={setIsFullOpenShare}
        backgroundClickHandler={backgroundClickHandler}
        manualFullSizeHeight={"30%"}
      >
        <ResizableBottomSheetHeader
          closable={true}
          closeHandler={() => setIsOpenShare(false)}
          align="right"
        />
        <CopyShareText>공유하기</CopyShareText>
        <CopyURLContainer>
          <CopyURLButton onClick={copyURL}>
            <img src={"https://wliv.kr/img/kakao-icon2.svg"} />
          </CopyURLButton>
          <CopyURLButton onClick={copyURL}>
            <img src={"https://wliv.kr/img/insta-icon.svg"} />
          </CopyURLButton>
          <CopyURLButton onClick={copyURL}>
            <img src={"https://wliv.kr/img/link-icon.svg"} />
          </CopyURLButton>
        </CopyURLContainer>
      </ResizeableBottomSheet>
      {isSelf && (
        <ResizeableBottomSheet
          isShow={isOpenMore}
          setIsShow={setIsOpenMore}
          isFullSize={true}
          setIsFullSize={setIsFullOpenMore}
          backgroundClickHandler={backgroundClickHandler}
          manualFullSizeHeight={"30%"}
        >
          <ResizableBottomSheetHeader
            closable={true}
            closeHandler={() => setIsOpenMore(false)}
            align="right"
          />
          <button
            onClick={() => {
              navigate("/modifyletter");
            }}
          >
            수정하기
          </button>
          <button onClick={isShareToggleHandler}>
            유서 공개여부
            {isShare ? "공개" : "비공개"}
          </button>
        </ResizeableBottomSheet>
      )}
      {toastList.map((i) => (
        <HintToast key={i.id} isShareOpen={isOpenShare}>
          <HintToastText>링크가 복사되었습니다.</HintToastText>
        </HintToast>
      ))}
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

const CopyShareText = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
`;

const CopyURLContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;
`;

const CopyURLButton = styled.button`
  width: 56px;
  height: 56px;
  background: #534356;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface HintToastProps {
  isShareOpen: boolean;
}

const HintToastFadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const HintToast = styled.div<HintToastProps>`
  background: white;
  margin: 0 5%;
  padding: 1rem;
  border-radius: 4px;
  position: absolute;
  width: 90%;
  bottom: ${(props) => (props.isShareOpen ? "calc(30% + 1rem)" : "1rem")};
  animation: ${HintToastFadeOut} 1.5s ease-in-out;
`;

const HintToastText = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 140%;
  color: #121bf2;
`;
