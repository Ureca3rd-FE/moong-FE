import { useLocation, useNavigate } from 'react-router-dom';
import useUserInfo from '../api/useUserInfo';
import usePostSnowman from '../api/usePostSnowman';
import '../style/home.scss';
import Button from '../components/common/Button';
import logo from '../assets/images/logo.svg';
import letter from '../assets/images/letter.svg';
import IngredientGroup from '../components/home/IngredientGroup';
import ShareGroup from '../components/home/ShareGroup';
import { useEffect } from 'react';
import api from '../hooks/api';

const MyHome = () => {
  const navigate = useNavigate();
  const { userInfo } = useUserInfo();
  const { makesnowman, error: snowmanerror } = usePostSnowman();

  const location = useLocation();

  useEffect(() => {
    // 1. 가이드에서 넘겨준 state가 있는지 확인
    if (location.state?.isFirstVisit) {
      const userId = Number(localStorage.getItem('userId'));

      if (userId) {
        // 2. 비동기 API 호출
        const completeFirstVisit = async () => {
          try {
            await api.patch(`/user/${userId}/first-visit`);
            console.log('첫 방문 처리 완료');

            // 3. (선택사항) 처리가 끝난 후 다시 들어왔을 때 또 실행되지 않도록 state를 비워줍니다.
            window.history.replaceState({}, document.title);
          } catch (error) {
            console.error('첫 방문 처리 실패:', error);
          }
        };

        completeFirstVisit();
      }
    }
  }, [location.state]);

  const IngredientsAvailable =
    (userInfo?.ingredient?.branch ?? 0) >= 1 &&
    (userInfo?.ingredient?.carrot ?? 0) >= 1 &&
    (userInfo?.ingredient?.rock ?? 0) >= 1 &&
    (userInfo?.ingredient?.snow ?? 0) >= 1 &&
    (userInfo?.ingredient?.muffler ?? 0) >= 1;

  const handleMake = async () => {
    console.log('🔍 userId:', localStorage.getItem('userId'));
    console.log('🔍 userId 타입:', typeof localStorage.getItem('userId'));

    if (!IngredientsAvailable) {
      alert('재료를 모두 모아주세요');
      return;
    }
    const userId = localStorage.getItem('userId');
    console.log('🔍 가져온 userId:', userId);
    console.log('🔍 userId === null:', userId === null);
    console.log('🔍 !userId:', !userId);
    if (!userId) {
      console.log('userId가 없어서 여기로옴');
      alert('로그인정보를 찾을 수 없습니다!');
      navigate('/login');
      return;
    }
    console.log('userId가 있어서 여기로와서 API 호출 시작');
    const success = await makesnowman(Number(userId));
    if (success) {
      navigate('/snowman');
    } else {
      alert(snowmanerror || '눈사람 생성에 실패했습니다');
    }
  };

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
          <IngredientGroup />
          <div className="my-home__user-section">
            <h1 className="my-home__user-name">
              {userInfo?.nickname}
              <span className="my-home__user-name-suffix">님</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="my-home__actions">
        <Button
          type={IngredientsAvailable ? 'large' : 'disabled'}
          onClick={handleMake}
        >
          {' '}
          {IngredientsAvailable ? '눈사람 만들기' : '재료를 모두 모아주세요'}
        </Button>
        <ShareGroup />
      </div>
    </div>
  );
};

export default MyHome;
