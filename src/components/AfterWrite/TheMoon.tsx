import styled, { keyframes } from "styled-components";

const TheMoon = () => {
  return <TheMoonContent />;
};

// back light bloom small to big animation
const backLightBloom = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.4);
  }
  50% {
    transform: scale(1.2);
  }
  75% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
`;

const TheMoonContent = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;

  &:after {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    filter: blur(16px);
    opacity: 0.5;
    animation: ${backLightBloom} 4s linear infinite;
  }
`;

export default TheMoon;
