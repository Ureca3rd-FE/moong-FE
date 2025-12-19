import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../components/common/Header';
import Button from '../components/common/Button';
import '../style/pages/Message/inputmessage.scss';
import WritingRed from '../assets/images/writing_red.svg?react';
import WritingGold from '../assets/images/writing_gold.svg?react';
import WritingGreen from '../assets/images/writing_green.svg?react';
import WritingSilver from '../assets/images/writing_silver.svg?react';
import WritingNavy from '../assets/images/writing_navy.svg?react';
import { usePostMessage } from '../api/usePostMessage';
const THEMES = [
    { id: 1, component: WritingRed },
    { id: 2, component: WritingGold },
    { id: 3, component: WritingGreen },
    { id: 4, component: WritingSilver },
    { id: 5, component: WritingNavy },
];
const InputMessage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { sendMessage, loading } = usePostMessage();
    const [message, setMessage] = useState('');
    const state = location.state || {};
    const { receivedName, senderName, selectedId } = state;
    const isButtonDisabled = message.trim().length === 0;
    useEffect(() => {
        if (!receivedName || !senderName || !selectedId) {
            alert("잘못된 접근입니다.");
            navigate('/');
        }
    }, [receivedName, senderName, selectedId, navigate]);
    const currentTheme = THEMES.find(t => t.id === selectedId) || THEMES[0];
    const CurrentImage = currentTheme.component;
    const textareaRef = useRef(null);
    const handleResizeHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    };
    useEffect(() => {
        handleResizeHeight();
    }, [message]);
    const handleNext = async () => {
        if (!message.trim()) {
            alert("메세지 내용을 입력해주세요.");
            return;
        }
        try {
            await sendMessage({
                themeId: selectedId,
                message: message,
                receivedNickname: receivedName,
                senderNickname: senderName
            });
            navigate('/messagesuccess', {
                state: {
                    receivedName,
                    senderName,
                    selectedId,
                    message
                }
            });
        }
        catch (error) {
            alert(error.message);
        }
    };
    return (_jsxs("div", { className: "inputmessage", children: [_jsx(Header, { text: '\uBA54\uC2DC\uC9C0 \uC791\uC131', back: true }), _jsx("div", { className: "inputmessage__content", children: _jsxs("div", { className: "message-theme", children: [_jsx(CurrentImage, { className: "theme-img", width: "100%", height: "100%" }), _jsxs("div", { className: "theme-overlay", children: [_jsxs("div", { className: "theme-top", children: [_jsxs("div", { className: "message-to", children: ["To. ", receivedName] }), _jsxs("div", { className: "message-input-area", children: [_jsx("textarea", { ref: textareaRef, className: "message-textarea", placeholder: "\uD14D\uC2A4\uD2B8 \uC785\uB825", value: message, onChange: (e) => {
                                                        const val = e.target.value;
                                                        setMessage(val.slice(0, 500));
                                                    }, spellCheck: false, maxLength: 500 }), _jsxs("div", { className: "message-count", children: [message.length, "/500"] })] })] }), _jsx("div", { className: "theme-bottom", children: _jsxs("div", { className: "message-from", children: ["From. ", senderName] }) })] })] }) }), _jsx("div", { className: "inputmessage__button", children: _jsx(Button, { type: isButtonDisabled || loading ? 'disabled' : 'large', onClick: handleNext, children: "\uC804\uC1A1\uD558\uAE30" }) })] }));
};
export default InputMessage;
