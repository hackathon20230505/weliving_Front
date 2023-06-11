import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type WillBeforeQuestionProps = {};

// 페이지 번호
const PageNumber: FunctionComponent<{
  pageNumber: number;
  currentPage: number;
}> = ({ pageNumber, currentPage }) => {
  return (
    <div className={currentPage === pageNumber ? "active" : ""}>
      {pageNumber}
    </div>
  );
};

const WillBeforeQuestion: FunctionComponent<WillBeforeQuestionProps> = () => {
  // State 생성
  const [page, setPage] = useState(0);
  const [memorableMoment, setMemorableMoment] = useState("");
  const [apologeticMoment, setApologeticMoment] = useState("");
  const [thirdInput, setThirdInput] = useState("");
  const [thinkAboutDeath, setThinkAboutDeath] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // 경로 이동
  const navigate = useNavigate();

  // 위험군인 경우 홈으로 이동
  const handleGoBack = () => {
    navigate("/home");
  };

  //  일지 작성 페이지로 이동
  const handleGoNextPage = () => {
    navigate("/will-write");
  };

  // 뒤로가기 버튼
  const handleBack = () => {
    if (page > 1) {
      setPage(page - 1);
    }
    if (page === 1) {
      setPage(0);
    }
    if (page === 0) {
      navigate("/home");
    }
  };

  // 페이지 이동 처리
  const handleNext = () => {
    if (page === 1 && memorableMoment === "") {
      setErrorMsg("내용을 채워주세요");
    } else if (page === 2 && apologeticMoment === "") {
      setErrorMsg("내용을 채워주세요");
    } else if (page === 3 && thirdInput === "") {
      setErrorMsg("내용을 채워주세요");
    } else if (page === 4 && thinkAboutDeath === "") {
      setErrorMsg("선택해주세요");
    } else {
      setErrorMsg("");
      if (page === 4 && thinkAboutDeath === "yes") {
        const isReallyThinking = true;
        //const isReallyThinking = window.confirm("정말로 죽음을 생각중이신가요?"); // 보류
        if (isReallyThinking) {
          setPage(8);
        } else {
          // 아무것도 하지 않음
        }
      } else {
        setPage(page + 1);
      }
    }
  };

  useEffect(() => {
    if (page === 6) {
      const timer = setTimeout(() => {
        setPage(7);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [page]);

  return (
    <div>
      {page > -1 && page < 5 && (
        <div>
          <div
            className="back-button"
            onClick={handleBack}
            aria-label="뒤로가기"
            role="button"
            tabIndex={0}
          >
            &lt;
          </div>
        </div>
      )}

      {page >= 1 && page <= 5 && (
        <div>
          {[1, 2, 3, 4, 5].map((i) => (
            <PageNumber pageNumber={i} currentPage={page} />
          ))}
        </div>
      )}
      {page === 0 && (
        <>
          <img src="your_image_path" alt="Introduction Image" />
          <div>어서오세요.</div>
          <div>당신에게 신이라 불리우는 존재.</div>
          <div>먼길을 오셨군요. 당신에 대해 말해주세요</div>
          <button onClick={handleNext}>다음</button>
        </>
      )}
      {page === 1 && (
        <>
          <div>지금 기억에 남는 순간은 언제인가요?</div>
          <input
            type="text"
            value={memorableMoment}
            onChange={(e) => setMemorableMoment(e.target.value)}
          />
          <button onClick={handleNext}>다음</button>
          {errorMsg && <div>{errorMsg}</div>}
        </>
      )}
      {page === 2 && (
        <>
          <div>가족에게 가장 미안한 순간은 언제인가요?</div>
          <input
            type="text"
            value={apologeticMoment}
            onChange={(e) => setApologeticMoment(e.target.value)}
          />
          <button onClick={handleNext}>다음</button>
          {errorMsg && <div>{errorMsg}</div>}
        </>
      )}
      {page === 3 && (
        <>
          <div>지금 기억에 남는 순간은 언제인가요?</div>
          <input
            type="text"
            value={thirdInput}
            onChange={(e) => setThirdInput(e.target.value)}
          />
          <button onClick={handleNext}>다음</button>
          {errorMsg && <div>{errorMsg}</div>}
        </>
      )}
      {page === 4 && (
        <>
          <div>지금 죽음을 생각하고 있나요?</div>
          <div>
            <input
              type="radio"
              id="yes"
              name="thinkAboutDeath"
              value="yes"
              onChange={(e) => setThinkAboutDeath(e.target.value)}
            />
            <label htmlFor="yes">네</label>
            <input
              type="radio"
              id="no"
              name="thinkAboutDeath"
              value="no"
              onChange={(e) => setThinkAboutDeath(e.target.value)}
            />
            <label htmlFor="no">아니오</label>
          </div>
          <button onClick={handleNext}>다음</button>
          {errorMsg && <div>{errorMsg}</div>}
        </>
      )}
      {page === 5 && (
        <>
          <div> 일지 작성 전 마지막 질문입니다</div>
          <div>마지막으로 만나고 싶은 사람은 누구인가요?</div>
          <input
            type="text"
            value={thirdInput}
            onChange={(e) => setThirdInput(e.target.value)}
          />
          <button onClick={handleNext}>다음</button>
          {errorMsg && <div>{errorMsg}</div>}
        </>
      )}
      {page === 6 && (
        <>
          <div>글을 읽고있어요</div>
          <div>잠시만 기다려주세요</div>
        </>
      )}
      {page === 7 && (
        <>
          <div>
            "부모님과 사이가 좋지 않았군요. <br />
            학교 생활은 좋았고학교폭력을 겪으셨군요. <br />
            살면서 경제적으로 힘들 때도 있었고지금 가장 생각나는 친구가 있군요.
            <br />
            그대를 기억하겠습니다. <br />
            같이 한번 일지를 작성해보도록 하죠."
          </div>
          <button onClick={handleGoNextPage}> 일지 작성하기</button>
        </>
      )}
      {page === 8 && (
        <>
          <div>당신은 소중한 존재에요.</div>
          <div>자살예방상담 : 1393</div>
          <div>미안하지만 유서는 받지 않을게요. 이렇게 멋진 사람인데...</div>
          <div>
            2년만 더 삶을 경험해보고 오세요 그 때 저를 찾아도 늦이 않아요
            기다릴테니 당신의 이야기를 들려줘요.
          </div>
          <button onClick={handleGoBack}>돌아가기</button>
        </>
      )}
    </div>
  );
};

export default WillBeforeQuestion;
