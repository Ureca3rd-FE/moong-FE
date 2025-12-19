import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    };
    return (_jsxs("div", { className: "nickname-input", children: [_jsx(Header, { text: "\uB2C9\uB124\uC784 \uC785\uB825", back: true }), _jsxs("div", { className: "nickname-input__content", children: [_jsxs("div", { className: "nickname-input__visual", children: [_jsx("h2", { className: "text", children: "\uB2C9\uB124\uC784\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694" }), _jsx("img", { src: snowmanImg, alt: "\uB208\uC0AC\uB78C", className: "snowman" })] }), _jsx("div", { className: "nickname-input__input-container", children: _jsx(TextField, { type: "text", size: "large", placeholder: "5\uC790 \uC774\uB0B4\uB85C \uC785\uB825", value: nickname, onChange: (e) => setNickname(e.target.value) }) }), _jsx("div", { className: "nickname-input__button-container", children: _jsx(Button, { type: isButtonDisabled ? 'disabled' : 'large', onClick: handleNext, children: "\uC804\uC1A1\uD558\uAE30" }) })] })] }));
};
export default NicknameInput;
