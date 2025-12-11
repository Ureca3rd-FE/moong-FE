import { useNavigate } from 'react-router-dom';
import '../style/home.scss';
import Button from '../components/common/Button';
import HomeGroup from '../assets/images/Home_Group.svg?react';
import logo from '../assets/images/logo.svg';
import letter from '../assets/images/letter.svg';
import branchBImg from '../assets/images/branch_B.svg';
import carrotBImg from '../assets/images/carrot_B.svg';
import rockBImg from '../assets/images/rock_B.svg';
import scarfBImg from '../assets/images/scarf_B.svg';
import snowballBImg from '../assets/images/snowball_B.svg';
import ShareButton from '../components/home/ShareButton';

const MyHome = () => {
  const navigate = useNavigate();
  return (
    <div className="my-home">
      <div className="my-home__header">
        <div className="my-home__header-icon">
          <img src={logo} alt="로고" />
        </div>
        <div
          className="my-home__header-icon"
          onClick={() => navigate('/Signup')}
        >
          <img src={letter} alt="편지기록함" />
        </div>
      </div>

      <div className="my-home__content">
        <div className="my-home__home-group">
          <div className="my-home__user-section">
            <h1 className="my-home__user-name">
              박예진<span className="my-home__user-name-suffix">님</span>
            </h1>
          </div>
          <HomeGroup className="my-home__home-group-svg" />
          <div className="my-home__ingredients">
            <div className="my-home__ingredient-item">
              <img src={branchBImg} alt="나뭇가지" />
              <span className="my-home__ingredient-name">나뭇가지</span>
            </div>
            <div className="my-home__ingredient-item">
              <img src={carrotBImg} alt="당근" />
              <span className="my-home__ingredient-name">당근</span>
            </div>
            <div className="my-home__ingredient-item">
              <img src={rockBImg} alt="돌" />
              <span className="my-home__ingredient-name">돌</span>
            </div>
            <div className="my-home__ingredient-item">
              <img src={snowballBImg} alt="눈뭉치" />
              <span className="my-home__ingredient-name">눈뭉치</span>
            </div>
            <div className="my-home__ingredient-item">
              <img src={scarfBImg} alt="목도리" />
              <span className="my-home__ingredient-name">목도리</span>
            </div>
          </div>
        </div>
      </div>

      <div className="my-home__actions">
        <Button type="large">재료를 모두 모아주세요</Button>
        <p className="my-home__share-text">친구에게 공유하고 재료 받기</p>
        <div className="my-home__share-icons">
          <ShareButton type="link" />
          <ShareButton type="kakao" />
        </div>
      </div>
    </div>
  );
};

export default MyHome;
