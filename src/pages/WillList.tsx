import { FunctionComponent } from "react";

type WillListProps = {};

const WillList: FunctionComponent<WillListProps> = () => {
  // 나이대
  const categories = ["전체", "10대", "20대", "30대", "40대", "50대 이상"];
  // 임시 제목, 내용
  const contentTitle = "메인 타이틀은 몇 글자까지";
  const content =
    "시험이 다가오면서 점점 내가 지금 하고 있는 공부 방법이 맞을까";

  // 글자 제한 함수
  const formatText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}..` : text;
  };

  return (
    <div>
      <div>유서 목차</div>
      <div>
        {categories.map((category) => (
          <div key={category}>{category}</div>
        ))}
      </div>
      {[...Array(4)].map((_, index) => (
        <div key={index}>
          <div>{formatText(contentTitle, 15)}</div>
          <div>{formatText(content, 30)}</div>
          <div>30분전</div>
        </div>
      ))}
    </div>
  );
};

export default WillList;
