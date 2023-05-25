import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";

type CatDailyContentProps = {};

const CatDailyContent: FunctionComponent<CatDailyContentProps> = () => {
  // 변수 선언
  const [title, setTitle] = useState("나를 힘들게 하는 것은 무엇인가요?");
  const [content, setContent] = useState(
    "나는 어떤 어려움이 있었고 즐거운 감정과 슬픈 감정이 많았어.",
  );

  // 리디렉션 선언
  const navigate = useNavigate();
  const goToEditPage = () => {
    navigate("/cat-daily-edit");
  };
  const goToListPage = () => {
    navigate("/cat-daily-list");
  };

  return (
    <div>
      <div className="title">{title}</div>
      <div className="content">
        <p>{content}</p>
      </div>
      <button onClick={goToEditPage}>수정하기</button>
      <button onClick={goToListPage}>목차</button>
    </div>
  );
};

export default CatDailyContent;
