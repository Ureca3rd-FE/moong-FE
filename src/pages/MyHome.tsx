import { useNavigate } from 'react-router-dom';
import '../style/home.scss';
import Button from '../components/common/Button';
import logo from '../assets/images/logo.svg';
import letter from '../assets/images/letter.svg';
import IngredientGroup from '../components/home/IngredientGroup';
import ShareGroup from '../components/home/ShareGroup';

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
          onClick={() => navigate('/signup')}
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
        </div>
      </div>

      <IngredientGroup />

      <div className="my-home__actions">
        <Button type="disabled">재료를 모두 모아주세요</Button>
        <ShareGroup />
      </div>
    </div>
  );
};

export default MyHome;
