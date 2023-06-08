import { FunctionComponent } from "react";
import styled from "styled-components";
type WriterLetterTermComponentProps = {};
import {
  TPTitle,
  TPSubTitle,
  TPContent,
} from "../SignUp/TermPrivacyComponents";

const WriterLetterTermModalComponent: FunctionComponent<
  WriterLetterTermComponentProps
> = () => {
  return (
    <WriterLetterTermModalComponentContainer>
      <TPTitle>
        아래의 경우가 포함된 경우
        <br />
        이용에 제재가 가해질 수 있습니다.
      </TPTitle>
      <br />
      <TPContent>
        1. 존중과 배려: 우리의 웹서비스는 모든 사용자가 서로를 존중하고 배려하는
        것을 기대합니다. 어떤 상황에서도 다른 사용자를 비방하거나 모욕적인
        언어를 사용하지 않아야 합니다.
      </TPContent>
      <TPContent>
        2. 공감과 이해: 서로 다른 경험과 감정을 가진 사용자들이 함께 있습니다.
        이를 이해하고 공감하는 태도를 유지해주세요.
      </TPContent>
      <TPContent>
        3. 부정적 내용: 과도하게 부정적이거나 파괴적인 내용은 허용되지 않습니다.
        이에 해당하는 내용이 게시되면 무통보 삭제될 수 있습니다.
      </TPContent>
      <TPContent>
        4. 타인에 대한 영향: 타인에게 해를 끼치거나 안 좋은 영향을 미칠 수 있는
        내용은 허용되지 않습니다. 이러한 내용은 발견되는 대로 삭제될 수
        있습니다.
      </TPContent>
      <TPContent>
        5. 자해나 자살에 대한 언급: 자해나 자살에 대한 언급이나 이를 조장하는
        내용은 엄격히 금지됩니다. 이러한 내용은 즉시 삭제되며, 필요한 경우 관련
        당국에 보고될 수 있습니다.
      </TPContent>
      <TPContent>
        6. 정보의 정확성: 사실이 아닌 정보나 허위 내용을 공유하는 것은
        금지됩니다. 이러한 내용은 삭제될 수 있습니다.
      </TPContent>
      <TPContent>
        7. 개인정보 보호: 다른 사용자의 개인정보를 수집, 공유하거나 이를
        악용하는 것은 엄격히 금지됩니다. 이러한 행위는 즉각적인 제재를 받을 수
        있습니다.
      </TPContent>
      <TPContent>
        8. 불법적인 행동: 불법적인 행동을 조장하거나 정보를 공유하는 것은 엄격히
        금지됩니다. 이러한 행위는 즉시 삭제되며, 필요한 경우 관련 당국에 보고될
        수 있습니다.
      </TPContent>
      <TPContent>
        9. 스팸 및 상업적 활동: 스팸이나 상업적 활동을 조장하거나 정보를
        공유하는 것은 금지되어 있습니다. 이러한 행위는 즉각적인 제재를 받을 수
        있습니다.
      </TPContent>
      <TPContent>
        10. 위반 시 조치: 이 이용규칙을 위반하는 사용자는 경고 받거나 서비스
        이용이 제한될 수 있습니다.
      </TPContent>
    </WriterLetterTermModalComponentContainer>
  );
};

export default WriterLetterTermModalComponent;

const WriterLetterTermModalComponentContainer = styled.div`
  color: black;
  padding: 20px;
`;
