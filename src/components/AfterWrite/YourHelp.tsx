import { FunctionComponent, useEffect, useState } from "react";
import CommonContentContainer from "../Common/CommonContentContainer";
import styled, { css } from "styled-components";
import TheMoon from "./TheMoon";
import { useNavigate } from "react-router-dom";
import CheckBox from "../Common/CheckBox";
type YourHelpProps = {};

const YourHelp: FunctionComponent<YourHelpProps> = () => {
  /** 인증번호 발송 눌렀을 때 */
  const [isSended, setIsSended] = useState<boolean>(false);

  /** 버튼 활성화 */
  const [isActive, setIsActive] = useState<boolean>(false);
  const [phoneInput, setPhoneInput] = useState<string>("");

  const navigate = useNavigate();

  // text to format phone number 000-0000-0000
  const phoneConverter = (phoneNumber: string) => {
    const number = phoneNumber.trim().replace(/[^0-9]/g, "");

    if (number.length < 4) return number;
    if (number.length < 7) return number.replace(/(\d{3})(\d{1})/, "$1-$2");
    if (number.length < 11)
      return number.replace(/(\d{3})(\d{3})(\d{1})/, "$1-$2-$3");
    return number.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
  };

  const sendAuthNumber = () => {
    const phoneRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if (!phoneRegex.test(phoneInput)) {
      alert("휴대전화 번호를 정확히 입력해주세요.");
      return;
    }

    setIsSended(true);
  };

  const verifyAuthNumber = () => {
    setIsActive(true);
  };

  const phoneInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = phoneConverter(e.target.value);
    setPhoneInput(phone);
  };

  const buttonHandler = () => {
    navigate("/");
  };

  return (
    <CommonContentContainer
      marginTop="0px"
      yPadding="2rem"
      height="100%"
      xPadding="5%"
    >
      <YourHelpContainer>
        <YourHelpTopContainer>
          <TheMoonContainer>
            <TheMoon />
          </TheMoonContainer>
          <YourHelpTopTitle>당신에게 도움이 되고 싶어요</YourHelpTopTitle>
          <YourHelpTopDescription>
            연락처를 남겨주시면
            <br />
            글귀, 에세이와 같은 컨텐츠를 제공해드려요
          </YourHelpTopDescription>
          <YoutHelpForm>
            <YourHelpInputForm>
              <YourHelpInputBox>
                <YourHelpInput
                  onChange={phoneInputChangeHandler}
                  value={phoneInput}
                  maxLength={13}
                  type="text"
                  placeholder="휴대전화 번호 입력"
                />
              </YourHelpInputBox>
              <YourHelpInputButton onClick={sendAuthNumber}>
                인증번호 발송
              </YourHelpInputButton>
            </YourHelpInputForm>
          </YoutHelpForm>
          {isSended && (
            <YourHelpInputForm>
              <YourHelpInputBox>
                <YourHelpInput type="number" placeholder="인증번호 입력" />
              </YourHelpInputBox>
              {isActive ? (
                <YourHelpInputButtonFinish>인증완료</YourHelpInputButtonFinish>
              ) : (
                <YourHelpInputButton onClick={verifyAuthNumber}>
                  인증번호 확인
                </YourHelpInputButton>
              )}
            </YourHelpInputForm>
          )}
          {isActive && (
            <CheckBoxContainer>
              <CheckBox isChecked={true} />
              <CheckBoxText>인증성공!</CheckBoxText>
            </CheckBoxContainer>
          )}
        </YourHelpTopContainer>
        <ButtonGroupContainer>
          <ButtonGroupButtonOutline onClick={buttonHandler} isActive={isActive}>
            안 받기
          </ButtonGroupButtonOutline>
          <ButtonGroupButtonFiiled onClick={buttonHandler} isActive={isActive}>
            받기
          </ButtonGroupButtonFiiled>
        </ButtonGroupContainer>
      </YourHelpContainer>
    </CommonContentContainer>
  );
};

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBoxText = styled.span`
  margin-left: 8px;
`;

const YourHelpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TheMoonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const ButtonGroupButton = css`
  width: 100%;
  padding: 1rem;
  font-weight: bold;
`;

const YourHelpTopContainer = styled.div`
  padding-top: 3rem;
`;

const YourHelpTopTitle = styled.div`
  margin-top: 1.5rem;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
`;

const YourHelpTopDescription = styled.div`
  margin-top: 0.75rem;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  color: #cbcbcb;
`;

const YoutHelpForm = styled.div`
  margin-top: 1.5rem;
`;

const YourHelpInputForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

const YourHelpInputBox = styled.div`
  border: 1px solid #db0fdb;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
`;

const YourHelpInput = styled.input`
  width: 100%;
`;

const YourHelpInputButton = styled.button`
  padding: 1rem;
  white-space: nowrap;
  background-color: #f3bcf2;
  color: black;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  min-width: 30%;
  font-weight: 500;
`;

const YourHelpInputButtonFinish = styled.button`
  padding: 1rem;
  white-space: nowrap;
  background-color: #db0fdb;
  color: white;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  min-width: 30%;
  font-weight: 500;
`;

interface ButtonGroupButtonProps {
  isActive: boolean;
}

const ButtonGroupButtonOutline = styled.button<ButtonGroupButtonProps>`
  border: 1px solid ${({ isActive }) => (isActive ? "#db0fdb" : "#5b2950")};
  color: ${({ isActive }) => (isActive ? "#db0fdb" : "#5b2950")};
  ${ButtonGroupButton}
  border-radius: 0.5rem;
`;

const ButtonGroupButtonFiiled = styled.button<ButtonGroupButtonProps>`
  color: ${({ isActive }) => (isActive ? "#ffffff" : "#ffffff50")};
  background-color: ${({ isActive }) => (isActive ? "#db0fdb" : "#5b2950")};
  ${ButtonGroupButton}
  border: none;
  border-radius: 0.5rem;
`;

export default YourHelp;
