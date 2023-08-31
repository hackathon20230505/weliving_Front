import { FunctionComponent } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isValidPostState } from "./atoms/isValidPostAtom";
import CommonHeaderContainer from "../Common/CommonHeaderContainer";
import { createMyLetter } from "../../apis/life/letter/createMyLetter";
import { myLetterState } from "./atoms/myLetterAtoms";
import { isPlayingState } from "../../components/MainContent/atoms/MusicStatus";
import { isPlayingStateSecond } from "../../components/MainContent/atoms/MusicStatusSecond";

type WriteLetterHeaderProps = {};

const WriteLetterHeader: FunctionComponent<WriteLetterHeaderProps> = () => {
  // 노래

  const [isPlayingSecond, setIsPlayingSecond] =
    useRecoilState(isPlayingStateSecond);
  const [, setIsPlaying] = useRecoilState(isPlayingState);

  const toggleMusicSecond = () => {
    setIsPlayingSecond(!isPlayingSecond);
    setIsPlaying(false);
  };

  //

  const navigate = useNavigate();
  const [isValidPost] = useRecoilState(isValidPostState);
  const [myLetterPost] = useRecoilState(myLetterState);

  // const onClickGoBackButtonHandler = () => {
  //   navigate("/");
  // };

  const onClickSubmitButtonHandler = async () => {
    const result = createMyLetter(myLetterPost);
    console.log("result", result);
    navigate("/getanswergpt");
  };

  return (
    <CommonHeaderContainer height="56px" xMargin="5%">
      {/* <GoBackButton onClick={onClickGoBackButtonHandler}>
        <img src="https://wliv.kr/img/arrow-left-icon.svg" alt="뒤로 가기" />
      </GoBackButton> */}
      {/*  */}
      <BackgroundMusic
        style={{
          transition: "opacity 800ms, visibility 800ms",
        }}
        className={isPlayingSecond ? "" : "BackgroundMusicCancel"}
        onClick={toggleMusicSecond}
      >
        {isPlayingSecond === false && (
          <BackgroundMusicCancel></BackgroundMusicCancel>
        )}

        <BackgroundMusicIcon></BackgroundMusicIcon>
        <BackgroundMusicText>배경 bgm</BackgroundMusicText>
      </BackgroundMusic>

      {/*  */}
      <PostButtonGropContainer>
        <SubmitButton
          isValidPost={isValidPost}
          onClick={onClickSubmitButtonHandler}
        >
          등록
        </SubmitButton>
      </PostButtonGropContainer>
    </CommonHeaderContainer>
  );
};

export default WriteLetterHeader;

// const GoBackButton = styled.button`
//   position: absolute;
//   padding: 4px 1rem 4px 0;
//   left: 0;
// `;

const PostButtonGropContainer = styled.div`
  position: absolute;
  right: 0;

  width: fit-content;
  display: flex;
  justify-content: space-between;
`;

interface IButtonTypes {
  isValidPost: boolean;
}

const SubmitButton = styled.button<IButtonTypes>`
  width: 57px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  background-color: ${({ isValidPost }) =>
    isValidPost ? "var(--main-color)" : "#5B2950"};

  font-weight: 700;
  font-size: 14px;
  color: ${({ isValidPost }) => (isValidPost ? "var(--white)" : "#867388")};
`;

// 노래

const BackgroundMusic = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 13px;
  left: 0px;
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
  background: url(https://wliv.kr/img/onbording/icon-music.svg) no-repeat
    center center;
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
