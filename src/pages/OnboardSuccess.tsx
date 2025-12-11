import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import snowmanGood from "../assets/images/snowman_face_good.svg";
import "../style/pages/OnboardSuccess/onboardSuccess.scss";

const OnboardSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="onboard-success">
      <img
        className="onboard-success__image"
        src={snowmanGood}
        alt="가입 완료 눈사람"
      />
      <div className="onboard-success__title">가입 완료!</div>
      <div className="onboard-success__subtitle">
        지금 바로 로그인하고
        <br />
        마음을 뭉쳐보세요!
      </div>
      <div className="onboard-success__button">
        <Button type="large" onClick={() => navigate("/")}>
          로그인 하러 가기
        </Button>
      </div>
    </div>
  );
};

export default OnboardSuccess;
  