import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate, useParams } from 'react-router-dom'; // useParams 추가
import BgDay from '../assets/images/bg_day.svg?react';
import Button from '../components/common/Button';
import useUserInfo from '../api/useUserInfo';
const OthersHome = () => {
    const navigate = useNavigate();
    const { userId } = useParams();
    console.log('렌더링됨! userId:', userId); // 이게 안 찍히면 라우터 문제
    const { userInfo } = useUserInfo(userId);
    const receivedName = userInfo?.nickname;
    const handleStart = () => {
        navigate('/nicknameinput', {
            state: { receivedName },
        });
    };
    // if (loading) return <div className="others-home">로딩 중...</div>;
    // if (error)
    //   return <div className="others-home">에러가 발생했습니다: {error}</div>;
    return (_jsxs("div", { className: "others-home", children: [_jsx("div", { className: "others-home__bg", children: _jsx(BgDay, { width: "100%", height: "100%", preserveAspectRatio: "none" }) }), _jsx("div", { className: "others-home__content", children: _jsxs("h1", { className: "text", children: [_jsx("span", { className: "highlight", children: receivedName }), " \uB2D8\uC5D0\uAC8C", _jsx("br", {}), "\uB208\uC0AC\uB78C\uC744 \uC120\uBB3C\uD574\uBCF4\uC138\uC694!"] }) }), _jsx("div", { className: "others-home__button", children: _jsx(Button, { type: "large", onClick: handleStart, children: "\uC120\uBB3C\uD558\uB7EC \uAC00\uAE30" }) })] }));
};
export default OthersHome;
