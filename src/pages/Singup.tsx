import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSignup } from "../api/useSignUp";
import TextField from "../components/common/TextField";
import Button from "../components/common/Button";
import eyeOpenImg from "../assets/images/eye_open.svg";
import eyeCloseImg from "../assets/images/eye_close.svg";
import '../style/pages/Login/login.scss';
import { Header } from "../components/common/Header";

const Signup = () => {
    const navigate = useNavigate();
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const {signup, loading, error} = useSignup();

    const handleSignup = async() => {
      const trimmedNickname = nickname.trim();
      const trimmedPassword = password.trim();

      console.log('====회원가입시도======');
      console.log('닉네입 :', trimmedNickname, '/길이 : ', trimmedNickname.length);
      console.log('비밀번호 : ', trimmedPassword, '/길이 : ', trimmedPassword.length);
      console.log('비밀번호타입 : ', typeof trimmedPassword);
      console.log('정규식 테스트 :' , /^\d{4}$/.test(trimmedPassword));

      if(!trimmedNickname){
        alert('닉네임을 입력해주세요');
        return;
      }
      if(trimmedNickname.length > 4) {
        alert('닉네임은 4자 이내로 입력해주세요');
        return
      }
      if(!trimmedPassword){
        alert('비밀번호를 입력해주세요');
        return
      }
      if(!/^\d{4}$/.test(trimmedPassword)){
        alert(`비밀번호는 숫자 4자리여야 합니다.\n현재 입력값: "${trimmedPassword}" (${trimmedPassword.length}자)`);
        return;
      }
      console.log('검증성공 API호출시작');
      
      const result = await signup({nickname : trimmedNickname, password : trimmedPassword});
      if(result){
        console.log('회원가입성공');
        navigate('/onboardsuccess');
      }
    }  
    return (
    <div className="login">
      <Header
        text = '회원가입'
        back = {true}
      />
      <div className="login_container">
        <div className="login_field">
          <label className="login_label">닉네임</label>
          <div className = "login_input-row">
          <TextField
            type="text"
            size="medium"
            placeholder="4자 이내로 입력"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <Button type="small">중복검사</Button>
          </div>
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
              onKeyDown={(e) => e.key === 'Enter' && handleSignup()}

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
          <Button type="large" onClick={handleSignup}>회원가입</Button>
        </div>
      </div>
    </div>
    )
  };
  
  export default Signup;
  