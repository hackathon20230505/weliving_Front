import Lottie from "lottie-react";
import Loading from "../../assets/lottie/Loading.json";
import styled from "styled-components";

const LoadingComponent = () => {
  return (
    <LoadingComponentContainer>
      <LoadingIcon>
        <Lottie animationData={Loading} loop={true} />
      </LoadingIcon>
    </LoadingComponentContainer>
  );
};

const LoadingComponentContainer = styled.div`
  display: flex;
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

const LoadingIcon = styled.div`
  width: 40%;
`;

export default LoadingComponent;
