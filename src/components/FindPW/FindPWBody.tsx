import { ChangeEvent, FunctionComponent, useState } from "react";
import styled from "styled-components";
import { isValidUserEmailFunc } from "../../utils/isValid/isValidUserData";
import { useNavigate, useParams } from "react-router-dom";
import CommonContentContainer from "../Common/CommonContentContainer";

type FindPWBodyProps = {};

const FindPWBody: FunctionComponent<FindPWBodyProps> = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [isValidUserEmail, setIsValidUserEmail] = useState<boolean>(false);

  const navigate = useNavigate();
  const { id } = useParams();

  /** user email input 값 설정 */
  const onChangeUserEmailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const currValue = event.target.value;

    if (currValue === null) return;

    setUserEmail(currValue);

    if (isValidUserEmailFunc(currValue)) {
      setIsValidUserEmail(true);
    } else {
      setIsValidUserEmail(false);
    }
  };

  const onClickNextButtonHandler = () => {
    navigate("/findpw/2");
  };

  const onClickGoBackButtonHandler = () => {
    navigate("/logIn");
  };

  return (
    <CommonContentContainer xPadding="5%">
      {id === "1" && (
        <>
          <FindPWBodyDescription>
            가입 시 사용한 이메일 주소를 입력해주세요.
          </FindPWBodyDescription>
          <FindPWInputGroupContainer>
            <FindPWInputLabel htmlFor="userEmail">이메일</FindPWInputLabel>
            <FindPWInput
              id="userEmail"
              type="text"
              placeholder="예) pmr7348.naver.com"
              isValidUserEmail={isValidUserEmail}
              value={userEmail}
              onChange={onChangeUserEmailHandler}
            />
            {!isValidUserEmail && (
              <NotValidText>이메일 주소를 확인하세요.</NotValidText>
            )}
          </FindPWInputGroupContainer>
          <FindPWButton
            isValid={isValidUserEmail}
            disabled={!isValidUserEmail}
            onClick={onClickNextButtonHandler}
          >
            다음
          </FindPWButton>
        </>
      )}
      {id === "2" && (
        <>
          <FindPWBigTitle>
            아래의 주소로 <br />
            비밀번호 변경 이메일을 <br />
            발송하였습니다.
          </FindPWBigTitle>
          <FindPWDescription>이메일을 확인해주세요.</FindPWDescription>
          <FindPWUserEmailText>{userEmail}</FindPWUserEmailText>
          <GoBackButton onClick={onClickGoBackButtonHandler}>
            로그인으로 돌아가기
          </GoBackButton>
        </>
      )}
    </CommonContentContainer>
  );
};

export default FindPWBody;

const FindPWBodyDescription = styled.p`
  margin: 40px 0 20px 0;

  font-weight: 400;
  font-size: 12px;
  color: #999999;
`;

const FindPWInputGroupContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 24px;
`;

const FindPWInputLabel = styled.label`
  font-size: 14px;
  font-weight: 700;
`;

interface IFindPWInputTypes {
  isValidUserEmail?: boolean;
  isValidUserPassword?: boolean;
}

const FindPWInput = styled.input<IFindPWInputTypes>`
  padding: 13px 12px 14px 12px;

  border-bottom: ${({ isValidUserEmail, isValidUserPassword }) =>
    isValidUserEmail
      ? "1px solid var(--strong-purple-800)"
      : isValidUserPassword
      ? "1px solid var(--strong-purple-800)"
      : "1px solid #F31919"};
  border-radius: 0;

  ::placeholder {
    color: var(--gray-purple);
  }
`;

interface INextButtonTypes {
  isValid: boolean;
}

const FindPWButton = styled.button<INextButtonTypes>`
  width: 100%;
  height: 56px;

  background-color: ${({ isValid }) =>
    isValid ? "var(--main-color)" : "var(--dull-pink-900)"};
  border-radius: 4px;

  font-weight: 700;
  color: ${({ isValid }) => (isValid ? "var(--white)" : "var(--gray-purple)")};
`;

const NotValidText = styled.p`
  margin-top: 6px;

  font-weight: 400;
  font-size: 12px;
  color: #f31919;
`;

// id : 2
const FindPWBigTitle = styled.p`
  margin-top: 40px;
  font-weight: 400;
  font-size: 24px;
`;

const FindPWDescription = styled.p`
  margin: 8px 0 12px 0;
  font-weight: 400;
  font-size: 12px;
  color: #999999;
`;

const FindPWUserEmailText = styled.p`
  margin: 12px 0 24px 0;
  font-weight: 700;
  font-size: 14px;
  color: var(--white);
`;

const GoBackButton = styled.button`
  width: 100%;
  height: 56px;

  margin-bottom: 12px;

  background-color: var(--main-color);
  border-radius: 4px;

  font-weight: 700;
`;
