import '../style/home.scss';
import Button from '../components/common/Button';
import homeGroupImg from '../assets/images/Home_Group.svg';
import logo from "../assets/images/logo.svg";
import letter from "../assets/images/letter.svg";

const MyHome = () => {
  return (
    <div className="my-home">
      <div className="my-home__header">
        <div className="my-home__header-icon">
          <img src = {logo} alt ="로고"/>
        </div>
        <div className="my-home__header-icon">
          <img src = {letter} alt = "편지기록함"/>
        </div>
      </div>

      <div className="my-home__content">
        <div className="my-home__home-group">
          <div className="my-home__user-section">
            <h1 className="my-home__user-name">박예진님</h1>
          </div>
          <img src={homeGroupImg} alt="홈 그룹" />
        </div>
      </div>

      <div className="my-home__actions">
        <Button type="large">눈사람 만들기</Button>
      </div>
    </div>
  );
};

export default MyHome;
