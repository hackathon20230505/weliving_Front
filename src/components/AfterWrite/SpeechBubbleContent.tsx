import { useEffect, useState } from "react";
import styled from "styled-components";

interface SpeechBubbleContentProps {
  text: string;
}

const SpeechBubbleContent = ({ text }: SpeechBubbleContentProps) => {
  const [displayText, setDisplayText] = useState<string>("");

  // text 가 한 단어 씩 일정 시간 간격으로 나타나게 하기
  useEffect(() => {
    setDisplayText("");
    const trimmedText = text
      .split("\n")
      .map((i) => i.trim())
      .join("\n")
      .trim();
    console.log(trimmedText);
    let i = 0;
    const interval = setInterval(() => {
      const p = i;
      setDisplayText((prev) => prev + trimmedText[p]);
      i++;
      if (i === trimmedText.length) {
        clearInterval(interval);
      }
    }, 30);

    return () => {
      clearTimeout(interval);
    };
  }, []);

  return <DisplayTextContent>{displayText}</DisplayTextContent>;
};

const DisplayTextContent = styled.p`
  color: black;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  white-space: pre-wrap;
`;

export default SpeechBubbleContent;
