import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

type NotFoundProps = {};

const NotFound: FunctionComponent<NotFoundProps> = () => {
  // 경로 이동
  const navigate = useNavigate();

  // 위험군인 경우 홈으로 이동
  const handleGoHome = () => {
    navigate("/home");
  };
  return (
    <>
      <div>
        <img src="your_image_path" alt="Introduction Image" />
        <h1>404</h1>
        <p>요청하신 페이지를 찾을 수 없습니다.</p>
      </div>
      <button onClick={handleGoHome}>홈으로 가기</button>
    </>
  );
};

export default NotFound;
