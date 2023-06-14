import { FunctionComponent, useEffect, useState } from "react";
import ViewMyLetterBody from "../components/ViewMyLetter/ViewMyLetterBody";
import PageContainer from "../components/Common/PageContainer";
import LetterHeader from "../components/ViewMyLetter/LetterHeader";
import { useQuery } from "@tanstack/react-query";
import { getMyLetter } from "../apis/life/letter/getMyLetter.ts";
import { modifyIsShare } from "../apis/life/letter/modifyIsShare.ts";
import { checkMemory } from "../apis/users/checkMemory";
import { checkLetter } from "../apis/users/checkLetter";

// type ViewMyLetterProps = {};

const ViewMyLetter: FunctionComponent = () => {
  // 유저가 추억카드 작성 안했으면 리디렉션
  useEffect(() => {
    (async () => {
      const isMemory = await checkMemory();
      const isLetter = await checkLetter();

      // if (!isMemory) {
      //   window.location.href = "/maincontentfirst";
      //   if (!isLetter) {
      //     window.location.href = "/maincontentsecond";
      //   }
      // }

      if (!isMemory || !isLetter) {
        window.location.href = "/maincontentfirst";
      }
    })();
  }, []);
  //

  const { data, isFetching } = useQuery({
    queryKey: ["getMyLetter"],
    queryFn: () => getMyLetter(),
  });

  const [isShare, setIsShare] = useState<number>(0);

  const [showButtons, setShowButtons] = useState<boolean>(false);

  useEffect(() => {
    setIsShare(data?.[0].isShare);
  }, [data, isFetching]);

  const isShareToggleHandler = () => {
    const myData = data?.[0];
    (async () => {
      if (myData) {
        const nextIsShare = isShare === 0 ? 1 : 0;
        await modifyIsShare({
          isShare: nextIsShare,
        });
        setIsShare(nextIsShare);
      }
    })();
  };

  return (
    <PageContainer>
      <LetterHeader
        isSelf={true}
        isShareToggleHandler={isShareToggleHandler}
        isShare={isShare}
        showButtons={showButtons}
      />
      <ViewMyLetterBody setShowButton={setShowButtons} />
    </PageContainer>
  );
};

export default ViewMyLetter;
