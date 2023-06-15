// Button.js
import { useRecoilState } from "recoil";
import { isPlayingStateSecond } from "./atoms/MusicStatusSecond";

function PlayButtonSecond() {
  const [isPlayingSecond, setIsPlayingSecond] =
    useRecoilState(isPlayingStateSecond);

  return (
    <div onClick={() => setIsPlayingSecond((prevIsPlaying) => !prevIsPlaying)}>
      {isPlayingSecond ? "" : ""}
    </div>
  );
}

export default PlayButtonSecond;
