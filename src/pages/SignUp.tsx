import React, { FunctionComponent, useState } from 'react';

type SignUpProps = {};

const SignUp: FunctionComponent<SignUpProps> = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    // 다음 버튼 클릭 이벤트 처리
    // 비밀번호 변경 이메일 발송 및 상태 업데이트 등 필요한 로직 추가

    setIsSubmitted(true); // isSubmitted 상태를 true로 업데이트
  };

  return (
      <div>
        {!isSubmitted && (
            <div className="signup-container">
              <div className="back-button">뒤로가기 버튼</div>
              <div className="forgot-password">비밀번호 찾기</div>
              <p>가입 시 사용한 이메일 주소를 입력해주세요</p>
              <label htmlFor="email" className="email-label">이메일:</label>
              <input type="email" id="email" className="email-input" />
              <button className="next-button" onClick={handleNext}>다음</button>
            </div>
        )}

        {isSubmitted && (
            <div>
              <p>아래의 주소로 비밀번호 변경 이메일을 발송하였습니다.</p>
              <p>pmr7348@naver.com</p>
              <button>로그인으로 돌아가기</button>
            </div>
        )}
      </div>
  );
};

export default SignUp;