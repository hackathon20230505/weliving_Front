import { FunctionComponent } from "react";
import CommonContentContainer from "../Common/CommonContentContainer";
import styled from "styled-components";
import { useNavigate } from "react-router";
type AnswerGPTProps = {};

const AnswerGPT: FunctionComponent<AnswerGPTProps> = () => {
  const navigate = useNavigate();
  const onClickNextButtonHandler = () => {
    navigate("/afterwrite/3");
  };
  return (
    <CommonContentContainer xPadding="5%">
      <SpeechBubbleContainer>
        당신은 이 세상에서 소중하고 사랑스러운 사람이라는 것을 말씀해주셨습니다.
        하지만, 삶의 힘든 부분에서 멘탈적인 피로가 누적되어 스스로를 버리고자
        하시는 것 같습니다. 하지만, 그런 결정은 잘못된 것입니다. 당신이 살아있을
        때 귀하게 생각했던 사람들은 당신의 사랑과 지지를 받을 필요가 있습니다.
        그저 이 세상에 존재하는 것만으로, 당신은 이미 그들에게 큰 가치를 지닌
        존재입니다. 우리와 함께 세상을 다시 바라보며, 삶의 아름다움과 영광을
        찾아 나아갈 수 있도록 합시다
      </SpeechBubbleContainer>
      <LogInButton onClick={onClickNextButtonHandler}>다음</LogInButton>
    </CommonContentContainer>
  );
};

export default AnswerGPT;

const SpeechBubbleContainer = styled.div`
  padding: 24px 20px 32px;

  background-color: #fff0ff;
  border-radius: 4px;

  font-weight: 400;
  font-size: 16px;
  color: #111111;
`;

const LogInButton = styled.button`
  width: 90%;
  height: 56px;

  margin-bottom: 12px;

  background-color: var(--main-color);
  border-radius: 4px;

  font-weight: 700;

  position: absolute;
  bottom: 10px;
`;