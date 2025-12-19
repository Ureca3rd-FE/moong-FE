import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Header } from '../components/common/Header';

import snowmanImg from '../assets/images/snowman_melt_smile.svg';
import TextField from '../components/common/TextField';
import Button from '../components/common/Button';

const NicknameInput = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [nickname, setNickname] = useState('');
  const receivedName = location.state?.receivedName || 'Unknown';
  const isButtonDisabled = nickname.trim().length === 0;

  const handleNext = () => {
    navigate('/selectTheme', {
      state: {
        receivedName: receivedName,
        senderName: nickname
      }
    });
  }
  return (
    <div className="nickname-input">
      <Header 
        text="닉네임 입력" 
        back={true} 
      />

      <div className="nickname-input__content">
        
        <div className="nickname-input__visual">
          <h2 className="text">
            닉네임을 입력해주세요          
            </h2>
          <img src={snowmanImg} alt="눈사람" className="snowman" />
        </div>
        <div className="nickname-input__input-container">

            <TextField
              type="text"
              size="large"
              placeholder="5자 이내로 입력"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              />
        </div>

        <div className="nickname-input__button-container">
          <Button type={isButtonDisabled ? 'disabled' : 'large'} onClick={handleNext}>전송하기</Button>
        </div>

      </div>
    </div>
  );
};

export default NicknameInput; 