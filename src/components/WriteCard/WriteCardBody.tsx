import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import CommonContentContainer from "../Common/CommonContentContainer";
import { createMyMemoryCard } from "../../apis/life/memory/createMyMemoryCard";
import "swiper/css";
import "swiper/css/pagination";

import { useRecoilState } from "recoil";
import { isPlayingState } from "../../components/MainContent/atoms/MusicStatus";
import { isPlayingStateSecond } from "../../components/MainContent/atoms/MusicStatusSecond";

type WriteCardBodyProps = {};

const WriteCardBody: FunctionComponent<WriteCardBodyProps> = () => {
  //

  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  const [isPlayingSecond, setIsPlayingSecond] =
    useRecoilState(isPlayingStateSecond);

  const toggleMusicSecond = () => {
    setIsPlayingSecond(!isPlayingSecond);
  };

  const stopMusic = () => {
    setIsPlaying(false);
  };
  //

  const navigate = useNavigate();

  const [cardInputs, setCardInputs] = useState<string[]>([""]);

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...cardInputs];
    newInputs[index] = value;
    setCardInputs(newInputs);
  };

  const handleAddInput = () => {
    if (cardInputs.length < 6) {
      setCardInputs([...cardInputs, ""]);
    }
  };

  const onClickLogInButtonHandler = () => {
    const confirmed = window.confirm("추억카드를 모두 작성하셨나요?");
    if (confirmed) {
      stopMusic();
      toggleMusicSecond();
      createMyMemoryCard(cardInputs)
        .then((letter_id) => {
          console.log(letter_id);
          navigate("/MainContentSecond");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <>
      <PaddingHeader></PaddingHeader>

      {/*  */}
      <BackgroundMusic
        style={{
          transition: "opacity 800ms, visibility 800ms",
        }}
        className={isPlaying ? "" : "BackgroundMusicCancel"}
        onClick={toggleMusic}
      >
        {isPlaying === false && <BackgroundMusicCancel></BackgroundMusicCancel>}

        <BackgroundMusicIcon></BackgroundMusicIcon>
        <BackgroundMusicText>배경 bgm</BackgroundMusicText>
      </BackgroundMusic>

      {/*  */}
      <CommonContentContainer
        xPadding="5%"
        h={"calc(100% - 56px)"}
        topSpacing={"0"}
      >
        <RulesOfUseGropContainer>
          <LogInSignUpContainer>
            <LogInButton onClick={onClickLogInButtonHandler}>다음</LogInButton>
          </LogInSignUpContainer>
          <SignUpContainer>
            <CardTitle>당신의 추억을 담아주세요</CardTitle>
            <CardSubHeaderContainer>
              <MemoriesContainer>
                <MemoriesText>최대 6개까지 담을 수 있어요.</MemoriesText>
                <MemoriesCount>{`${cardInputs.length}/6`}</MemoriesCount>
              </MemoriesContainer>
            </CardSubHeaderContainer>
            {cardInputs.map((input, index) => (
              <InputContainer key={index}>
                <input
                  type="text"
                  value={input}
                  placeholder="내용을 입력해주세요"
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              </InputContainer>
            ))}
            {cardInputs.length < 6 && (
              <AddInputButton onClick={handleAddInput}>
                <img src="https://wliv.kr/img/card/plus-icon.svg" />
              </AddInputButton>
            )}
          </SignUpContainer>
        </RulesOfUseGropContainer>
        <WritingHelpBottomSheet></WritingHelpBottomSheet>
      </CommonContentContainer>
    </>
  );
};

export default WriteCardBody;

const PaddingHeader = styled.div`
  padding-top: 40px;
`;

const MemoriesCount = styled.div`
  padding: 8px 0 8px;
  font-size: 12px;
`;

const CardTitle = styled.div`
  font-size: 18px;
  padding-bottom: 6px;
`;

const RulesOfUseGropContainer = styled.div``;

const WritingHelpBottomSheet = styled.div``;

// 신규생성

const LogInSignUpContainer = styled.div`
  padding: 0;
  position: absolute;
  bottom: 0;
  width: 90%;

  display: flex;
  flex-direction: column;
`;

const LogInButton = styled.button`
  width: 100%;
  height: 56px;

  margin-bottom: 12px;

  background-color: var(--main-color);
  border-radius: 4px;

  font-weight: 700;
`;

// 카드 관련

const SignUpContainer = styled.main``;

const InputContainer = styled.div`
  input {
    border: 1px solid #db0fdb;

    ::placeholder {
      color: #867388;
    }

    margin-top: 16px;
    width: 100%;
    padding: 19px;
    font-size: 14px;
    border-radius: 4px;
    outline: none;
  }
`;

const AddInputButton = styled.button`
  border: 1px solid #db0fdb;
  margin-top: 16px;
  width: 100%;
  padding: 19px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  border-radius: 4px;
  outline: none;
`;

// 추억 서브 헤더
const MemoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #cbcbcb;
  align-items: flex-end;
`;

const MemoriesText = styled.div`
  flex: 1;
  font-size: 14px;
  color: #cbcbcb;
  text-align: left;

  padding-top: 6px;
  padding-bottom: 8px;
`;

const CardSubHeaderContainer = styled.main``;

// 노래

const BackgroundMusic = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 13px;
  left: 20px;
  width: 105px;
  height: 32px;
  background-color: #352638;
  // display: inline-block;
  border-radius: 200px;
  cursor: pointer;
  z-index: 1;
`;

const BackgroundMusicIcon = styled.div`
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  left: 12px;
  background: url(https://wliv.kr/img/onbording/icon-music.svg) no-repeat center
    center;
`;

const BackgroundMusicText = styled.div`
  font-size: 12px;
  position: absolute;
  top: 9px;
  left: 38px;
  color: #cbcbcb;
  ::before {
  }
`;

const BackgroundMusicCancel = styled.div`
  width: 72px;
  height: 1px;
  left: 17px;
  background-color: #cbcbcb;
  position: absolute;
  z-index: 3;
`;
