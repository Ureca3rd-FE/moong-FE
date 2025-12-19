import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    const { signup } = useSignup();
    const handleSignup = async () => {
        const trimmedNickname = nickname.trim();
        const trimmedPassword = password.trim();
        console.log('====회원가입시도======');
        console.log('닉네입 :', trimmedNickname, '/길이 : ', trimmedNickname.length);
        console.log('비밀번호 : ', trimmedPassword, '/길이 : ', trimmedPassword.length);
        console.log('비밀번호타입 : ', typeof trimmedPassword);
        console.log('정규식 테스트 :', /^\d{4}$/.test(trimmedPassword));
        if (!trimmedNickname) {
            alert('닉네임을 입력해주세요');
            return;
        }
        if (trimmedNickname.length > 4) {
            alert('닉네임은 4자 이내로 입력해주세요');
            return;
        }
        if (!trimmedPassword) {
            alert('비밀번호를 입력해주세요');
            return;
        }
        if (!/^\d{4}$/.test(trimmedPassword)) {
            alert(`비밀번호는 숫자 4자리여야 합니다.\n현재 입력값: "${trimmedPassword}" (${trimmedPassword.length}자)`);
            return;
        }
        console.log('검증성공 API호출시작');
        const result = await signup({ nickname: trimmedNickname, password: trimmedPassword });
        if (result) {
            console.log('회원가입성공');
            navigate('/onboardsuccess');
        }
    };
    return (_jsxs("div", { className: "login", children: [_jsx(Header, { text: '\uD68C\uC6D0\uAC00\uC785', back: true }), _jsxs("div", { className: "login_container", children: [_jsxs("div", { className: "login_field", children: [_jsx("label", { className: "login_label", children: "\uB2C9\uB124\uC784" }), _jsxs("div", { className: "login_input-row", children: [_jsx(TextField, { type: "text", size: "medium", placeholder: "4\uC790 \uC774\uB0B4\uB85C \uC785\uB825", value: nickname, onChange: (e) => setNickname(e.target.value) }), _jsx(Button, { type: "small", children: "\uC911\uBCF5\uAC80\uC0AC" })] })] }), _jsxs("div", { className: "login_field", children: [_jsx("label", { className: "login_label", children: "\uBE44\uBC00\uBC88\uD638" }), _jsxs("div", { className: "login_password-wrapper", children: [_jsx(TextField, { type: showPassword ? "text" : "password", size: "large", placeholder: "4\uC790\uB9AC \uC22B\uC790\uB85C \uC785\uB825", value: password, onChange: (e) => setPassword(e.target.value), onKeyDown: (e) => e.key === 'Enter' && handleSignup() }), _jsx("button", { className: "login_toggle", onClick: () => setShowPassword(!showPassword), type: "button", children: _jsx("img", { src: showPassword ? eyeOpenImg : eyeCloseImg, alt: showPassword ? "비밀번호 숨기기" : "비밀번호 보기" }) })] })] }), _jsx("div", { className: "login_button", children: _jsx(Button, { type: "large", onClick: handleSignup, children: "\uD68C\uC6D0\uAC00\uC785" }) })] })] }));
};
export default Signup;
