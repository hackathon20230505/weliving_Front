import { useEffect, useState } from "react";
import ModifyLetterBody from "../components/ModifyLetter/ModifyLetterBody";
import ModifyLetterHeader from "../components/ModifyLetter/ModifyLetterHeader";
import { getMyLetter } from "../apis/life/letter/getMyLetter";
import { modifyMyLetter } from "../apis/life/letter/modifyMyLetter.ts";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/Common/PageContainer.tsx";

const ModifyLetter = () => {
  const navigate = useNavigate();
  const [myLetterPost, setMyLetterPost] = useState({
    title: "",
    content: "",
  });

  const [originalLetterPost, setOriginalLetterPost] = useState({
    title: "",
    content: "",
  });

  const letterHeaderClickHandler = () => {
    (async () => {
      await modifyMyLetter({
        title: myLetterPost.title,
        content: myLetterPost.content,
      });

      setOriginalLetterPost(myLetterPost);
      setIsActive(false);

      navigate("/viewmyletter");
    })();
  };

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getMyLetter();
      if (data) {
        const { title, content } = data[0];
        setMyLetterPost({
          title,
          content,
        });
        setOriginalLetterPost({
          title,
          content,
        });
      } else {
        alert("편지를 불러오는데 실패했습니다.");
      }
    })();
  }, []);

  return (
    <PageContainer>
      <ModifyLetterHeader
        isActive={isActive}
        letterHeaderClickHandler={letterHeaderClickHandler}
      />
      <ModifyLetterBody
        myLetterPost={myLetterPost}
        originalLetterPost={originalLetterPost}
        setMyLetterPost={setMyLetterPost}
        setIsActive={setIsActive}
      />
    </PageContainer>
  );
};

export default ModifyLetter;
