import { FunctionComponent, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getOtherLetterList } from "../../apis/life/letter/getOtherLetterList";
import { useRecoilState } from "recoil";
import { FilterState } from "./atoms/FilterAtom";
import styled from "styled-components";
import { getTimeDifference } from "../../utils/getTimeDifference";
import CommonContentContainer from "../Common/CommonContentContainer.tsx";
import { useNavigate } from "react-router-dom";
import FailComponent from "../Common/FailComponent.tsx";
import LoadingComponent from "../Common/LoadingComponent.tsx";

type ViewOtherLetterBodyProps = {};

const ViewOtherLetterBody: FunctionComponent<ViewOtherLetterBodyProps> = () => {
  const navigate = useNavigate();
  const content = "클릭 하면 상세페이지로 이동합니다";
  const token: string = localStorage.getItem("accessToken") as string;
  const [categoryFilterArray] = useRecoilState(FilterState);
  const birth = categoryFilterArray.filter((e) => e.isActive)[0].birth;
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const [displayItem, setDisplayItem] = useState<
    {
      createdAt: string;
      letter_id: number;
      title: string;
    }[]
  >([]);

  const { data, isError, isFetching } = useQuery({
    queryKey: [`getOtherLetterList/${birth}`],
    queryFn: () => getOtherLetterList(token, birth),
  });

  useEffect(() => {
    if (!isFetching) setDisplayItem(data?.letter);
    setFirstLoad(false);
  }, [data?.letter, isFetching]);

  if (firstLoad && isFetching) return <LoadingComponent top={"100px"} />;

  if (isError) return <FailComponent top={"100px"} />;

  const PostContainerClickHandler = (id) => {
    navigate(`/viewotherletter/${id}`);
  };

  // const LetterPostSkeleton = () => {
  //   const len = Math.floor(Math.random() * 4) + 2;
  //   return (
  //     <CommonContentContainer
  //       xPadding="5%"
  //       yPadding={"1rem"}
  //       topSpacing={"0"}
  //       h={"calc(100% - 100px)"}
  //     >
  //       {new Array(len).fill(0).map((_, i) => (
  //         <LetterPostContainer key={i} style={{ opacity: 0.5 }}>
  //           <LetterPostTitle>
  //             <SkeletonBox w="30%" h="17px" />
  //           </LetterPostTitle>
  //           <LetterPostContent>
  //             <SkeletonBox w="60%" h="12px" />
  //           </LetterPostContent>
  //           <LetterPostDate>
  //             <SkeletonBox w="40%" h="12px" />
  //           </LetterPostDate>
  //         </LetterPostContainer>
  //       ))}
  //     </CommonContentContainer>
  //   );
  // };

  // if (isFetching) return <LetterPostSkeleton />;

  return (
    <CommonContentContainer
      xPadding="5%"
      yPadding={"1rem"}
      topSpacing={"0"}
      h={"calc(100% - 100px)"}
    >
      <CustomContentContainer>
        {displayItem?.map(({ letter_id, title, createdAt }) => (
          <LetterPostContainer
            key={letter_id}
            onClick={() => PostContainerClickHandler(letter_id)}
          >
            <LetterPostTitle>{title}</LetterPostTitle>
            <LetterPostContent>{content}</LetterPostContent>
            <LetterPostDate>{getTimeDifference(createdAt)}</LetterPostDate>
          </LetterPostContainer>
        ))}
      </CustomContentContainer>
    </CommonContentContainer>
  );
};

export default ViewOtherLetterBody;

const CustomContentContainer = styled.div`
  height: 100%;
  overflow: auto;
  border-radius: 4px;
  /* overflow: hidden; */
`;

const LetterPostContainer = styled.div`
  padding: 20px;
  background-color: #534356;
  border-radius: 4px;

  margin-bottom: 16px;

  overflow: hidden;
`;

const LetterPostTitle = styled.p`
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
`;

const LetterPostContent = styled.p`
  color: #cbcbcb;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  word-break: break-all;

  margin: 4px 0 8px;
`;

const LetterPostDate = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #999;
`;

// interface SkeletonBoxProps {
//   w: string;
//   h: string;
// }
//
// const SkeletonBoxAnimation = keyframes`
//   0% {
//     opacity: 1;
//   }
//   50% {
//     opacity: 0.5;
//   }
//   100% {
//     opacity: 1;
//   }
// `;

// const SkeletonBox = styled.div<SkeletonBoxProps>`
//   width: ${(props) => props.w};
//   height: ${(props) => props.h};
//   background-color: rgba(114, 114, 114, 0.28);
//   border-radius: 4px;
//   animation: ${SkeletonBoxAnimation} 3s infinite ease-in-out;
// `;
