import Lottie from "lottie-react";
import Loading from "../../assets/lottie/Loading.json";
import styled from "styled-components";

interface LoadingComponentProps {
  top?: string;
}

const LoadingComponent = ({ top = "56px" }: LoadingComponentProps) => {
  return (
    <LoadingComponentContainer topSize={top}>
      <LoadingIcon>
        <Lottie animationData={Loading} loop={true} />
      </LoadingIcon>
    </LoadingComponentContainer>
  );
};

interface LoadingComponentContainerProps {
  topSize: string;
}
const LoadingComponentContainer = styled.div<LoadingComponentContainerProps>`
  display: flex;
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

const LoadingIcon = styled.div`
  width: 40%;
`;

export default LoadingComponent;
