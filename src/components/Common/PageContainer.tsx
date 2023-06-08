import styled from "styled-components";

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return <PageContainerFragment>{children}</PageContainerFragment>;
};

// styled-component
const PageContainerFragment = styled.main``;

export default PageContainer;
