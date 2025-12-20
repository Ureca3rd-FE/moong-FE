import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import Kakao from '../../assets/images/kakao.svg?react';
import Link from '../../assets/images/link.svg?react';
const KAKAO_APP_KEY = import.meta.env.VITE_KAKAO_APP_KEY;
const TEMPLATE_ID = Number(import.meta.env.VITE_KAKAO_TEMPLATE_KEY);
const SHARE_URL = 'http://localhost:3000';
const userId = Number(localStorage.getItem('userId'));
const ShareButton = ({ type }) => {
    const sendFoolMessage = () => {
        if (window.Kakao && window.Kakao.Link) {
            window.Kakao.Link.sendCustom({
                templateId: TEMPLATE_ID,
            });
        }
        else {
            console.error('Kakao SDK가 준비되지 않았거나 Link 모듈이 없습니다.');
        }
    };
    const [isKakaoReady, setIsKakaoReady] = useState(false);
    useEffect(() => {
        if (KAKAO_APP_KEY && window.Kakao) {
            if (!window.Kakao.isInitialized()) {
                try {
                    window.Kakao.init(KAKAO_APP_KEY);
                }
                catch (error) {
                    console.error('Kakao Init Failed:', error);
                    return;
                }
            }
            setIsKakaoReady(true);
        }
    }, []);
    return (_jsxs(_Fragment, { children: [type === 'link' && (_jsx("button", { className: "link-share-button", onClick: () => {
                    navigator.clipboard.writeText(`${SHARE_URL}/${userId}`);
                }, children: _jsx(Link, {}) })), type === 'kakao' && (_jsx("button", { className: "kakao-share-button", disabled: !isKakaoReady, onClick: sendFoolMessage, children: _jsx(Kakao, {}) }))] }));
};
export default ShareButton;
