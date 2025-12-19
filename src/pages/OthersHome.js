import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import BgDay from '../assets/images/bg_day.svg?react';
import Button from '../components/common/Button';
const OthersHome = ({ receivedName = '나원빈' }) => {
    const navigate = useNavigate();
    const handleStart = () => {
        navigate('/nicknameinput', {
            state: { receivedName }
        });
    };
    return (_jsxs("div", { className: "others-home", children: [_jsx("div", { className: "others-home__bg", children: _jsx(BgDay, { width: "100%", height: "100%", preserveAspectRatio: "none" }) }), _jsx("div", { className: "others-home__content", children: _jsxs("h1", { className: "text", children: [_jsx("span", { className: "highlight", children: receivedName }), " \uB2D8\uC5D0\uAC8C", _jsx("br", {}), "\uB208\uC0AC\uB78C\uC744 \uC120\uBB3C\uD574\uBCF4\uC138\uC694!"] }) }), _jsx("div", { className: "others-home__button", children: _jsx(Button, { type: "large", onClick: handleStart, children: "\uC120\uBB3C\uD558\uB7EC \uAC00\uAE30" }) })] }));
};
export default OthersHome;
