import { FunctionComponent, useState } from "react";

type CatDailyListProps = {};

const CatDailyList: FunctionComponent<CatDailyListProps> = () => {
  return (
    <div>
      <div>일기냥이 목차</div>
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
              <td>오늘은 어땠나요?</td>
              <td>23-03-02</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CatDailyList;
