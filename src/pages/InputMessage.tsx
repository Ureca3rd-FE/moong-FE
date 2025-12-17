
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Header } from '../components/common/Header';
import Button from '../components/common/Button';

import '../style/inputMessage.scss';

import WritingRed from '../assets/images/writing_red.svg?react';
import WritingGold from '../assets/images/writing_gold.svg?react';
import WritingGreen from '../assets/images/writing_green.svg?react';
import WritingSilver from '../assets/images/writing_silver.svg?react';
import WritingNavy from '../assets/images/writing_navy.svg?react';
import TextField from '../components/common/TextField';
import { usePostMessage } from '../hooks/usePostMessage';

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

    const {sendMessage, loading} = usePostMessage();
    const [message, setMessage] = useState('');

    const state = location.state || {};
    const { receivedName, senderName, selectedId } = state;

    useEffect(() => {
        if (!receivedName || !senderName || !selectedId) {
        alert("잘못된 접근입니다.");
        navigate('/');
    }}, [receivedName, senderName, selectedId, navigate]);

    const currentTheme = THEMES.find(t => t.id === selectedId) || THEMES[0];
    const CurrentImage = currentTheme.component;
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleResizeHeight = () => {
        if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
            }
        };

    useEffect(() => {
        handleResizeHeight();
    }, [message]);

    const handleNext = async () =>{
        if(!message.trim()){
        alert("메세지 내용을 입력해주세요.");
        return;
    }

    try{
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
    } catch(error: any){
        alert(error.message);
        }
    };
    
    return (
            <div className="inputmessage">
                <Header
                text='메시지 작성'
                back={true}
                />

                <div className="inputmessage__content">

                <div className="message-theme">
                    <CurrentImage className="theme-img" width="100%" height="100%" />

                    <div className="theme-overlay">
                        <div className="theme-top">
                            <div className="message-to">To. {receivedName}</div>
                                <div className="message-input-area">
                                <textarea
                                    ref={textareaRef}
                                    className="message-textarea"
                                    placeholder="텍스트 입력"
                                    value={message}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        setMessage(val.slice(0, 500));
                                    }}

                                    spellCheck={false}
                                    maxLength={500}
                                    />
                                <div className="message-count"> ㄴ
                                    {message.length}/500
                                </div>
                            </div>
                        </div>

                        <div className="theme-bottom">
                        <div className="message-from">From. {senderName}</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="inputmessage__button">
        <Button type='large' onClick={handleNext}>전송하기</Button>
        </div>
    </div>
    );
}
export default InputMessage;
