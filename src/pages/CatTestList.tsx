import { FunctionComponent } from "react";

type TestCatListProps = {};

const TestCatList: FunctionComponent<TestCatListProps> = () => {
  return (
    <div>
      <div>텍스트냥이 목차</div>
      <div>
        <h2>게시판 카테고리 헤드</h2>
        <table>
          <thead>
            <tr>
              <th>제목</th>
              <th>작성일</th>
            </tr>
          </thead>
        </table>
      </div>
      <div>
        <h2>게시판 카테고리 내용</h2>
        <table>
          <tbody>
            <tr>
              <td>우울증상 테스트</td>
              <td>10분 소요</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestCatList;
