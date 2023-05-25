import { FunctionComponent, useState } from "react";

type CatDailyContentEditProps = {};

const CatDailyContentEdit: FunctionComponent<CatDailyContentEditProps> = () => {
  // 변수 선언
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  // 결과 출력
  const handleSave = () => {
    if (text === "") {
      setMessage("내용을 입력해주세요");
    } else {
      setMessage("저장되었습니다.");
      // TODO: Save the text somewhere
    }
  };

  return (
    <div>
      <div>오늘의 주제</div>
      <div>나를 힘들게 하는 것은 무엇인가요?</div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSave}>저장</button>
      <div>{message}</div>
    </div>
  );
};

export default CatDailyContentEdit;
