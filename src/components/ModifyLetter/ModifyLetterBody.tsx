import styled from "styled-components";
import CommonContentContainer from "../Common/CommonContentContainer";
import { useEffect, useState } from "react";
import { getMyLetter } from "../../apis/life/letter/getMyLetter";

interface MyLetterPost {
  title: string;
  content: string;
}

interface IModifyLetterBody {
  myLetterPost: MyLetterPost;
  originalLetterPost: MyLetterPost;
  setMyLetterPost: React.Dispatch<React.SetStateAction<MyLetterPost>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModifyLetterBody = ({
  myLetterPost,
  originalLetterPost,
  setMyLetterPost,
  setIsActive,
}: IModifyLetterBody) => {
  const onChangeLetter = (e) => {
    const targetName = e.target.name;

    setMyLetterPost((prev) => {
      const next = {
        ...prev,
        [targetName]: e.target.value,
      };

      setIsActive(
        next.title.length > 0 &&
          next.content.length > 0 &&
          (next.title !== originalLetterPost.title ||
            next.content !== originalLetterPost.content),
      );

      return next;
    });
  };

  return (
    <CommonContentContainer xPadding="5%">
      <WriteLetterTitleInput
        placeholder="제목"
        maxLength={150}
        name="title"
        value={myLetterPost.title}
        onChange={onChangeLetter}
      />
      <WriteLetterConteintInput
        placeholder="무슨 이야기를 나누고 싶으세요?"
        maxLength={1000}
        name="content"
        value={myLetterPost.content}
        onChange={onChangeLetter}
      />
      <RulesOfUseGropContainer>
        {/* <ViewRulesOfUseGroupContainer>
          <ViewRulesOfUseButton
            onClick={() => {
              setIsShowTerm(true);
            }}
          >
            이용규칙 전체보기
          </ViewRulesOfUseButton>
        </ViewRulesOfUseGroupContainer> */}
        <RulesOfUseGroupDescription>
          지금 쓰고계신 내용은 공유되며 모두 익명으로 저장됩니다. <br />
          규정에 어긋나는 내용은 삭제처리가 될 수 있습니다.
        </RulesOfUseGroupDescription>
      </RulesOfUseGropContainer>
    </CommonContentContainer>
  );
};

export default ModifyLetterBody;

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
  height: calc(100vh - 330px);

  &::placeholder {
    color: #867388;
  }
`;

const RulesOfUseGropContainer = styled.div``;

const ViewRulesOfUseGroupContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ViewRulesOfUseButton = styled.button`
  width: 120px;
  height: 24px;

  font-weight: 700;
  font-size: 12px;
  color: #999999;

  background-color: #352638;
  border-radius: 200px;

  margin: 11px 0;
`;

const RulesOfUseGroupDescription = styled.p`
  font-weight: 700;
  font-size: 12px;
  color: #999999;
`;
