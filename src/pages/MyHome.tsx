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
  
  const IngredientsAvailable = 
    (userInfo?.ingredient?.branch ?? 0) >= 1 &&
    (userInfo?.ingredient?.carrot ?? 0) >= 1 &&
    (userInfo?.ingredient?.rock ?? 0) >= 1 &&
    (userInfo?.ingredient?.snow ?? 0) >= 1 &&
    (userInfo?.ingredient?.muffler ?? 0) >= 1;

  const handleMake = () => {
    if(IngredientsAvailable){
      navigate('/snowman')
    }
  }

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
      
      <IngredientGroup />

      <div className="my-home__actions">
        <Button type = {IngredientsAvailable ? "large" : "disabled"} 
        onClick={handleMake}> {IngredientsAvailable ? "눈사람 만들기" : "재료를 모두 모아주세요"}</Button>
        <ShareGroup />
      </div>
    </div>
  );
};

export default MyHome;
