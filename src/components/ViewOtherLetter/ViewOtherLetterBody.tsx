import { FunctionComponent } from "react";
import CommonContentContainer from "../Common/CommonContentContainer";
import { useQuery } from "@tanstack/react-query";
import { getOtherLetterList } from "../../apis/life/letter/getOtherLetterList";
import { useRecoilState } from "recoil";
import { FilterState } from "./atoms/FilterAtom";
import styled from "styled-components";
import { getTimeDifference } from "../../utils/getTimeDifference";
type ViewOtherLetterBodyProps = {};

const ViewOtherLetterBody: FunctionComponent<ViewOtherLetterBodyProps> = () => {
  const content =
    "dlfkjdsldskldlfkjdsldskldlfkjdsldskldlfkjdsldskldlfkjdsldskldlfkjdsldskldlfkjdsldskldlfkjdsldskldlfkjdsldskldlfkjdsldskl";
  const token: string = localStorage.getItem("accessToken") as string;
  const [categoryFilterArray] = useRecoilState(FilterState);

  const birth = categoryFilterArray.filter((e) => e.isActive === true)[0].birth;

  const { data, isError, isFetching } = useQuery({
    queryKey: [`getOtherLetterList/${birth}`],
    queryFn: () => getOtherLetterList(token, birth),
  });

  console.log(data);

  if (isError) return <div>Error</div>;

  if (isFetching) return <div>Loading</div>;

  return (
    <CommonContentContainer xPadding="5%">
      {data.letter.map(({ letter_id, title, createdAt }) => (
        <LetterPostContainer key={letter_id}>
          <LetterPostTitle>{title}</LetterPostTitle>
          <LetterPostContent>{content}</LetterPostContent>
          <LetterPostDate>{getTimeDifference(createdAt)}</LetterPostDate>
        </LetterPostContainer>
      ))}
    </CommonContentContainer>
  );
};

export default ViewOtherLetterBody;

const LetterPostContainer = styled.div`
  padding: 20px;
  background-color: #fff0ff;
  border-radius: 4px;

  margin-bottom: 16px;

  overflow: scroll;
`;

const LetterPostTitle = styled.p`
  color: #111;
  font-weight: 700;
  font-size: 14px;
`;

const LetterPostContent = styled.p`
  color: #505050;
  font-weight: 400;
  font-size: 14px;

  word-break: break-all;

  margin: 4px 0 8px;
`;

const LetterPostDate = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #999;
`;
