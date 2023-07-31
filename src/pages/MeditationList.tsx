import { FunctionComponent } from "react";
import ViewMeditationHeader from "../components/ViewMeditation/MeditationHeader";
import ViewMeditationBody from "../components/ViewMeditation/MeditationBody";
import PageContainer from "../components/Common/PageContainer.tsx";
import styled from "styled-components";

type ViewMeditationProps = {};

const ViewMeditation: FunctionComponent<ViewMeditationProps> = () => {
  return (
    <PageContainer>
      <ViewMeditationContainer>
        <ViewMeditationHeader />
        {/* <ViewMeditationFilter /> */}
        <ViewMeditationBody />
      </ViewMeditationContainer>
    </PageContainer>
  );
};

const ViewMeditationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export default ViewMeditation;
