import { FunctionComponent } from "react";
import styled from "styled-components";

type FullModalProps = {
  title?: string;
  children: React.ReactNode;
};

const FullModal: FunctionComponent<FullModalProps> = ({ title, children }) => {
  // const onClickCloseIconHandler = () => {};

  return (
    <FullModalContainer>
      <FullModalHeader>
        <FullModalHeaderTitle>{title}</FullModalHeaderTitle>
        {/*<CloseIconButton onClick={onClickCloseIconHandler}>*/}
        <CloseIconButton>
          <CloseIcon src="https://welldie.com/img/x-icon.svg" alt="닫기 버튼" />
        </CloseIconButton>
      </FullModalHeader>
      <FullModalBody>{children}</FullModalBody>
    </FullModalContainer>
  );
};

export default FullModal;

const FullModalContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const FullModalHeader = styled.div`
  width: 100%;
  height: 56px;

  display: flex;
  align-items: center;

  background-color: var(--dark-pink-800);
  border-radius: 24px 24px 0 0;
`;

const FullModalHeaderTitle = styled.p`
  margin-left: 20px;

  font-weight: 700;
  font-size: 18px;
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

const FullModalBody = styled.div`
  background-color: var(--white);
  height: calc(100% - 56px);
`;
