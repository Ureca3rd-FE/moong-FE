import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    const { login } = useLogin();
    const handleLogin = async () => {
        if (!nickname.trim()) {
            alert('닉네임을 입력해주세요');
            return;
        }
        if (!password.trim()) {
            alert('비밀번호를 입력해주세요');
            return;
        }
        const result = await login({ nickname, password });
        if (result) {
            console.log('로그인성공', result);
            navigate('/');
        }
    };
    return (_jsxs("div", { className: "login", children: [_jsx(Header, { text: '\uB85C\uADF8\uC778', back: true }), _jsxs("div", { className: "login_container", children: [_jsxs("div", { className: "login_field", children: [_jsx("label", { className: "login_label", children: "\uB2C9\uB124\uC784" }), _jsx(TextField, { type: "text", size: "large", placeholder: "4\uC790 \uC774\uB0B4\uB85C \uC785\uB825", value: nickname, onChange: (e) => setNickname(e.target.value) })] }), _jsxs("div", { className: "login_field", children: [_jsx("label", { className: "login_label", children: "\uBE44\uBC00\uBC88\uD638" }), _jsxs("div", { className: "login_password-wrapper", children: [_jsx(TextField, { type: showPassword ? "text" : "password", size: "large", placeholder: "4\uC790\uB9AC \uC22B\uC790\uB85C \uC785\uB825", value: password, onChange: (e) => setPassword(e.target.value), onKeyDown: (e) => e.key === 'Enter' && handleLogin() }), _jsx("button", { className: "login_toggle", onClick: () => setShowPassword(!showPassword), type: "button", children: _jsx("img", { src: showPassword ? eyeOpenImg : eyeCloseImg, alt: showPassword ? "비밀번호 숨기기" : "비밀번호 보기" }) })] })] }), _jsx("div", { className: "login_button", children: _jsx(Button, { type: "large", onClick: handleLogin, children: "\uB85C\uADF8\uC778" }) })] })] }));
};
export default Login;
