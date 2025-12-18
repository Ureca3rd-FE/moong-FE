import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Header } from '../components/common/Header';
import TextField from "../components/common/TextField";
import Button from "../components/common/Button";
import useLogin from "../api/useLogin";
import eyeOpenImg from "../assets/images/eye_open.svg";
import eyeCloseImg from "../assets/images/eye_close.svg";
import '../style/pages/Login/login.scss';

const Login = () => {
    const navigate = useNavigate();
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const {login, loading, error} = useLogin();

    const handleLogin = async () => {
      if(!nickname.trim()){
        alert('닉네임을 입력해주세요');
        return;
      }
      if(!password.trim()){
        alert('비밀번호를 입력해주세요');
        return;
      }

      const result = await login({nickname,password});
      if(result){
        console.log('로그인성공', result);
        navigate('/');
      }
    };
    
  
    return (
    <div className="login">
      <Header
        text = '로그인'
        back
      />
      <div className="login_container">
        <div className="login_field">
          <label className="login_label">닉네임</label>
          <TextField
            type="text"
            size="large"
            placeholder="4자 이내로 입력"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>

        <div className="login_field">
          <label className="login_label">비밀번호</label>
          <div className="login_password-wrapper">
            <TextField
              type={showPassword ? "text" : "password"}
              size="large"
              placeholder="4자리 숫자로 입력"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            />
            <button
              className="login_toggle"
              onClick={() => setShowPassword(!showPassword)}
              type="button"
            >
              <img 
                src={showPassword ? eyeOpenImg : eyeCloseImg} 
                alt={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"} 
              />
            </button>
          </div>
        </div>

        <div className="login_button">
          <Button type="large" onClick={handleLogin}>로그인</Button>
        </div>
      </div>
    </div>
    )
  };
  
  export default Login;
  