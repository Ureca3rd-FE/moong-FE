import { useNavigate, useParams } from 'react-router-dom'; // useParams 추가
import BgDay from '../assets/images/bg_day.svg?react';
import Button from '../components/common/Button';
import useUserInfo from '../api/useUserInfo';

const OthersHome = () => {
  const navigate = useNavigate();

  const { userId } = useParams();
  console.log('렌더링됨! userId:', userId); // 이게 안 찍히면 라우터 문제

  const { userInfo } = useUserInfo(userId);

  const receivedName = userInfo?.nickname;

  const handleStart = () => {
    navigate('/nicknameinput', {
      state: { receivedName },
    });
  };

  // if (loading) return <div className="others-home">로딩 중...</div>;
  // if (error)
  //   return <div className="others-home">에러가 발생했습니다: {error}</div>;

  return (
    <div className="others-home">
      {/* 배경 */}
      <div className="others-home__bg">
        <BgDay width="100%" height="100%" preserveAspectRatio="none" />
      </div>

      {/* 텍스트 */}
      <div className="others-home__content">
        <h1 className="text">
          <span className="highlight">{receivedName}</span> 님에게
          <br />
          눈사람을 선물해보세요!
        </h1>
      </div>

      {/* 하단 버튼 */}
      <div className="others-home__button">
        <Button type="large" onClick={handleStart}>
          선물하러 가기
        </Button>
      </div>
    </div>
  );
};

export default OthersHome;
