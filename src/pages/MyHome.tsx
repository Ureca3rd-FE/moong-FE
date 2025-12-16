import { useNavigate } from 'react-router-dom';
import useUserInfo from '../api/useUserInfo';
import '../style/home.scss';
import Button from '../components/common/Button';
import logo from '../assets/images/logo.svg';
import letter from '../assets/images/letter.svg';
import IngredientGroup from '../components/home/IngredientGroup';
import ShareGroup from '../components/home/ShareGroup';

const MyHome = () => {
  const navigate = useNavigate();
  const {userInfo, loading, error} = useUserInfo();

  return (
    <div className="my-home">
      <div className="my-home__header">
        <div className="my-home__header-icon">
          <img src={logo} alt="로고" />
        </div>
        <div
          className="my-home__header-icon"
          onClick={() => navigate('/message')}
        >
          <img src={letter} alt="편지기록함" />
        </div>
      </div>

      <div className="my-home__content">
        <div className="my-home__home-group">
          <div className="my-home__user-section">
            <h1 className="my-home__user-name">
              {userInfo?.nickname}<span className="my-home__user-name-suffix">님</span>
            </h1>
          </div>
        </div>
      </div>
      
      <div style={{ padding: '20px', background: '#f0f0f0', margin: '20px' }}>
        <h3>🔍 재료 정보 확인 (임시)</h3>
        <p>눈: {userInfo?.ingredient?.snow}개</p>
        <p>돌: {userInfo?.ingredient?.rock}개</p>
        <p>당근: {userInfo?.ingredient?.carrot}개</p>
        <p>나뭇가지: {userInfo?.ingredient?.branch}개</p>
        <p>목도리: {userInfo?.ingredient?.muffler}개</p>
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
