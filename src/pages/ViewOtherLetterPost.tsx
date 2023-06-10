import LetterHeader from "../components/ViewMyLetter/LetterHeader.tsx";
import CommonContentContainer from "../components/Common/CommonContentContainer.tsx";
import styled from "styled-components";
import PageContainer from "../components/Common/PageContainer.tsx";

export default function ViewOtherLetterPost() {
  return (
    <PageContainer>
      <LetterHeader />
      <CommonContentContainer xPadding={"5%"}>
        <LetterPostContainer>
          <LetterPostDateText>2023.05.24</LetterPostDateText>
          <LetterPostTitle>메인 타이틀은 몇 글자까지인가?</LetterPostTitle>
          <LetterPostContent>
            시험이 다가오면서 점점 '내가 지금 하고 있는 공부 방법이 맞을까'
            불안감 때문에 슬럼프에 빠지는 수험생분들이 많을 거라 생각됩니다.
            이럴 때일수록 흔들리지 않고 합격을 향한 방향을 제대로 잡고 평소 하던
            대로 나아가야 하지 않을까요? [출처] 공무원 수험서 리뷰! 공단기 교재
            선재국어 나침판|작성자 공부서점
          </LetterPostContent>
        </LetterPostContainer>
      </CommonContentContainer>

      <CommonContentContainer>
        {/* 유서 목차 가기 */}
        <GoToOtherLetterButtonContainer>
          <GoToOtherLetterButton>
            <GoToOtherLetterText>유서 목차 보러가기</GoToOtherLetterText>
            <GoToIcon src="https://wliv.kr/img/arrow-right-icon.svg" />
          </GoToOtherLetterButton>
        </GoToOtherLetterButtonContainer>
      </CommonContentContainer>
    </PageContainer>
  );
}

const LetterPostContainer = styled.div`
  margin: 24px 0 48px;
`;

const LetterPostDateText = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #cbcbcb;
`;

const LetterPostTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  color: var(--white);

  margin: 2px 0 12px;
`;

const LetterPostContent = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: var(--white);
`;

const GoToOtherLetterButton = styled.button`
  width: 100%;
  padding: 5%;
  height: 56px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GoToOtherLetterText = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: var(--white);
`;

const GoToIcon = styled.img``;

const GoToOtherLetterButtonContainer = styled.div`
  border-top: 1px solid #4b0b50;
  border-bottom: 1px solid #4b0b50;
`;
