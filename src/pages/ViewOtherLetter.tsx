import { FunctionComponent } from "react";
import ViewOtherLetterHeader from "../components/ViewOtherLetter/ViewOtherLetterHeader";
import ViewOtherLetterFilter from "../components/ViewOtherLetter/ViewOtherLetterFilter";
import ViewOtherLetterBody from "../components/ViewOtherLetter/ViewOtherLetterBody";
type ViewOtherLetterProps = {};

const ViewOtherLetter: FunctionComponent<ViewOtherLetterProps> = () => {
  return (
    <>
      <ViewOtherLetterHeader />
      <ViewOtherLetterFilter />
      <ViewOtherLetterBody />
    </>
  );
};

export default ViewOtherLetter;
