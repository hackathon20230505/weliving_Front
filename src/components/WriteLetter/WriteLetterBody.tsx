import { FunctionComponent } from "react";
import styled from "styled-components";
type WriteLetterBodyProps = {};

const WriteLetterBody: FunctionComponent<WriteLetterBodyProps> = () => {
  return (
    <WriteLetterBodyContainer>
      <WriteLetterTitleInput placeholder="제목" />
      <WriteLetterConteintInput placeholder="무슨 이야기를 나누고 싶으세요. " />
      <RulesOfUseGropContainer></RulesOfUseGropContainer>
    </WriteLetterBodyContainer>
  );
};

export default WriteLetterBody;

const WriteLetterBodyContainer = styled.main``;

const WriteLetterTitleInput = styled.input`
  width: 100%;
  height: 56px;
  padding: 14px 0;

  font-weight: 700;
  font-size: 18px;

  border-bottom: 1px solid #4b0b50;

  margin-bottom: 24px;

  &::placeholder {
    color: #867388;
  }
`;

const WriteLetterConteintInput = styled.textarea`
  height: 212px;

  &::placeholder {
    color: #867388;
  }
`;

const RulesOfUseGropContainer = styled.div``;
