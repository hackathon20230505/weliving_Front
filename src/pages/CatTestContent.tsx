import { FunctionComponent, useState } from "react";

type IntroProps = {};

const TestCatContent: FunctionComponent<IntroProps> = () => {
  const [showResult, setShowResult] = useState(false);
  const [activity, setActivity] = useState("");
  const [activity2, setActivity2] = useState("");
  const [activity3, setActivity3] = useState("");
  const [warning, setWarning] = useState("");
  const [catStatus, setCatStatus] = useState("슬픈 고양이");

  const showResults = () => {
    if (activity !== "" && activity2 !== "" && activity3 !== "") {
      setWarning("");
      const sum = Number(activity) + Number(activity2) + Number(activity3);
      if (sum > 20) {
        setCatStatus("우울한 고양이");
      } else if (sum > 10) {
        setCatStatus("행복한 고양이");
      }
      setShowResult(true);
    } else {
      setWarning("모든 설문지에 답변해주셔야 해요");
    }
  };

  return (
    <div>
      {showResult == false && (
        <div>
          <div>우울 증상 테스트</div>
          {warning && <div>{warning}</div>}
          <form>
            <div className="question_1">
              <div>
                Question 1: 일 또는 여가 활동을 하는데 흥미나 즐거움을 느끼지
                못해요
              </div>
              <div>
                <input
                  type="radio"
                  name="activity"
                  value="0"
                  onChange={(e) => setActivity(e.target.value)}
                />
                <input
                  type="radio"
                  name="activity"
                  value="1"
                  onChange={(e) => setActivity(e.target.value)}
                />
                <input
                  type="radio"
                  name="activity"
                  value="2"
                  onChange={(e) => setActivity(e.target.value)}
                />
                <input
                  type="radio"
                  name="activity"
                  value="3"
                  onChange={(e) => setActivity(e.target.value)}
                />
              </div>
            </div>
            <div className="question_2">
              <div>Question 2: </div>
              <div>
                <input
                  type="radio"
                  name="activity2"
                  value="0"
                  onChange={(e) => setActivity2(e.target.value)}
                />
                <input
                  type="radio"
                  name="activity2"
                  value="1"
                  onChange={(e) => setActivity2(e.target.value)}
                />
                <input
                  type="radio"
                  name="activity2"
                  value="2"
                  onChange={(e) => setActivity2(e.target.value)}
                />
                <input
                  type="radio"
                  name="activity2"
                  value="3"
                  onChange={(e) => setActivity2(e.target.value)}
                />
              </div>
            </div>
            <div className="question_3">
              <div>Question 3: </div>
              <div>
                <input
                  type="radio"
                  name="activity3"
                  value="0"
                  onChange={(e) => setActivity3(e.target.value)}
                />
                <input
                  type="radio"
                  name="activity3"
                  value="1"
                  onChange={(e) => setActivity3(e.target.value)}
                />
                <input
                  type="radio"
                  name="activity3"
                  value="2"
                  onChange={(e) => setActivity3(e.target.value)}
                />
                <input
                  type="radio"
                  name="activity3"
                  value="3"
                  onChange={(e) => setActivity3(e.target.value)}
                />
              </div>
            </div>
          </form>
          <button onClick={showResults}>결과보기</button>
        </div>
      )}

      {showResult && (
        <div>
          <div>출처</div>
          <img src="image.jpg" alt="Result" />
          <div>결과가 나왔어요</div>
          <div>{catStatus}</div>
          <div>우울증 중간</div>
          <div>약간 심할 수준의 우울감을 자주 보이는 것으로 보입니다</div>
        </div>
      )}
    </div>
  );
};

export default TestCatContent;
