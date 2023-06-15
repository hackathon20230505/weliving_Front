import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";
import axios from "axios";
import { RecoilRoot } from "recoil";
import { setupInterceptors } from "./utils/interceptors/setupInterceptors";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRecoilState } from "recoil";
import { isPlayingState } from "./components/MainContent/atoms/MusicStatus";
import AudioButton from "./components/MainContent/AudioButton"; // 임포트
import { isPlayingStateSecond } from "./components/MainContent/atoms/MusicStatusSecond";
import AudioButtonSecond from "./components/MainContent/AudioButtonSecond"; // 임포트

axios.defaults.baseURL = "https://wliv.kr";

setupInterceptors(axios);

function App() {
  function setScreenSize() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();

    window.addEventListener("resize", setScreenSize);
    return () => {
      window.removeEventListener("resize", setScreenSize);
    };
  });

  // Create a client
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <RecoilRoot>
      <MusicPlayer />
      <MusicPlayer2 />
      <AudioButton />
      <AudioButtonSecond />
      {/* Provide the client to your App */}
      <QueryClientProvider client={queryClient}>
        {/* React-query 개발자 도구 */}
        <ReactQueryDevtools />
        <Router>
          <AppRouter />
        </Router>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

const MusicPlayer = () => {
  const [isPlaying] = useRecoilState(isPlayingState);
  const [audioElement] = useState(() => {
    const audio = new Audio("https://wliv.kr/img/music/lofi.mp3");
    audio.loop = true; // 오디오를 무한 재생하도록 설정
    return audio;
  });

  useEffect(() => {
    if (isPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
    return () => {
      audioElement.pause();
    };
  }, [audioElement, isPlaying]);

  return null;
};

const MusicPlayer2 = () => {
  const [isPlayingSecond] = useRecoilState(isPlayingStateSecond);
  const [audioElement] = useState(() => {
    const audio = new Audio("https://wliv.kr/img/music/Meditative.mp3");
    audio.loop = true; // 오디오를 무한 재생하도록 설정
    audio.volume = 0.5;
    return audio;
  });

  useEffect(() => {
    if (isPlayingSecond) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
    return () => {
      audioElement.pause();
    };
  }, [audioElement, isPlayingSecond]);

  return null;
};

export default App;
