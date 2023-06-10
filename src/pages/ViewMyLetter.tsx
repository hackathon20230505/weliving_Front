import { FunctionComponent, useEffect, useState } from "react";
import ViewMyLetterBody from "../components/ViewMyLetter/ViewMyLetterBody";
import PageContainer from "../components/Common/PageContainer";
import LetterHeader from "../components/ViewMyLetter/LetterHeader";
import { useQuery } from "@tanstack/react-query";
import { getMyLetter } from "../apis/life/letter/getMyLetter.ts";
import { modifyIsShare } from "../apis/life/letter/modifyIsShare.ts";

type ViewMyLetterProps = {};

const ViewMyLetter: FunctionComponent<ViewMyLetterProps> = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["getMyLetter"],
    queryFn: () => getMyLetter(),
  });

  const [isShare, setIsShare] = useState<number>(0);

  useEffect(() => {
    setIsShare(data?.[0].isShare);
    console.log("isshare: ", data?.[0].isShare);
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
      />
      <ViewMyLetterBody />
    </PageContainer>
  );
};

export default ViewMyLetter;
