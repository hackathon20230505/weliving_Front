import { FunctionComponent, useState } from "react";
import CommonContentContainer from "../Common/CommonContentContainer";
import styled from "styled-components";
type YourHelpProps = {};

const YourHelp: FunctionComponent<YourHelpProps> = () => {
  const [phone, setPhone] = useState<string>("");
  const [validNumber, setValidNumber] = useState<string>("");

  /** 인증번호 발송 눌렀을 때 */
  const [isSended, setIsSended] = useState<boolean>(false);

  /** 버튼 활성화 */
  const [isActive, setIsActive] = useState<boolean>(false);

  const onChangePhoneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    // 숫자만 입력
    if (isNaN(Number(value))) return;
    setPhone(value);
  };

  const onChangeValidNumberHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;

    // 숫자만 입력
    if (isNaN(Number(value))) return;
    setValidNumber(value);
  };

  const onClickSendButtonHandler = () => {
    setIsSended(true);
  };

  const onClickValidButtonHandler = () => {
    setIsActive(true);
  };
  return (
    <CommonContentContainer xPadding="5%">
      <YourHelpTitleContainr>
        <YourHelpTitle>당신에게 도움이 되고 싶어요</YourHelpTitle>
      </YourHelpTitleContainr>
      <YourHelpDescriptionContainer>
        <YourHelpDescription>연락처를 남겨주시면</YourHelpDescription>
        <YourHelpDescription>
          글귀, 에세이와 같은 컨텐츠를 제공해드려요
        </YourHelpDescription>
      </YourHelpDescriptionContainer>
      <PhoneInputGroupContainer>
        <PhoneInputContainer>
          <PhoneInput
            type="text"
            placeholder="휴대전화 번호 입력"
            value={phone}
            maxLength={11}
            onChange={onChangePhoneHandler}
          />
          <SendButton onClick={onClickSendButtonHandler}>
            인증번호 발송
          </SendButton>
        </PhoneInputContainer>
        {isSended && (
          <PhoneInputContainer>
            <PhoneInput
              type="text"
              placeholder="인증번호 입력"
              value={validNumber}
              maxLength={11}
              onChange={onChangeValidNumberHandler}
            />
            <SendButton onClick={onClickValidButtonHandler}>
              인증번호 확인
            </SendButton>
          </PhoneInputContainer>
        )}
      </PhoneInputGroupContainer>
      <ButtonGroupContainer>
        <NoButton isActive={isActive}>안 받기</NoButton>
        <YesButton isActive={isActive}>연락받기</YesButton>
      </ButtonGroupContainer>
    </CommonContentContainer>
  );
};

export default YourHelp;

const YourHelpTitleContainr = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  margin: 30vh 0 8px;
`;
const YourHelpTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  color: var(--white);
`;

const YourHelpDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const YourHelpDescription = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #cbcbcb;
`;

const PhoneInputContainer = styled.div`
  display: flex;
  margin-top: 16px;
`;

const PhoneInput = styled.input`
  width: 70%;
  height: 56px;
  padding: 17px;
  border: 1px solid var(--main-color);
  border-radius: 4px 0px 0px 4px;
`;

const SendButton = styled.button`
  width: 30%;
  height: 56px;

  background-color: #f3bcf2;
  border-radius: 0px 4px 4px 0px;

  font-weight: 700;
  font-size: 14px;
  color: #111;
`;

const PhoneInputGroupContainer = styled.div`
  margin-top: 5vh;
`;

const ButtonGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface ISubmitButtonTypes {
  isActive: boolean;
}

const NoButton = styled.button<ISubmitButtonTypes>``;

const YesButton = styled.button<ISubmitButtonTypes>``;
