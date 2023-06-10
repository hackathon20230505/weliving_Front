import styled from "styled-components";
import FailIconSVG from "../../assets/svgs/fail.svg";

const FailComponent = () => {
  return (
    <FailComponentContainer>
      <FailIcon>
        <img src={FailIconSVG} alt="실패 아이콘" />
      </FailIcon>
      <FailMsg>API 호출에 실패했습니다</FailMsg>
    </FailComponentContainer>
  );
};

const FailComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 56px;
  left: 0;
  z-index: 1000;
  width: 100vw;
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
  padding: 2rem;

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

export default FailComponent;
