import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TextField from "../components/common/TextField";
import Button from "../components/common/Button";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    return (
    <div className="login-container">
      <h1>로그인</h1>
      
      {/* Medium TextField */}
      <TextField
        size="medium"
        type="text"
        placeholder="아이디"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* Large TextField */}
      <TextField
        size="large"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type = "large">로그인</Button>
      </div>
    )
  };
  
  export default Login;
  