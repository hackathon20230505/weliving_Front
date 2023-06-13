import styled from "styled-components";
import FailIconSVG from "../../assets/svgs/fail.svg";

interface FailComponentProps {
  top?: string;
}

const FailComponent = ({ top = "56px" }: FailComponentProps) => {
  return (
    <FailComponentContainer topSize={top}>
      <FailIcon>
        <img src={FailIconSVG} alt="실패 아이콘" />
      </FailIcon>
      <FailMsg>데이터를 불러오지 못했습니다</FailMsg>
      <FailMsgSub>관리자에게 문의해주세요</FailMsgSub>
    </FailComponentContainer>
  );
};

interface FailComponentContainerProps {
  topSize: string;
}

const FailComponentContainer = styled.div<FailComponentContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: ${({ topSize }) => topSize};
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  width: min(100vw, 414px);
  height: calc(100% - 56px);
  background: var(--black-900);
`;

const FailIcon = styled.div`
  width: 35%;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgba(148, 148, 148, 0.11);
  padding: 1.2rem;

  & > img {
    width: 100%;
  }
`;

const FailMsg = styled.p`
  font-weight: 700;
  font-size: 1.25rem;
  margin-top: 1.5rem;
  text-align: center;
`;

const FailMsgSub = styled.p`
  font-weight: 700;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  text-align: center;
  opacity: 0.5;
`;

export default FailComponent;
