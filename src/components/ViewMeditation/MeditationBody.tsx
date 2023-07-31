import { FunctionComponent } from "react";
import styled from "styled-components";
import CommonContentContainer from "../Common/CommonContentContainer.tsx";
import { useNavigate } from "react-router-dom";

type ViewOtherLetterBodyProps = {};

const ViewOtherLetterBody: FunctionComponent<ViewOtherLetterBodyProps> = () => {
  const navigate = useNavigate();
  // const token: string = localStorage.getItem("accessToken") as string;
  // const [categoryFilterArray] = useRecoilState(FilterState);
  // const birth = categoryFilterArray.filter((e) => e.isActive)[0].birth;
  // const [firstLoad, setFirstLoad] = useState<boolean>(true);
  // const [displayItem, setDisplayItem] = useState<
  //   {
  //     createdAt: string;
  //     letter_id: number;
  //     title: string;
  //   }[]
  // >([]);

  // const { data, isError, isFetching } = useQuery({
  //   queryKey: [`getOtherLetterList/${birth}`],
  //   queryFn: () => getOtherLetterList(token, birth),
  // });

  // useEffect(() => {
  //   if (!isFetching) setDisplayItem(data?.letter);
  //   setFirstLoad(false);
  // }, [data?.letter, isFetching]);

  // if (firstLoad && isFetching) return <LoadingComponent top={"100px"} />;

  // if (isError) return <FailComponent top={"100px"} />;

  const onClickFirstContent = () => {
    navigate("/meditationPlay/1");
  };

  const onClickSecondContent = () => {
    navigate("/meditationPlay/2");
  };

  const onClickThardContent = () => {
    navigate("/meditationPlay/3");
  };

  const onClickFourContent = () => {
    navigate("/meditationPlay/4");
  };

  return (
    <CommonContentContainer
      xPadding="5%"
      yPadding={"1rem"}
      topSpacing={"0"}
      h={"calc(100% - 100px)"}
    >
      <ReturnHeadDiscription>
        <h1>나를 알기 위한 여행을 시작해보세요</h1>
        <p>클릭하면 명상을 시작할 수 있습니다</p>
        <img src="https://welldie.com/img/arrow-left-icon.svg" alt=""></img>
      </ReturnHeadDiscription>

      <CustomContentContainer>
        <LetterPostContainer onClick={onClickFirstContent}>
          <LetterMainContainer>오늘의 명상</LetterMainContainer>
          <LetterPostTitle>퇴근한 나를 위한 힐링 명상법</LetterPostTitle>
          <LetterPostContent>3분 14초</LetterPostContent>
          <LetterPostDate>마음챙김 명상, 심신안정</LetterPostDate>
        </LetterPostContainer>
        <LetterPostContainer onClick={onClickSecondContent}>
          <LetterPostTitle>자기 전 부정적인 생각을 정리하다</LetterPostTitle>
          <LetterPostContent>3분 08초</LetterPostContent>
          <LetterPostDate>마음챙김 명상, 우울감 해소</LetterPostDate>
        </LetterPostContainer>
        <LetterPostContainer onClick={onClickThardContent}>
          <LetterPostTitle>도시에서 자연을 느끼다</LetterPostTitle>
          <LetterPostContent>3분 21초</LetterPostContent>
          <LetterPostDate>심신안정, 진정효과</LetterPostDate>
        </LetterPostContainer>
        <LetterPostContainer onClick={onClickFourContent}>
          <LetterPostTitle>중요한 순간 나를 진정시키다</LetterPostTitle>
          <LetterPostContent>3분 18초</LetterPostContent>
          <LetterPostDate>긴장감 해소, 자신감 증진</LetterPostDate>
        </LetterPostContainer>
      </CustomContentContainer>
    </CommonContentContainer>
  );
};

export default ViewOtherLetterBody;

const ReturnHeadDiscription = styled.div`
  padding: 30px 20px 13px;
  // color: #000;
  border-radius: 5px;
  margin-bottom: 20px;
  text-align: center;

  p {
    font-size: 13px;
    padding-top: 7px;
    padding-bottom: 10px;
    color: #a5a5a5;
  }

  h1 {
  }

  img {
    margin-top:10px
    width: 7px;
    rotate: -90deg;
    opacity : 60%;
  }
`;

const CustomContentContainer = styled.div`
  height: 100%;
  overflow: auto;
  border-radius: 4px;

  &::-webkit-scrollbar {
    display: none;
  }

  /* overflow: hidden; */
`;

const LetterMainContainer = styled.div`
  background-color: var(--main-color);
  position: relative;
  right: 48px;
  padding: 4px 10px;
  border-radius: 0px 5px 5px 0px;
  margin-bottom: 10px;
  font-size: 11px;
  margin-top: -8px;
  width: 75px;
  text-align: center;
  left: -20px;
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
