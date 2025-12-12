import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TextField from "../components/common/TextField";
import Button from "../components/common/Button";
import eyeOpenImg from "../assets/images/eye_open.svg";
import eyeCloseImg from "../assets/images/eye_close.svg";
import '../style/pages/Login/login.scss';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    return (
    <div className="login">
      <div className="login_container">
        <div className="login_field">
          <label className="login_label">닉네임</label>
          <TextField
            type="text"
            size="large"
            placeholder="4자 이내로 입력"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <Button type="large" onClick={() => navigate('/')}>로그인</Button>
        </div>
      </div>
    </div>
    )
  };
  
  export default Login;
  