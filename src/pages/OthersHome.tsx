import React from 'react';
import { useNavigate } from 'react-router-dom';
import BgDay from '../assets/images/bg_day.svg?react';
import Button from '../components/common/Button';

interface OthersHomeProps {
  receivedName?: string;
}

const OthersHome = ({ receivedName = '나원빈' }: OthersHomeProps) => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/nicknameinput', {
      state: {receivedName}
    })
  }

  return (
    <div className="others-home">
      {/* 배경 */}
      <div className="others-home__bg">
        <BgDay width="100%" height="100%" preserveAspectRatio="none" />
      </div>

      {/* 텍스트 */}
      <div className="others-home__content">
        <h1 className="text">
          <span className="highlight">{receivedName}</span> 님에게<br />
          눈사람을 선물해보세요!
        </h1>
      </div>

      {/* 하단 버튼 */}
      <div className="others-home__button">
        <Button type="large" onClick={handleStart}>선물하러 가기</Button>
      </div>
    </div>
  );
};

export default OthersHome;