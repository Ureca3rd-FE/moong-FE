import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import BgDay from '../assets/images/bg_day.svg?react';
import Button from '../components/common/Button';
import useUserInfo from '../api/useUserInfo';
const OthersHome = () => {
    const navigate = useNavigate();
    const { userInfo, loading, error } = useUserInfo();
    const receivedName = userInfo?.nickname || '이름 없음';
    const handleStart = () => {
        navigate('/nicknameinput', {
            state: { receivedName },
        });
    };
    if (loading)
        return _jsx("div", { className: "others-home", children: "\uB85C\uB529 \uC911..." });
    if (error)
        return _jsxs("div", { className: "others-home", children: ["\uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4: ", error] });
    return (_jsxs("div", { className: "others-home", children: [_jsx("div", { className: "others-home__bg", children: _jsx(BgDay, { width: "100%", height: "100%", preserveAspectRatio: "none" }) }), _jsx("div", { className: "others-home__content", children: _jsxs("h1", { className: "text", children: [_jsx("span", { className: "highlight", children: receivedName }), " \uB2D8\uC5D0\uAC8C", _jsx("br", {}), "\uB208\uC0AC\uB78C\uC744 \uC120\uBB3C\uD574\uBCF4\uC138\uC694!"] }) }), _jsx("div", { className: "others-home__button", children: _jsx(Button, { type: "large", onClick: handleStart, children: "\uC120\uBB3C\uD558\uB7EC \uAC00\uAE30" }) })] }));
};
export default OthersHome;
