import { FunctionComponent, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

type BottomSheetProps = {
  setIsOpen: any;
  closable: boolean;
  completable: boolean;
  visible: boolean;
  children: any;
};

const BottomSheet: FunctionComponent<BottomSheetProps> = ({
  setIsOpen,
  closable,
  completable,
  visible,
  children,
}) => {
  const BottomSheetRef = useRef<HTMLDivElement>(null);
  /** moodal 밖을 클릭하면 visible false  */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        BottomSheetRef.current &&
        !BottomSheetRef.current.contains(event.target as Node)
      ) {
        // 클릭된 요소가 DropDownRef의 자식 요소가 아닌 경우
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // cleanup 함수
    return () => {
      // document.removeEventListener를 호출하여 이벤트 핸들러를 제거
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, [BottomSheetRef]);

  /** 모달 뒤의 스크롤 동작 X  */
  /**
   * cssText를 쓰는 이유는
   * style을 여러번 접근하면 그 횟수만큼 reflow가 발생하게 된다.
   * cssText를 이용하면 1번만 계산하기 때문에 이렇게 js로 css를 건드릴 경우
   * 퍼포먼스를 위해 필수로 해는게 좋다.
   * (class 명을 추가해줘도 된다.)
   */
  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    width: -webkit-fill-available;  
    top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, []);

  const onClickCloseIconHandler = useCallback<() => void>(() => {
    onClose();
  }, []);

  const onClickCompleteButtonHandler = useCallback<() => void>(() => {
    // 확인 눌렀을 때 로직
    // ...
    onClose();
  }, []);

  /** 모달 닫히는 함수 */
  const onClose = useCallback<() => void>(() => {
    setIsOpen(false);
  }, []);

  return (
    <BottomSheetContainer>
      <BottomSheetOverlay visible={visible} />
      <BottomSheetWrapper
        visible={visible}
        /**
         * 모달은 어떤 트리거를 통해 화면에 그려지기 때문에
         * 페이지 내에서 키보드로 포커스 될 필요가 없다.
         * 따라서 명시적으로 -1로 설정해두어 불필요한 키보드 이동을 방지한다
         */
        tabIndex={-1}
      >
        <BottomSheetInner ref={BottomSheetRef}>
          {closable && (
            <CloseIconButton onClick={onClickCloseIconHandler}>
              <CloseIcon src="https://wliv.kr/img/x-icon.svg" alt="닫기 버튼" />
            </CloseIconButton>
          )}
          {children}
          {completable && (
            <CompleteButtonContainer>
              <CompleteButton onClick={onClickCompleteButtonHandler}>
                확인
              </CompleteButton>
            </CompleteButtonContainer>
          )}
        </BottomSheetInner>
      </BottomSheetWrapper>
    </BottomSheetContainer>
  );
};

export default BottomSheet;

BottomSheet.defaultProps = {
  closable: true,
  completable: true,
  visible: false,
};

const BottomSheetContainer = styled.div``;

interface IBottomSheetOverlayTypes {
  visible: boolean;
}

const BottomSheetOverlay = styled.div<IBottomSheetOverlayTypes>`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

interface IBottomSheetWrapperTypes {
  visible: boolean;
}

const BottomSheetWrapper = styled.div<IBottomSheetWrapperTypes>`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;

  max-width: 414px;
  margin: 0 auto;
`;

const BottomSheetInner = styled.div`
  position: absolute;
  bottom: 0;
  width: -webkit-fill-available;

  background-color: var(--dark-pink-800);
  border-radius: 10px 10px 0 0;
  max-width: 480px;

  margin: 0 auto;
  padding: 40px 20px;
`;

const CloseIconButton = styled.button`
  position: absolute;
  top: 13px;
  right: 15px;

  border: none;
  background-color: inherit;
  padding: 5px;
`;

const CloseIcon = styled.img`
  width: 12px;
`;

const CompleteButtonContainer = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const CompleteButton = styled.button`
  width: 60px;
  height: 30px;

  border: none;
  border-radius: 20px;
  background-color: var(--white);
  color: var(--white);
`;
