// Button.js
import { useRecoilState } from "recoil";
import { isPlayingState } from "../../components/MainContent/atoms/MusicStatus";

function PlayButton() {
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  return (
    <div onClick={() => setIsPlaying((prevIsPlaying) => !prevIsPlaying)}>
      {isPlaying ? "" : ""}
    </div>
  );
}

export default PlayButton;
