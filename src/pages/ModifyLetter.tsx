import { useEffect, useState } from "react";
import CommonContentContainer from "../components/Common/CommonContentContainer";
import ModifyLetterBody from "../components/ModifyLetter/ModifyLetterBody";
import ModifyLetterHeader from "../components/ModifyLetter/ModifyLetterHeader";
import { getMyLetter } from "../apis/life/letter/getMyLetter";
import { modifyMyLetter } from "../apis/life/letter/modifyMyLetter.ts";
import { useNavigate } from "react-router-dom";

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
    <CommonContentContainer marginTop="0">
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
    </CommonContentContainer>
  );
};

export default ModifyLetter;
