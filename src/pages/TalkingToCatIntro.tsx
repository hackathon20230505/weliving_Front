import { FunctionComponent, useState } from "react";

type TalkingToCatIntroProps = {};

const TalkingToCatIntro: FunctionComponent<TalkingToCatIntroProps> = () => {
  const [activeTab, setActiveTab] = useState("Test");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      {/* 뒤로가기 버튼 */}
      <button
        onClick={() => {
          /* 뒤로가기 액션 */
        }}
      >
        뒤로가기
      </button>

      {/* 타이틀 */}
      <h1>고양이와 대화하기</h1>

      {/* 탭 */}
      <div>
        <button onClick={() => handleTabClick("Test")}>테스트냥이</button>
        <button onClick={() => handleTabClick("Diary")}>일기냥이</button>
      </div>

      {/* 테스트냥이 */}
      {activeTab === "Test" && (
        <div>
          <div>
            <p>아 이 고양이요?</p>
            <p>문답을 테스트하는 고양이에요.</p>
            <p>
              그리고 통계를 내서 다른 분들이 어떻게 생각하는지 알려줄거에요.
            </p>
            <p>잠시 맡아주시겠어요?</p>
          </div>
          <img src="/path-to-cat-image1" alt="Test Cat" />
          <button
            onClick={() => {
              /* 잠시 맡기 버튼 액션 */
            }}
          >
            잠시 맡기
          </button>
        </div>
      )}

      {/* 일기냥이 */}
      {activeTab === "Diary" && (
        <div>
          <div>
            <p>아 이 고양이요?</p>
            <p>일주일간 매일 정해진 시간에 고객님이 누구인지를 알려드려요.</p>
            <p>
              그리고 통계를 내서 다른 분들이 어떻게 생각하는지 알려줄거에요.
            </p>
            <p>일주일간 잠시 맡아주시겠어요?</p>
          </div>
          <img src="/path-to-cat-image2" alt="Diary Cat" />
          <button
            onClick={() => {
              /* 잠시 맡기 버튼 액션 */
            }}
          >
            잠시 맡기
          </button>
        </div>
      )}
    </div>
  );
};

export default TalkingToCatIntro;
