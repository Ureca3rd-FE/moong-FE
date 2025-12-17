import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import snowmanGood from "../assets/images/snowman_face_good.svg";
import "../style/pages/OnboardSuccess/onboardSuccess.scss";

const MessageSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="onboard-success">
      <img
        className="onboard-success__image"
        src={snowmanGood}
        alt="가입 완료 눈사람"
      />
      <div className="onboard-success__title">메세지가 보내졌어요!</div>
      <div className="onboard-success__subtitle">
        나도 친구에게 공유하고
        <br />
        눈사람을 만들어 볼까요?
      </div>
      <div className="onboard-success__button">
        <Button type="large" onClick={() => navigate("/signup")}>
          회원가입하기
        </Button>
      </div>
        <div className="onboard__signup">
          <span className="onboard__text">아직 회원이라면? </span>
          <span 
            className="onboard__link" 
            onClick={() => navigate('/login')}
          >
            로그인하기
          </span>
        </div>
    </div>
  );
};

export default MessageSuccess;
  